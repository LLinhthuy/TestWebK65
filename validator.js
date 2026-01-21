const nameInput = document.querySelector("#input__name")
const submitBtn = document.querySelector(".form-submit")

submitBtn.onclick = (e) => {
    e.preventDefault()
    checkEmpty(nameInput.value, nameInput)
}

function getMessage(msg, elm) {
    const msgElm = elm.nextElementSibling
    msgElm.textContent = msg
}

function toggleMessage(isValid, elm) {
    if (isValid) {
        elm.parentElement.classList.remove("invalid")
        getMessage("", elm)
    } else {
        elm.parentElement.classList.add("invalid")
    }
}

nameInput.onchange = (e) => {
    checkEmpty(e.target.value, nameInput)
}

function checkEmpty(val, elm) {
    if (val.trim().length <= 0) {
        toggleMessage(false, elm)
        getMessage("Vui lòng không để trống!", elm)
    } else {
        toggleMessage(true, elm)
    }
}
/* Không chỉnh sửa bất kì đoạn code nào ở trên */
/* Code từ đây */
submitBtn.onclick = (e) => {
    e.preventDefault()
    checkEmpty(nameInput.value, nameInput);
    checkMail(email.value, email);
    checkPassword(password.value, password);
    checkPasswordAgain(passwordAgain.value, passwordAgain, password.value);
}
const email = document.getElementById('input__email');
const password = document.getElementById('input__password');
const passwordAgain = document.getElementById('input__password-again');
function checkMail(val,elm){
    const Regex = /^[a-zA-Z0-9-_.]{2,}@[a-zA-Z0-9-_.]{2,}\.[a-zA-Z0-9-_.]{2,}$/;
    if(!Regex.test(val)){
        toggleMessage(false, elm)
        getMessage("Sai dinh dang mail!\n",elm);
    } else {
        toggleMessage(true, elm);
    }
}
function checkPassword(val,elm){
    if(val.trim().length < 8){
        toggleMessage(false, elm);
        getMessage("Mat khau phai 8 ki tu!\n",elm);
    } else {
        toggleMessage(true, elm);
    }
}  
function checkPasswordAgain(val, elm, pass){
    if(val.trim()!==pass.trim()){
        toggleMessage(false, elm);
        getMessage("Mat khau phai khop!\n",elm);
    } else {
        toggleMessage(true, elm);
    }
}  