const form = document.getElementById("registrationForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        event.stopPropagation();

        let valid = true;

        const password = document.getElementById("password");
        const confirmPassword = document.getElementById("confirmPassword");

        // Check password match
        if (password.value !== confirmPassword.value || confirmPassword.value === "") {
            confirmPassword.classList.add("is-invalid");
            valid = false;
        } else {
            confirmPassword.classList.remove("is-invalid");
            confirmPassword.classList.add("is-valid");
        }

        // Bootstrap validation
        if (!form.checkValidity()) {
            valid = false;
        }

        form.classList.add("was-validated");

        if (valid) {
            alert("Registration successful! (Static demo)");
            form.reset();
            form.classList.remove("was-validated");
        }
    });