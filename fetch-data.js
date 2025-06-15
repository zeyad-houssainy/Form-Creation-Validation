console.log("Lets start ")


async function fetchUserData() {
    const apiUrl = "https://jsonplaceholder.typicode.com/users"
    const dataContainer = document.getElementById("api-data")

    // Fetching the data from a URL
    try{
        const response = await fetch(apiUrl)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const users = await response.json()
        console.log(users)

        // clear loading div
        dataContainer.innerHTML = ''
        const userList = document.createElement("ul")
        users.forEach(user => { 
            const listItem = document.createElement("li")
            listItem.textContent = user.name
            userList.appendChild(listItem)
        });

    } catch(error) {
        dataContainer.textContent = "Failed to load user data"
        console.error(error)
    }
}

// calling the function 
fetchUserData()