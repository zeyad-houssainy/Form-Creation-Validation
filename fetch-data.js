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

    } catch(error) {
        console.error(error)
    }
}

// calling the function 
fetchUserData()