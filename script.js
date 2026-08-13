const reportedNumbers = {
  "9876543210": "Multiple community reports: suspicious payment/OTP requests.",
  "9123456789": "Reported for fake prize/lottery messages."
};

function login(){
  const email=document.getElementById("loginEmail").value.trim();
  const pass=document.getElementById("loginPassword").value;
  if(!email || !email.includes("@") || !pass){ alert("Please enter a valid email and password."); return; }
  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");
  showSection("home");
}
function logout(){
  document.getElementById("app").classList.add("hidden");
  document.getElementById("loginPage").classList.remove("hidden");
}
function showSection(id){
  document.querySelectorAll(".section").forEach(s=>s.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
  window.scrollTo(0,0);
}
function cleanNumber(v){ return v.replace(/\D/g,"").slice(-10); }
function checkNumber(){
  const n=cleanNumber(document.getElementById("phone").value);
  const result=document.getElementById("result");
  if(n.length!==10){
    result.innerHTML='<div class="unknown">Please enter a valid 10-digit phone number.</div>'; return;
  }
  if(reportedNumbers[n]){
    result.innerHTML='<div class="danger"><b>⚠️ Caution: Reported as suspicious</b><br>'+reportedNumbers[n]+'<br><br>Do not share OTP, PIN, passwords or payment details. Verify the sender through an official channel.</div>';
  }else{
    result.innerHTML='<div class="safe"><b>✅ No report found in our demo database</b><br>This does <b>not</b> mean the number is guaranteed genuine. Stay careful and verify unexpected requests.</div>';
  }
}
function submitQuery(){
  const name=document.getElementById("qName").value.trim();
  const contact=document.getElementById("qContact").value.trim();
  const text=document.getElementById("qText").value.trim();
  const out=document.getElementById("queryResult");
  if(!name||!contact||!text){out.textContent="Please fill all fields.";return;}
  const id="Q"+Math.floor(10000+Math.random()*90000);
  out.innerHTML="✅ Query submitted successfully. Your Query ID is <b>"+id+"</b>.";
  document.getElementById("qName").value="";
  document.getElementById("qContact").value="";
  document.getElementById("qText").value="";
}
