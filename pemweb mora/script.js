const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const form = document.getElementById('registrationForm');
const formAlert = document.getElementById('formAlert');

// Fungsi untuk menampilkan alert
function showAlert(message, type) {
    formAlert.textContent = message;
    formAlert.className = `alert ${type}`;
    formAlert.style.display = 'block';
    setTimeout(() => formAlert.style.display = 'none', 3000); // Alert hilang setelah 3 detik
}

// Validasi Username (gabungan huruf dan angka)
username.addEventListener('keyup', () => {
    const usernameValue = username.value;
    const usernameError = document.getElementById('usernameError');
    if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,20}$/.test(usernameValue)) {
        usernameError.textContent = '';
        usernameError.classList.remove('show');
    } else {
        usernameError.textContent = 'Username harus 5-20 karakter dan mengandung huruf serta angka.';
        usernameError.classList.add('show');
    }
});

// Validasi Email
email.addEventListener('change', () => {
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email.value)) {
        emailError.textContent = '';
        emailError.classList.remove('show');
    } else {
        emailError.textContent = 'Format email tidak valid.';
        emailError.classList.add('show');
    }
});

// Validasi Password
password.addEventListener('keyup', () => {
    const passwordValue = password.value;
    const passwordError = document.getElementById('passwordError');
    const passwordStrength = document.getElementById('passwordStrength');
    if (passwordValue.length >= 8 && /[A-Za-z]/.test(passwordValue) && /[0-9]/.test(passwordValue)) {
        passwordError.textContent = '';
        passwordError.classList.remove('show');
        passwordStrength.textContent = 'Password kuat.';
        passwordStrength.classList.add('show');
    } else {
        passwordError.textContent = 'Password harus minimal 8 karakter, mengandung huruf dan angka.';
        passwordError.classList.add('show');
        passwordStrength.textContent = '';
        passwordStrength.classList.remove('show');
    }
});

// Validasi Konfirmasi Password
confirmPassword.addEventListener('input', () => {
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    if (confirmPassword.value === password.value) {
        confirmPasswordError.textContent = '';
        confirmPasswordError.classList.remove('show');
    } else {
        confirmPasswordError.textContent = 'Password tidak cocok.';
        confirmPasswordError.classList.add('show');
    }
});



