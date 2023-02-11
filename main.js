let password = document.querySelector('#user_password');
let confirmPass = document.querySelector('#confirm_password');
let message = document.querySelector('.message');

function validate() {
    if (confirmPass.value != password.value) {
    message.innerText = '* passwords do not match';
    message.style.color = 'red';
    confirmPass.className = 'error2';
    } else {
    message.innerText = '* passwords match';
    message.style.color = 'green';
    message.style.display = 'block';
    confirmPass.className = 'pass';
    }
}