// Selecting elements
const searchInput = document.getElementById('searchInput');
const shopBtn = document.querySelector('.shop-now-btn');

// Handle Search Input
searchInput.addEventListener('input', (e) => {
    console.log("User is searching for:", e.target.value);
    // In a real app, this would trigger a product filter or API call
});

// Handle Shop Now Button Click
shopBtn.addEventListener('click', () => {
    alert("Welcome to the collection! Redirecting...");
    // window.location.href = "/collections/all";
});

// Example of dynamic scroll effect for header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.desktop-header');
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
    } else {
        header.style.boxShadow = "none";
    }
});
