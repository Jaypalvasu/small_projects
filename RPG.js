function generate(){

    let num=" 0123456789 ";

    let OTP ="";

for(let i=0; i<4; i++){
    
  OTP+=num[Math.floor(Math.random()*10)];
}
document.getElementById("otp").innerHTML=OTP;
}