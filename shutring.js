// Scroll to contact section on Book Now click
document.getElementById("bookNowBtn").addEventListener("click", function () {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

// Handle form submission
document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("✅ Your booking details have been received!\nWe'll contact you soon.");
});
