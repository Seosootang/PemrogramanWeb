document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let address = document.getElementById('address').value.trim();

    if (!name || !email || !address) {
        alert("All fields are required. Please fill out the form.");
    } else {
        alert("Form submitted successfully!");
    }
});
