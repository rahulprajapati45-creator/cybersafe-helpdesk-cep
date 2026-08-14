// =====================================================
// REAL-TIME MOBILE NUMBER VALIDATION
// Abstract API
// =====================================================

const API_KEY = "YOUR_API_KEY";

document
    .getElementById("phoneCheckForm")
    .addEventListener("submit", async function (e) {

        e.preventDefault();

        const phoneInput =
            document.getElementById("phoneNumber");

        const resultBox =
            document.getElementById("phoneResult");

        const phone =
            phoneInput.value.trim();

        // ---------------------------------------------
        // Validate Indian 10 digit number
        // ---------------------------------------------

        if (!/^[6-9][0-9]{9}$/.test(phone)) {

            resultBox.className =
                "phone-result-box status-fraud";

            resultBox.classList.remove("hidden");

            resultBox.innerHTML = `
                ❌ <strong>Invalid Number</strong>
                <br><br>
                Please enter a valid Indian 10-digit
                mobile number starting with 6, 7, 8 or 9.
            `;

            return;
        }


        // Loading message

        resultBox.className =
            "phone-result-box status-unknown";

        resultBox.classList.remove("hidden");

        resultBox.innerHTML = `
            🔎 <strong>Checking number...</strong>
            <br><br>
            Please wait while we verify the number.
        `;


        try {

            // -----------------------------------------
            // Abstract API request
            // -----------------------------------------

            const response = await fetch(
                `https://phonevalidation.abstractapi.com/v1/?api_key=${API_KEY}&phone=+91${phone}`
            );


            if (!response.ok) {

                throw new Error(
                    "API request failed"
                );

            }


            const data =
                await response.json();


            // -----------------------------------------
            // API ERROR
            // -----------------------------------------

            if (data.error) {

                throw new Error(
                    data.error.message ||
                    "Unable to verify number"
                );

            }


            // -----------------------------------------
            // INVALID NUMBER
            // -----------------------------------------

            if (data.valid === false) {

                resultBox.className =
                    "phone-result-box status-fraud";

                resultBox.innerHTML = `

                    🔴
                    <strong>
                        INVALID / NOT VALID
                    </strong>

                    <br><br>

                    Number:
                    <strong>+91 ${phone}</strong>

                    <br><br>

                    This number could not be
                    verified as a valid phone number.

                `;

                return;
            }


            // -----------------------------------------
            // VALID NUMBER
            // -----------------------------------------

            let riskText =
                "Risk information unavailable";

            let riskClass =
                "status-unknown";


            if (
                typeof data.risk_score === "number"
            ) {

                const risk =
                    data.risk_score;


                if (risk >= 0.7) {

                    riskText =
                        "HIGH RISK";

                    riskClass =
                        "status-fraud";

                }

                else if (risk >= 0.4) {

                    riskText =
                        "MEDIUM RISK";

                    riskClass =
                        "status-unknown";

                }

                else {

                    riskText =
                        "LOW RISK";

                    riskClass =
                        "status-safe";

                }

            }


            resultBox.className =
                `phone-result-box ${riskClass}`;


            resultBox.innerHTML = `

                ${
                    riskClass === "status-safe"
                    ? "🟢"
                    : riskClass === "status-fraud"
                    ? "🔴"
                    : "🟠"
                }

                <strong>
                    ${riskText}
                </strong>

                <br><br>

                <strong>Number:</strong>
                +91 ${phone}

                <br>

                <strong>Valid:</strong>
                ${data.valid ? "Yes" : "No"}

                <br>

                <strong>Type:</strong>
                ${data.line_type || "Unknown"}

                <br>

                <strong>Carrier:</strong>
                ${data.carrier || "Unknown"}

                <br>

                <strong>Location:</strong>
                ${data.registered_location || "Unknown"}

                <br>

                <strong>Country:</strong>
                ${data.country_name || "India"}

                <br><br>

                <strong>Risk Score:</strong>
                ${
                    typeof data.risk_score === "number"
                    ? data.risk_score
                    : "Not available"
                }

                <br><br>

                <small>

                    ⚠️ A valid/low-risk result does NOT
                    guarantee that the caller is trustworthy
                    or that the number is not being used for
                    scams. Do not share OTP, PIN, CVV or
                    passwords.

                </small>

            `;

        }

        catch (error) {

            console.error(error);


            resultBox.className =
                "phone-result-box status-fraud";


            resultBox.innerHTML = `

                ❌
                <strong>
                    Verification Failed
                </strong>

                <br><br>

                We could not connect to the
                verification service.

                <br><br>

                Please try again later.

            `;

        }

    });
