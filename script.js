// =====================================================
// LOGIN / LOGOUT
// =====================================================

const loginPage =
    document.getElementById("loginPage");

const homePage =
    document.getElementById("homePage");

const loginForm =
    document.getElementById("loginForm");

const logoutBtn =
    document.getElementById("logoutBtn");


// Check login status

if (
    localStorage.getItem(
        "cyberShieldLoggedIn"
    ) === "true"
) {

    showHome();

} else {

    showLogin();

}


// LOGIN

loginForm.addEventListener(
    "submit",
    function (e) {

        e.preventDefault();

        const email =
            document.getElementById(
                "email"
            ).value.trim();

        const password =
            document.getElementById(
                "password"
            ).value.trim();


        if (
            email === "" ||
            password === ""
        ) {

            alert(
                "Please enter email and password."
            );

            return;

        }


        localStorage.setItem(
            "cyberShieldLoggedIn",
            "true"
        );


        showHome();

    }
);


// LOGOUT

logoutBtn.addEventListener(
    "click",
    function () {

        localStorage.removeItem(
            "cyberShieldLoggedIn"
        );

        showLogin();

    }
);


function showLogin() {

    loginPage.classList.remove(
        "hidden"
    );

    homePage.classList.add(
        "hidden"
    );

}


function showHome() {

    loginPage.classList.add(
        "hidden"
    );

    homePage.classList.remove(
        "hidden"
    );

}



// =====================================================
// MOBILE NUMBER CHECKER
// =====================================================

document
    .getElementById(
        "phoneCheckForm"
    )
    .addEventListener(
        "submit",
        function (e) {

            e.preventDefault();


            const phone =
                document
                    .getElementById(
                        "phoneNumber"
                    )
                    .value.trim();


            const resultBox =
                document.getElementById(
                    "phoneResult"
                );


            // Validate number

            if (
                !/^[0-9]{10}$/.test(
                    phone
                )
            ) {

                resultBox.className =
                    "phone-result-box status-fraud";

                resultBox.classList.remove(
                    "hidden"
                );

                resultBox.innerHTML =

                    "❌ Please enter a valid 10-digit mobile number.";

                return;

            }


            // Official verification

            resultBox.className =
                "phone-result-box status-unknown";

            resultBox.classList.remove(
                "hidden"
            );


            resultBox.innerHTML = `

                <strong>
                    🔎 Number Ready for Verification
                </strong>

                <br><br>

                Mobile Number:
                <strong>${phone}</strong>

                <br><br>

                To check this number using the
                official cybercrime suspect repository,
                open the National Cyber Crime
                Reporting Portal.

                <br><br>

                <a
                    href="https://www.cybercrime.gov.in/"
                    target="_blank"
                    class="result-link">

                    🔐 Open Official Verification

                </a>

                <br><br>

                <small>

                    Note: An unlisted number cannot be
                    guaranteed to be completely safe.

                </small>

            `;

        }
    );



// =====================================================
// CYBER PROBLEM GUIDANCE
// =====================================================

document
    .getElementById(
        "cyberForm"
    )
    .addEventListener(
        "submit",
        function (e) {

            e.preventDefault();


            const issue =
                document.getElementById(
                    "issueType"
                ).value;


            const resultBox =
                document.getElementById(
                    "guidanceResult"
                );


            const title =
                document.getElementById(
                    "guidanceTitle"
                );


            const steps =
                document.getElementById(
                    "guidanceSteps"
                );



            // =========================================
            // GUIDANCE DATABASE
            // =========================================

            const safetyGuides = {


                // FAKE ACCOUNT

                "fake-account": {

                    title:
                        "👤 Fake Account / Impersonation",

                    steps: [

                        "Take screenshots of the fake account.",

                        "Report the fake profile on the social media platform.",

                        "Inform friends and family not to send money.",

                        "Do not share OTP, password or personal information.",

                        "Keep screenshots and other evidence safely."

                    ]

                },


                // SUSPICIOUS LINK

                "suspicious-link": {

                    title:
                        "🔗 Suspicious Link / Phishing",

                    steps: [

                        "Do NOT click the suspicious link.",

                        "Never enter your password, OTP, PIN or CVV.",

                        "Check the website address carefully.",

                        "If you entered your password, change it immediately.",

                        "Enable Two-Factor Authentication (2FA)."

                    ]

                },


                // ONLINE FRAUD

                "online-fraud": {

                    title:
                        "💳 Online Fraud",

                    steps: [

                        "Immediately contact your bank or payment provider.",

                        "Call the National Cyber Crime Helpline 1930.",

                        "Report the incident at cybercrime.gov.in.",

                        "Keep transaction ID/UTR and screenshots.",

                        "Do not send additional money to the fraudster."

                    ]

                },


                // HACKED ACCOUNT

                "hacked-account": {

                    title:
                        "🔐 Hacked Account",

                    steps: [

                        "Change your password immediately.",

                        "Enable Two-Factor Authentication (2FA).",

                        "Log out from unknown devices.",

                        "Check account recovery email and phone number.",

                        "Contact the platform's official support."

                    ]

                }

            };



            // Display guidance

            if (
                safetyGuides[issue]
            ) {

                title.innerText =
                    safetyGuides[
                        issue
                    ].title;


                steps.innerHTML = "";


                const ul =
                    document.createElement(
                        "ul"
                    );


                safetyGuides[
                    issue
                ].steps.forEach(
                    function (step) {

                        const li =
                            document.createElement(
                                "li"
                            );

                        li.innerText =
                            step;

                        ul.appendChild(
                            li
                        );

                    }
                );


                steps.appendChild(
                    ul
                );


                resultBox.classList.remove(
                    "hidden"
                );


                resultBox.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }

        }
    );
