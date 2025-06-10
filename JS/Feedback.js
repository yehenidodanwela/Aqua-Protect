document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents default form submission

    const name = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const comment = document.getElementById("comment").value;

    if (!name || !email || !phone || !comment) {
        alert("Please fill all required fields.");
        return;
    }

    alert(`Thank you, ${name}! Your feedback has been submitted.`);
    this.reset(); // Reset form after submission
});

// Update character count dynamically
function updateCounter() {
    let commentBox = document.getElementById("comment");
    let charCount = document.getElementById("charCount");
    charCount.textContent = `${200 - commentBox.value.length} characters remaining`;
}
