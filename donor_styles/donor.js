function isValidated(){
 //Regular Expression for checking IPv4 address.
 var email_regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            
 //Regular Expression for checking username
 var check_pwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
 var phoneno = /^\d{10}$/;
 var checkBox = document.getElementById('terms').checked;
    
 // Select tag validation.
 var res = document.getElementById("subject");
 
if(fname.value != ""){
    if(orgname.value != ""){
        if(username.value.length>6){
            if(email.value.match(email_regx)){
                if(phone.value.match(phoneno)){
                    if(pwd.value.match(check_pwd)){
                        if(pwd.value == c_pwd.value){
                            if(experience.value != ""){
                                if(gstin.value != ""){
                                    if(checkBox == true){
                                        alert("Success");
                                        return true;
                                    }
                                    else{
                                        alert("Agree to Terms and Conditions");
                                        return false;
                                    }
                                }
                                else{
                                    alert("Enter GSTIN value");
                                    return false;
                                }
                            }
                            else{
                                alert("Enter Number of years of Experience");
                                return false;
                            }
                        }
                        else{
                            alert("Password Mismatch");
                            return false;
                        }
                    }
                    else{
                        alert("Enter Valid Password of Minimum length 8 letters,Atleast one Capital Letter,Number,Special Character");
                        return false;
                    }
                }
                else{
                    alert("Enter Valid Phone Number");
                    return false;
                }
            }
            else{
                alert("Enter Valid E-mail ID");
                return false;
            }
        }
        else{
            alert("Enter valid User name with more than 6 characters");
            return false;
        }
    }
    else{
        alert("Enter your Organisation Name");
        return false;   
    }

}
else{
    alert("Enter your Full Name");
    return false;
}
}

