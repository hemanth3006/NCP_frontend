function validateEmail(){
		var emailField =  login.value;
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (login.value.match(reg)) 
        {
            
            return true;
        }
        else
        {
        	alert('Invalid Email Address');
		  return false;
        }

}