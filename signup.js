function validate(){
    var email=document.getElementById('email').value;
    var num=document.getElementById('number').value;
    var pwd=document.getElementById('pwd');
    var rpwd=document.getElementById('rpwd').value;
    
    var err3=document.getElementById('err3');
    


    var emailReg=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phnReg=/^([0-9]{3}[-]{1}[0-9]{3}[-]{1}[0-9]{4})|([0-9]{3}[.]{1}[0-9]{3}[.]{1}[0-9]{4})|([0-9]{3}[ ]{1}[0-9]{3}[ ]{1}[0-9]{4})$/;
    var pwdReg=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9@#]{8,16}$/;

    let isValid= true;


    if(emailReg.test(email)){
        document.getElementById('err1').innerHTML=" ";
    
    }
    else{
        document.getElementById('err1').innerHTML="Email is invalid ";
        document.getElementById('err1').style.color="red";
        return false;

    }

    if(phnReg.test(num)){
        document.getElementById('err2').innerHTML=" ";
    
    }
    else{
        document.getElementById('err2').innerHTML="Number is invalid ";
        document.getElementById('err2').style.color="red";
        return false;

    }

    if(pwdReg.test(pwd.value)){
        err3.innerHTML=" ";
    }
    else{
        err3.innerHTML=" Password is invalid";
        err3.style.color="red";
        return false;
    }

    if (pwdReg.test(pwd.value)) {
        err3.innerText = "Password is valid";
        err3.style.color = 'green';
        err3.style.fontSize = '15px';
      } else {
        err3.innerText = "Password is not valid";
        err3.style.color = 'red';
        err3.style.fontSize = '15px';
        isValid = false;
      }
      
    
      const passwordStrength = checkPasswordStrength(pwd.value);
      if (passwordStrength === 'strong') {
        err3.innerText = " strong";
        err3.style.color = 'green';
        pwd.style.borderBottom="5px solid green"
       
      } else if (passwordStrength === 'medium') {
        err3.innerText = "medium";
        err3.style.color = 'orange';
        pwd.style.borderBottom="5px solid orange"
      } else {
        err3.innerText = " weak";
        err3.style.color = 'red';
        pwd.style.borderBottom="5px solid red"
        isValid = false;
      }
    
      return isValid;
    
    
    function checkPasswordStrength(password) {
      if (password.length >= 12 && /\d/.test(password) && /[a-z]/.test(password) && /[A-Z]/.test(password)) {
        return 'strong';
      } else if (password.length >= 8 && /\d/.test(password) && /[a-zA-Z]/.test(password)) {
        return 'medium';
      } else {
        return 'weak';
      }

      
    }
    


    if(rpwd.match(pwd)){
        document.getElementById('err4').innerHTML=" ";
    
    }
    else{
        document.getElementById('err4').innerHTML="Password doesn't match ";
        document.getElementById('err4').style.color="red";
        return false;

    }

}



