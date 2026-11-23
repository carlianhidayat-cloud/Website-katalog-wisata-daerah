let email = document.getElementById('email');
let password = document.getElementById('password');
const togglePassword = document.getElementById("togglePassword");
const login = document.getElementById('login');
const register = document.getElementById('register');

function onLogin() {
    localStorage.setItem("email", email.value)
    localStorage.setItem("password", password.value)

    if (email.value == "Coding123@gmail.com" && password.value == "Coding123") {
        alert('SELAMAT DATANG')
        window.location.href = "/index.html/halamanutama.html";
    } else {
        alert('SALAH PASSWORD')
        localStorage.clear();
        localStorage.reload();
    }

}

togglePassword.addEventListener("click", function () {
    if (password.type === "password") {

        password.type = "text";
        togglePassword.textContent = "👁";
        togglePassword.setAttribute("aria-label", "Sembunyikan password");

    } else {

        password.type = "password";
        togglePassword.textContent = "⌣";
        togglePassword.setAttribute("aria-label", "Tampilkan password");

    }

});

function onRegister() {
    alert('Coming soon😁')
}

    function tutupWindow() {
    document.getElementById("windowSandi").style.display = "none";
}

