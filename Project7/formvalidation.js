function checkform() {
                var name = document.forms["RegForm"]["Name"].value;
                var email = document.forms.RegForm.EMail.value;
                var phone = document.forms.RegForm.Ph_Number.value;
                var password = document.forms.RegForm.Password.value;
                var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  //Javascript reGex for Email Validation.
                var regPhone=/^\d{10}$/;                                        // Javascript reGex for Phone Number validation.
                var regName = /\d+$/g;                                    // Javascript reGex for Name validation
 
                if (name == "" || regName.test(name)) {
                    window.alert("Please enter your name properly.");
                    return false;
                }
                 
                if (email == "" || !regEmail.test(email)) {
                    window.alert("Please enter a valid e-mail address.");
                    return false;
                }
				
                if(password.length <8){
                    alert("Password should be atleast 8 character long");
                    return false;
 
                }
                if (phone == "" || !regPhone.test(phone)) {
                    alert("Please enter valid phone number.");
                    return false;
                }
 
                if (what.selectedIndex == -1) {
                    alert("Please enter your course.");
                    return false;
                }
 
                return true;
            }