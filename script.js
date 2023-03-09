
const form = document.getElementById("myForm");
const password = form.password;
const reEnteredPassword = form.reEnteredPassword;
const feedback = document.getElementById("confirmPassword-feedback");
let isPasswordMatch = false;

reEnteredPassword.addEventListener("input", () => {
if (password.value != reEnteredPassword.value) {
    feedback.innerHTML = "Password did not match.";
    isPasswordMatch = false;
} else {
    feedback.innerHTML = "";
    isPasswordMatch = true;
}
});

// For bellow code to work, we have to add the button inside form tag!
/*form.onsubmit = function () {
if (isPasswordMatch) {
    alert("Form submitted. Great!");
    return true;                        // The form will only be submitted when the onSubmit event returns true.
}
alert("Wait! Password did not match.");
return false;
};*/
    