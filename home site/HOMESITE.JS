// Advanced JavaScript Features
const loginButton = document.getElementById("login-btn");
const loginModal = document.getElementById("login-modal");
const closeButton = document.querySelector(".close-button");

// Open modal on button click
loginButton.addEventListener("click", () => {
    loginModal.style.display = "flex"; // Show the modal
});

// Close modal when the close button is clicked
closeButton.addEventListener("click", () => {
    loginModal.style.display = "none"; // Hide the modal
});

// Close modal when clicking outside the modal content
window.addEventListener("click", (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = "none"; // Hide the modal
    }
});

const contractors = [
    { name: "Jai Builders", specialty: "Modern Home Designs" },
    { name: "Elite Constructions", specialty: "Traditional Designs" },
    { name: "Skyline Developers", specialty: "High-Tech Smart Homes" },
    { name: "Green Habitat", specialty: "Eco-Friendly Buildings" },
    { name: "Urban Craft Builders", specialty: "Luxury Homes" },
];

// Testimonials
const testimonials = [
    { name: "maniii", feedback: "Fantastic service and great designs!" },
    { name: "pratik", feedback: "The contractors were professional and reliable." },
    { name: "raj", feedback: "Loved the eco-friendly options." },
];

// Render contractor list
function renderContractors() {
    const contractorList = document.getElementById("contractor-list");
    contractorList.innerHTML = contractors.map(contractor => `
        <div class="card">
            <h3>${contractor.name}</h3>
            <p>${contractor.specialty}</p>
        </div>
    `).join('');
}

// Render testimonials
function renderTestimonials() {
    const testimonialCarousel = document.getElementById("testimonial-carousel");
    testimonialCarousel.innerHTML = testimonials.map(testimonial => `
        <div class="testimonial">
            <p>"${testimonial.feedback}"</p>
            <h4>- ${testimonial.name}</h4>
        </div>
    `).join('');
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    renderContractors();
    renderTestimonials();
});
