document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Prevent the page from refreshing
    event.preventDefault();

    // Get field values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const country = document.getElementById('country').value.trim();
    const comments = document.getElementById('comments').value.trim();

    // Validate that all fields are filled [cite: 33]
    if (name === "" || email === "" || country === "" || comments === "") {
        alert("All fields must be filled in before submission.");
    } else {
        // Display success message [cite: 34]
        alert("Form submitted successfully! Thank you, " + name + ".");
        
        // Optional: Clear the form
        this.reset();
    }
});
