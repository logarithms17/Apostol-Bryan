// Function expression to fetch and display user data

const displayUserData = async () => {

    // Select the user container element
    const userContainer = document.getElementById("userContainer");
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
            throw new Error('Failed to fetch data.');
        }
        
        const users = await response.json();
        console.log(users)

        let html = "";

        users.forEach((user) => {
            html += `
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${user.name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${user.username}</h6>
                            <p class="card-text">${user.email}</p>
                            <p href="#" class="card-text">${user.phone}</p>
                            <a href="#" class="card-link">${user.website}</a>
                        </div>
                    </div>
                </div>
            `;
        });
        
        userContainer.innerHTML = html;

    } catch (error) {
        userContainer.innerHTML = `An error occured while fetching data`;
        console.error('An error occurred:', error);
    }
}

const fetchButton = document.getElementById("fetchButton");
fetchButton.addEventListener("click", displayUserData);