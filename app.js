// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("search-btn");

    // Add click event listener to the button
    button.addEventListener("click", () => {
        // Create a new XMLHttpRequest object
        const xhr = new XMLHttpRequest();

        // Configure it to make a GET request to superheroes.php
        xhr.open("GET", "superheroes.php", true);

        // Define what happens when the request is successfully completed
        xhr.onload = function () {
            if (xhr.status === 200) {
                // Display the response in a JavaScript alert
                alert(xhr.responseText);
            } else {
                alert("Error fetching data from the server.");
            }
        };

        // Handle any errors during the request
        xhr.onerror = function () {
            alert("Request failed. Please check your server.");
        };

        // Send the request
        xhr.send();
    });
});
