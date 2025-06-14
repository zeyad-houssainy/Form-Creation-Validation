document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registration-form")
    const feedbackDiv = document.getElementById("form-feedback")

    form.addEventListener("submit", (event) => {
        event.preventDefault()


        function validateForm() {
            // Retrieve User Inputs by its respective ID: username, email, and password.
            const usernameInput = document.getElementById("username")
            const emailInput = document.getElementById("email")
            const passwordInput = document.getElementById("password")
            
            const username = usernameInput.value.trim()
            const email = emailInput.value.trim()
            const password = passwordInput.value.trim()

            let isValid = true
            let messages = []
    
            // Username Validation:
            if (username.length < 3){
                isValid = false
                messages.push("Your Username lenght must be more than 3 characters")
            }
    
            // Email Validation: must have character "@" and "."
            if (!(email.includes("@") && email.includes("."))) {
                isValid = false
                messages.push("Enter a valid Email..") 
            }
            
            // Password Validation: must be more than 8 characters
            if (password.length < 8) {
                isValid = false
                messages.push("Password should be longer than 8 characters") 
            }
    
            // Feedback Display Logic
            feedbackDiv.style.display = "block";
            
            if(isValid) {
                feedbackDiv.textContent = "Registration successful!"
                feedbackDiv.style.color = "#28a745"
                console.log("OK OK OK OK OK ")
            } else {
                feedbackDiv.innerHTML = messages.join("<br>")
                feedbackDiv.style.color = "#dc3545"
            }
        }

        validateForm()
    })
})