// JavaScript to add functionality and animations

document.addEventListener("DOMContentLoaded", function () {
    // Animation Button Functionality
    const animateBtn = document.getElementById('animateBtn');
    animateBtn.addEventListener('click', function () {
        animateBtn.style.transition = "all 0.5s ease";
        animateBtn.style.transform = "rotate(360deg)";
        setTimeout(() => {
            animateBtn.style.transform = "rotate(0deg)";
        }, 500);
    });

    // Login Form Functionality
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === "admin" && password === "1234") {
            loginMessage.textContent = "Login successful!";
            loginMessage.style.color = "green";
        } else {
            loginMessage.textContent = "Invalid username or password.";
            loginMessage.style.color = "red";
        }
    });

    // Smooth Scroll Functionality for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
