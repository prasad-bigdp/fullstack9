const pwdInput = document.getElementById('inpwd');
const emInput = document.getElementById("inpem")
const eyeIcon = document.getElementById('eyeIcon');
const inpError = document.getElementById("inpError");
const pwdError = document.getElementById("pwdError")
function revealPassword ()
{
	if (pwdInput.type == "password") {
		pwdInput.type = "text"
		eyeIcon.classList.remove("fa-eye")
		eyeIcon.classList.add("fa-eye-slash")
	} else {
		pwdInput.type = "password"
		eyeIcon.classList.remove("fa-eye-slash")
		eyeIcon.classList.add("fa-eye")
	}
}
function formSubmit (e)
{
    e.preventDefault();
    inpError.textContent = ""
	pwdError.textContent = ""
    console.log(emInput.value)
    if (emInput.value.trim() == '')
    {
       inpError.textContent="email is required"
    }
    if (pwdInput.value.trim() == "") {
				pwdError.textContent = "password is required"
    }
    if (pwdInput.value.length < 8)
    {
        pwdError.textContent = "password should be minimum 8 characters"
    }
    if (!pwdInput.value.match("/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/")) {
			pwdError.textContent =
				"password should be atleat one uppercase,one lowercase and one numerical"
		}
			console.log(pwdInput.value)
}