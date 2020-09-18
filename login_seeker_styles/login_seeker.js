
      function check_Email(mail,pwd){
        var regex = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
var check_user = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
        if(regex.test(mail.mailid.value)){
          // return true;
          // alert("Congrats! This is a valid Email email");
          if(check_user.test(mail.password.value)){

             return true;
          }else{
            alert("Password should contain one numeric and special character");
            return false;
          }
        }
        else{
          alert("This is not a valid email address");
          return false;
        }}



        function check_name(mail){
          var name=/^[A-Za-z]+$/;
          var regex = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
      var check_user1 = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
      var check_user2 = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
      var dob=/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
      var uname=/^[0-9a-zA-Z]+$/;
      var oname=/^[A-Za-z]+$/;
      var mobile=/^\d{10}$/;
      var exp=/^[0-9]+$/;
      var gst=/^[0-9a-zA-Z]+$/;



if(name.test(mail.name.value)){
  if(dob.test(mail.dateofbirth.value)){
    if(uname.test(mail.uname.value)){
      if(regex.test(mail.mailid.value)){
        if(check_user1.test(mail.password.value)){

          if(check_user2.test(mail.repass.value)){
            if(mail.password.value === mail.repass.value){

              if(oname.test(mail.oname.value)){
                if(mobile.test(mail.mobileno.value)){
                  if(exp.text(mail.expe.value)){
                    if(gst.test(mail.gst.value)){
                      return true;

                    }else{
                      alert("Only numbers and letters are allowed");
                      return false;
                    }

                  }else{
                    alert("Enter only numbers");
                    return false;
                  }
                }else{
                  alert("Invalid number");
                  return false;
                }

              }else{
                alert("Organisation name should be in letters");
                return false;
              }
            }else{
              alert("Your passwords does not match ");
              return false;
            }
          }else{
            alert("Password should contain one numeric and special character");
            return false;
          }

        }else{
          alert("Password should contain one numeric and special character");
          return false;
        }
      }else{
        alert("This is not a valid email address");
        return false;
      }
    }else{
      alert("You can only use uppercase,lowercase,numbers");
      return false;
    }

  }else{
    alert("Enter in the format dd-mm-yyyy");
    return false;
  }
}else{
  alert("Invalid name");
  return false;
}
}
