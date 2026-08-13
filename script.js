document.getElementById('cyberForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const issue = document.getElementById('issueType').value;
    const resultBox = document.getElementById('guidanceResult');
    const title = document.getElementById('guidanceTitle');
    const steps = document.getElementById('guidanceSteps');

    // Database of Safety Steps
    const safetyGuides = {
        'fake-account': {
            title: 'Action Steps for Fake Account / Impersonation:',
            steps: [
                '<strong>Report Profile:</strong> Platform (Instagram, Facebook, Twitter, etc.) ke report feature par jaakar "Impersonation / Fake Account" report karein.',
                '<strong>Inform Contacts:</strong> Apne dosto aur family ko aware karein ki is fake account dwara bheje gaye kisi message/money request ka reply na karein.',
                '<strong>Take Screenshots:</strong> Fake profile ke URL aur messages ka screenshot lekar proof ke taur par rakhein.'
            ]
        },
        'suspicious-link': {
            title: 'Action Steps for Suspicious Link / Phishing:',
            steps: [
                '<strong>Do NOT Open:</strong> Us link par click bilkul na karein.',
                '<strong>Clear Cache:</strong> Agar link galti se khol diya hai, toh turant browser data/cookies clear karein.',
                '<strong>Do NOT Share OTP:</strong> Koi bhi sensitive details, passwords, ya OTP wahan enter na karein.',
                '<strong>Scan Device:</strong> Apne phone ya computer par ek baar Antivirus scan run karein.'
            ]
        },
        'online-fraud': {
            title: 'Action Steps for Online Financial Fraud:',
            steps: [
                '<strong>Block Cards/Banking:</strong> Turant apne bank ko call karke debit/credit cards aur net banking block karwayein.',
                '<strong>Call 1930:</strong> Immediate financial recovery ke liye National Cyber Crime Helpline Number <strong>1930</strong> par call karein.',
                '<strong>Report Online:</strong> Cybercrime portal (cybercrime.gov.in) par transaction details ke saath complaint register karein.'
            ]
        },
        'hacked-account': {
            title: 'Action Steps for Hacked Account:',
            steps: [
                '<strong>Reset Password:</strong> Agar account access ho raha hai, toh turant strong password lagayein.',
                '<strong>Account Recovery:</strong> Agar lock out ho gaye hain, toh platform ke "Forgot Password" ya "Account Recovery" page par jayein.',
                '<strong>Turn On 2FA:</strong> Two-Factor Authentication (2FA) ko enable karein.',
                '<strong>Log Out All Devices:</strong> Settings mein jaakar "Log out of all session/devices" select karein.'
            ]
        }
    };

    if (safetyGuides[issue]) {
        title.innerText = safetyGuides[issue].title;
        
        let ul = document.createElement('ul');
        safetyGuides[issue].steps.forEach(step => {
            let li = document.createElement('li');
            li.innerHTML = step;
            ul.appendChild(li);
        });

        steps.innerHTML = '';
        steps.appendChild(ul);
        
        resultBox.classList.remove('hidden');
        resultBox.scrollIntoView({ behavior: 'smooth' });
    }
});
