document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registration-form")
    const feedbackDiv = document.getElementById("form-feedback")

    form.addEventListener("submit", () => {
        event.preventDefault()

        // Retrieve User Inputs by its respective ID: username, email, and password.
        const usernameInput = getElementById("username").value.trim()
        const emailInput = getElementById("email").value.trim()
        const passwordInput = getElementById("password").value.trim()

        let isValid = true
        let messages = []

        // Username Validation:
        if (usernameInput.length < 3){
            isValid = false
            messages.push("Your Username lenght must be more than 3 characters")
        }

        // Email Validation: must have character "@" and "."
        if (!(emailInput.includes("@") && emailInput.includes("."))) {
            isValid = false
            messages.push("Enter a valid Email..") 
        }
        
        // Password Validation: must be more than 8 characters
        if (passwordInput.length < 8) {
            isValid = false
            messages.push("Password should be longer than 8 characters") 
        }

        // Feedback Display Logic
        feedbackDiv.style.display = "block";
        
        if(isValid) {
            feedbackDiv.textContent = "Registration successful!"
            feedbackDiv.style.color = "#28a745"
        } else {
            feedbackDiv.innerHTML = messages.join("<br>")
            feedbackDiv.style.color = "#dc3545"
        }
    })
})