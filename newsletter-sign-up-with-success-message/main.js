function validateEmail(email) {
    var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
}

let emailInput = document.getElementById("emailInput")
let wrongText = document.getElementById("invalidEmail")
function correctEmail() {
    emailInput.classList = "correctEmail"
    wrongText.classList = "email-text hidden"
    document.getElementById("successEmail").textContent = emailInput.value
    setTimeout(() => {document.getElementById("newsletterPopup").style.opacity = "0"}, 500);
    setTimeout(() => {document.getElementById("newsletterPopup").style.display = "none"}, 800);
    setTimeout(() => {document.getElementById("newsletterSuccess").style.display = "block"}, 900);
    setTimeout(() => {document.getElementById("newsletterSuccess").style.opacity = "1"}, 1000);
}
function wrongEmail() {
    emailInput.classList = "wrongEmail"
    wrongText.classList = "email-text"
}

function dismiss() {
    document.getElementById("newsletterSuccess").style.opacity = "0"
    setTimeout(() => {document.getElementById("newsletterSuccess").style.display = "none"}, 400);
}

let emailForm = document.getElementById("newsletterSubscribe")
emailForm.onsubmit = () => {
    if (validateEmail(emailInput.value)) {
        correctEmail()
    } else {
        wrongEmail()
    }
    return false
}