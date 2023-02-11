Creating a Sign-up form page as my project for form basics.

const password = document.getElementById('user_password');
const confirmPass = document.getElementById('confirm_password');
const message = document.getElementsByClassName('message');

if (password.value == confirmPass.value) {
    message.innerText = 'passwords'
}