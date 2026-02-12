document.getElementById("registrationForm")
.addEventListener("submit", function (event) {

    event.preventDefault(); 

    const inputs = this.querySelectorAll("input");

    let valid = true;

    inputs.forEach(input => {
        if (!input.value) {
            input.classList.add("is-invalid");
            valid = false;
        } else {
            input.classList.remove("is-invalid");
        }
    });

    if (valid) {
        alert("Form submitted successfully!");
    }
}); 