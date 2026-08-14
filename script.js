/* =====================================================
   LOGIN
===================================================== */

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(e) {

        e.preventDefault();

        const email =
            document.getElementById("email").value.trim();

        const password =
            document.getElementById("password").value.trim();

        const message =
            document.getElementById("loginMessage");

        if (!email || !password) {

            message.textContent =
                "Please enter email and password.";

            message.style.color = "red";

            return;
        }

        document
            .getElementById("loginPage")
            .classList.add("hidden");

        document
            .getElementById("mainContent")
            .classList.remove("hidden");

        window.scrollTo(0, 0);
    });
}


/* =====================================================
   LOGOUT
===================================================== */

const logoutBtn =
    document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", function() {

        document
            .getElementById("mainContent")
            .classList.add("hidden");

        document
            .getElementById("loginPage")
            .classList.remove("hidden");

        document.getElementById("email").value = "";
        document.getElementById("password").value = "";

        window.scrollTo(0, 0);
    });
}


/* =====================================================
   MOBILE NUMBER SPAM CHECKER
===================================================== */

function checkSpamNumber() {

    const input =
        document
            .getElementById("mobileNumber")
            .value
            .trim();

    const result =
        document.getElementById("spamResult");


    /* Indian mobile number format */

    const indianNumber =
        /^[6-9][0-9]{9}$/;


    /* Invalid number */

    if (!indianNumber.test(input)) {

        result.className =
            "spam-result spam-unknown";

        result.innerHTML = `
            <h3>⚠️ Invalid Number</h3>

            <p>
                Please enter a valid 10-digit
                Indian mobile number.
            </p>
        `;

        result.classList.remove("hidden");

        return;
    }


    /* =================================================
       DEMO SPAM DATABASE
    ================================================= */

    const spamDatabase = {

        "9876543210": {
            reason:
            "Multiple spam reports in demo database."
        },

        "9123456789": {
            reason:
            "Reported for suspicious messages in demo database."
        },

        "9988776655": {
            reason:
            "Reported for suspected scam activity in demo database."
        }

    };


    /* =================================================
       SPAM NUMBER FOUND
    ================================================= */

    if (spamDatabase[input]) {

        result.className =
            "spam-result spam-danger";

        result.innerHTML = `

            <h3>
                🔴 SPAM / FRAUD REPORTED
            </h3>

            <p>
                Number:
                <strong>${input}</strong>
            </p>

            <p>
                ${spamDatabase[input].reason}
            </p>

            <p>
                ⚠️ Do not share OTP, PIN, CVV,
                passwords or banking information.
            </p>

            <p>
                If you have lost money,
                contact <strong>1930</strong>.
            </p>

            <a
                href="https://cybercrime.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
            >
                📝 Report Cyber Crime
            </a>
        `;

        result.classList.remove("hidden");

        return;
    }


    /* =================================================
       NUMBER NOT FOUND
    ================================================= */

    result.className =
        "spam-result spam-unknown";

    result.innerHTML = `

        <h3>
            🟡 NO KNOWN REPORT
        </h3>

        <p>
            Number:
            <strong>${input}</strong>
        </p>

        <p>
            No spam report was found for this number
            in our current demo database.
        </p>

        <p>
            ⚠️ This does NOT mean the number
            is definitely safe or genuine.
        </p>
    `;

    result.classList.remove("hidden");
}


/* =====================================================
   CYBER SAFETY GUIDANCE
===================================================== */

function getGuidance() {

    const issue =
        document.getElementById("issueType").value;

    const result =
        document.getElementById("guidanceResult");


    if (!issue) {

        result.className = "guidance";

        result.innerHTML = `
            <h3>⚠️ Select a Problem</h3>

            <p>
                Please select your cyber problem first.
            </p>
        `;

        result.classList.remove("hidden");

        return;
    }


    const guides = {

        fake: {
            title:
            "👤 Fake Account / Impersonation",

            steps: [
                "Report the fake profile using the platform's official report option.",
                "Take screenshots of the profile and suspicious messages.",
                "Inform friends and family about the fake account.",
                "Do not share OTP, password or personal information."
            ]
        },


        phishing: {
            title:
            "🔗 Suspicious Link / Phishing",

            steps: [
                "Do not click suspicious links.",
                "Do not enter OTP, password or banking details on unknown websites.",
                "If you entered your password, change it using the official website or app.",
                "Run a security scan on your device."
            ]
        },


        fraud: {
            title:
            "💳 Online Financial Fraud",

            steps: [
                "Contact your bank immediately through its official contact channel.",
                "Secure affected banking or card access.",
                "For financial cyber fraud in India, call 1930 as soon as possible.",
                "Report the incident through the official cybercrime portal."
            ]
        },


        hacked: {
            title:
            "🔐 Hacked Account",

            steps: [
                "Change your password immediately if you still have access.",
                "Use the official account recovery option if locked out.",
                "Enable Two-Factor Authentication.",
                "Log out unknown devices and review account activity."
            ]
        },


        otp: {
            title:
            "📲 OTP / Banking Scam",

            steps: [
                "Never share OTP with anyone.",
                "Never share your PIN, CVV or password.",
                "Contact your bank through its official number if you notice suspicious activity.",
                "If money was lost, report the incident promptly."
            ]
        },


        social: {
            title:
            "📱 Social Media Problem",

            steps: [
                "Change your account password.",
                "Enable Two-Factor Authentication.",
                "Check active sessions and remove unknown devices.",
                "Report suspicious profiles or messages through the platform."
            ]
        }

    };


    const selected = guides[issue];

    let html = `
        <h3>${selected.title}</h3>
        <ol>
    `;


    selected.steps.forEach(function(step) {

        html += `
            <li>${step}</li>
        `;

    });


    html += `
        </ol>
    `;


    if (issue === "fraud") {

        html += `

            <div class="warning">

                🚨 <strong>Emergency:</strong>

                If you have lost money because
                of cyber fraud, call

                <a href="tel:1930">
                    <strong>1930</strong>
                </a>

                and report the incident through

                <a
                    href="https://cybercrime.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    cybercrime.gov.in
                </a>.

            </div>

        `;
    }


    result.className = "guidance";

    result.innerHTML = html;

    result.classList.remove("hidden");

    result.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}
