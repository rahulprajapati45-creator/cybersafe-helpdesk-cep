// 1. Phone Number Fraud Checker Logic
document.getElementById('phoneCheckForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const phone = document.getElementById('phoneNumber').value.trim();
    const resultBox = document.getElementById('phoneResult');

    // Mock Database for testing
    const reportedFraudNumbers = ['9876543210', '9123456789', '8888888888', '9999999999'];
    const verifiedSafeNumbers = ['1800111111', '1930000000', '9000000000'];

    resultBox.classList.remove('hidden', 'status-safe', 'status-fraud', 'status-unknown');

    if (reportedFraudNumbers.includes(phone)) {
        resultBox.classList.add('status-fraud');
        resultBox.innerHTML = `⚠️ <strong>WARNING:</strong> Number ${phone} has been reported for <strong>ONLINE FRAUD / SCAM</strong> multiple times! Do not transfer money or share OTP.`;
    } else if (verifiedSafeNumbers.includes(phone)) {
        resultBox.classList.add('status-safe');
        resultBox.innerHTML = `✅ <strong>VERIFIED SAFE:</strong> Number ${phone} belongs to an officially recognized organization/helpline.`;
    } else {
        resultBox.classList.add('status-unknown');
        resultBox.innerHTML = `ℹ️ <strong>UNVERIFIED NUMBER:</strong> Number ${phone} is not listed in our fraud database yet. Always stay cautious and never share personal information or OTP.`;
    }
});

// 2. Cyber Issue Guidance Logic
document.getElementById('cyberForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const issue = document.getElementById('issueType').value;
    const resultBox = document.getElementById('guidanceResult');
    const title = document.getElementById('guidanceTitle');
    const steps = document.getElementById('guidanceSteps');

    const safetyGuides = {
        'fake-account': {
            title: 'Action Steps for Fake Account / Impersonation:',
            steps: ['Report profile on platform.', 'Inform your friends not to send money.', 'Take screenshots as proof.']
        },
        'suspicious-link': {
            title: 'Action Steps for Suspicious Link:',
            steps: ['Do NOT click or open the link.', 'Clear browser cache if clicked.', 'Never enter password or OTP.']
        },
        'online-fraud': {
            title: 'Action Steps for Online Financial Fraud:',
            steps: ['Immediately block cards/bank account.', 'Call Helpline 1930 for financial recovery.', 'Report at cybercrime.gov.in.']
        },
        'hacked-account': {
            title: 'Action Steps for Hacked Account:',
            steps: ['Reset password immediately.', 'Turn on Two-Factor Authentication (2FA).', 'Log out from all devices.']
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
    }
});

// 3. Login Modal Toggle Logic
const loginModal = document.getElementById('loginModal');
document.getElementById('openLoginBtn').addEventListener('click', () => loginModal.classList.remove('hidden'));
document.getElementById('closeLoginBtn').addEventListener('click', () => loginModal.classList.add('hidden'));

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Login Successful!');
    loginModal.classList.add('hidden');
});
