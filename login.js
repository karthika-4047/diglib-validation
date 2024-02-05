function Validate(){

    var mail=document.getElementById('exampleInputEmail1');
    var pswd=document.getElementById('exampleInputPassword1');

    var error1=document.getElementById('error1');
    var error2=document.getElementById('error2');



    let regexmail = /^([a-zA-Z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    let regexpswd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9@#]{8,16}$/;

    
    let isValid= true;

    if(regexmail.test(mail.value)){
        error1.innerHTML=" ";
      
    }

    else{
        error1.innerHTML=" Email is invalid";
        error1.style.color="red";
        return false;
    }


    if(regexpswd.test(pswd.value)){
        error2.innerHTML=" ";
    }
    else{
        error2.innerHTML=" Password is invalid";
        error2.style.color="red";
        return false;
    }

    if (regexpswd.test(pswd.value)) {
        error2.innerText = "Password is valid";
        error2.style.color = 'green';
        error2.style.fontSize = '15px';
      } else {
        error2.innerText = "Password is not valid";
        error2.style.color = 'red';
        error2.style.fontSize = '15px';
        isValid = false;
      }
      
    
      const passwordStrength = checkPasswordStrength(pswd.value);
      if (passwordStrength === 'strong') {
        error2.innerText = " strong";
        error2.style.color = 'green';
        pswd.style.borderBottom="5px solid green"
       
      } else if (passwordStrength === 'medium') {
        error2.innerText = "medium";
        error2.style.color = 'orange';
        pswd.style.borderBottom="5px solid orange"
      } else {
        error2.innerText = " weak";
        error2.style.color = 'red';
        pswd.style.borderBottom="5px solid red"
        isValid = false;
      }
    
      return isValid;
    }
    
    function checkPasswordStrength(password) {
      if (password.length >= 12 && /\d/.test(password) && /[a-z]/.test(password) && /[A-Z]/.test(password)) {
        return 'strong';
      } else if (password.length >= 8 && /\d/.test(password) && /[a-zA-Z]/.test(password)) {
        return 'medium';
      } else {
        return 'weak';
      }

      
    }
    

