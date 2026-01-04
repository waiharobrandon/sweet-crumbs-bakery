let cartCount = 0;

function addToCart() {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
}

// Greeting & Date
const greeting = document.getElementById("greeting");
const dateEl = document.getElementById("date");

if (greeting && dateEl) {
    const hour = new Date().getHours();
    let message = "Good Evening 🌙";

    if (hour < 12) message = "Good Morning ☀️";
    else if (hour < 18) message = "Good Afternoon 🌤️";

    greeting.innerText = message;
    dateEl.innerText = new Date().toDateString();
}

// Theme Toggle
const toggle = document.getElementById("theme-toggle");
if (toggle) {
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
}

// Form Validation
function validateForm() {
    const email = document.getElementById("email").value;

    if (!email.includes("@")) {
        alert("Please enter a valid email address");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}
