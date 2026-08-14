function checkSpamNumber() {

const input = document  
    .getElementById("mobileNumber")  
    .value  
    .trim();  

const result = document  
    .getElementById("spamResult");  

// Indian mobile number format  
const indianNumber = /^[6-9][0-9]{9}$/;  

if (!indianNumber.test(input)) {  

    result.className = "spam-result spam-unknown";  

    result.innerHTML = `  
        <h3>⚠️ Invalid Number</h3>  
        <p>  
            Please enter a valid 10-digit Indian mobile number  
            starting with 6, 7, 8 or 9.  
        </p>  
    `;  

    return;  
}  

/*  
   DEMO SPAM DATABASE  

   Ye sirf testing ke liye hai.  
   Real spam database nahi hai.  
*/  

const spamDatabase = {  

    "9876543210": {  
        status: "spam",  
        reason: "Multiple spam reports in demo database."  
    },  

    "9123456789": {  
        status: "spam",  
        reason: "Reported for suspicious messages in demo database."  
    },  

    "9988776655": {  
        status: "spam",  
        reason: "Reported for suspected scam activity in demo database."  
    }  
};  


// Check database  
if (spamDatabase[input]) {  

    const data = spamDatabase[input];  

    if (data.status === "spam") {  

        result.className = "spam-result spam-danger";  

        result.innerHTML = `  
            <h3>🔴 SPAM / FRAUD REPORTED</h3>  

            <p>  
                Number: <strong>${input}</strong>  
            </p>  

            <p>  
                ${data.reason}  
            </p>  

            <p>  
                ⚠️ Do not share OTP, PIN, CVV,  
                passwords or banking information.  
            </p>  

            <p>  
                If you have lost money, contact  
                <strong>1930</strong> immediately.  
            </p>  

            <a  
                href="https://cybercrime.gov.in/"  
                target="_blank"  
                rel="noopener"  
            >  
                Report Cyber Crime  
            </a>  
        `;  

        return;  
    }  
}  


/*  
   For numbers not present in the demo database,  
   don't claim that they are definitely safe.  
*/  

result.className = "spam-result spam-unknown";  

result.innerHTML = `  
    <h3>🟡 NO KNOWN REPORT IN DEMO DATABASE</h3>  

    <p>  
        Number: <strong>${input}</strong>  
    </p>  

    <p>  
        We don't have a spam report for this number  
        in our current demo database.  
    </p>  

    <p>  
        This does <strong>NOT</strong> mean the number  
        is definitely safe or real.  
    </p>  
`;

}
Pahele wala code hatake ye wala code daly kya
