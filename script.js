

document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signupForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const savedName = document.getElementById("savedName");
    const savedEmail = document.getElementById("savedEmail");
    const clearDataButton = document.getElementById("clearData");

    // Load saved data when the page loads
    if (localStorage.getItem("userName")) {
        savedName.textContent = "Name: " + localStorage.getItem("userName");
        savedEmail.textContent = "Email: " + localStorage.getItem("userEmail");
    }

    signupForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim(); // Not saving password

        if (name && email) {
            // Save user data in localStorage
            localStorage.setItem("userName", name);
            localStorage.setItem("userEmail", email);

            // Display saved data
            savedName.textContent = "Name: " + name;
            savedEmail.textContent = "Email: " + email;
            alert("Sign-up successful! Data saved.");

            // Clear input fields after saving
            nameInput.value = "";
            emailInput.value = "";
            passwordInput.value = "";
        }
    });

    // Clear data button
    clearDataButton.addEventListener("click", () => {
        localStorage.clear();
        savedName.textContent = "";
        savedEmail.textContent = "";
        alert("Data cleared.");
    });
});
// Navbar "Get Started" Button click
const getStartedBtn = document.querySelector('nav a.bg-orange-500');
getStartedBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Thank you for getting started with us!');
});
function showMoreAbout() {
  document.getElementById("moreAbout").classList.remove("hidden");
}
function highlightService(element) {
  element.classList.add('bg-orange-100', 'scale-105');
  element.classList.remove('bg-gray-100');
}

function removeHighlight(element) {
  element.classList.add('bg-gray-100');
  element.classList.remove('bg-orange-100', 'scale-105');
}
// Portfolio Filter Function
const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll("#portfolio-grid > div");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");

        portfolioItems.forEach(item => {
            const category = item.getAttribute("data-category");

            if (filter === "all" || category === filter) {
                item.style.display = "block";  // Show item
            } else {
                item.style.display = "none";   // Hide item
            }
        });
    });
});
// Toggle function to show/hide more info
function toggleInfo(id) {
  const info = document.getElementById(id);
  if (info.classList.contains("hidden")) {
      info.classList.remove("hidden");
  } else {
      info.classList.add("hidden");
  }
}
// Button Click Function
function handleButtonClick() {
  alert("Welcome to the new collection of mobile phones!");
  // You can also navigate to another page like:
  // window.location.href = "yourpage.html";
}


