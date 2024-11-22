// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("search-btn");

    // Add click event listener to the button
    button.addEventListener("click", () => {
        const query = document.getElementById("searchInput").value.trim(); // Get user query
        const xhr = new XMLHttpRequest(); // Create a new XMLHttpRequest object

        // configure GET request with  query parameter
        const url = query ? `superheroes.php?query=${encodeURIComponent(query)}` : "superheroes.php";
        xhr.open("GET", url, true);

        // Define what happens when the request is successfully completed
        xhr.onload = function () {
            if (xhr.status === 200) {
                const response = xhr.responseText.trim();

                // check if response is "Superhero not found"
                if (response === "Superhero not found") {
                    document.getElementById("result").innerHTML = `<p style="color: red; font-weight: bold;">Superhero not found</p>`;
                }
                // if response has specific superhero details
                else if (response.includes("<h3>") && response.includes("<h4>") && response.includes("<p>")) {
                    document.getElementById("result").innerHTML = response; // Display the superhero details
                }
                // else assume the response is the full list
                else {
                    document.getElementById("result").innerHTML = `<ul>${response}</ul>`;
                }
            } else {
                // display error message if request fails
                document.getElementById("result").innerHTML = `<p style="color: red;">Error fetching data from the server.</p>`;
            }
        };

        // Handle any errors during the request
        xhr.onerror = function () {
            document.getElementById("result").innerHTML = `<p style="color: red;">Request failed. Please check your connection.</p>`;
        };

        // Send the request
        xhr.send();
    });
});
