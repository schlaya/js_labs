document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('fetch-cat');
    const catContainer = document.getElementById('cat-container');

    button.addEventListener('click', () => {
        fetch('https://cataas.com/cat/says/Hola?fontSize=50&fontColor=red')
            .then(response => response.blob()) // Convert the response to a Blob
            .then(blob => {
                const imgUrl = URL.createObjectURL(blob); // Create a URL for the Blob
                const img = document.createElement('img'); // Create an img element
                img.src = imgUrl; // Set the src attribute to the Blob URL
                img.alt = 'Cat Image'; // Set the alt attribute
                img.classList.add('catImage'); // Add the catImage class
                catContainer.innerHTML = ''; // Clear previous content
                catContainer.appendChild(img); // Append the img element to the container
            })
            .catch(error => {
                console.error('Error fetching cat:', error); // Log the error
                catContainer.textContent = 'Failed to fetch cat.'; // Display an error message
            });
    });
});


function onLikeClick() {
    let span = document.getElementById("likes-count");
    let likes = parseInt(span.textContent);
    likes++;
    span.textContent = likes;
    // draw a thumb up for every like:
    const imgHtml =
    '<img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Emoji_u1f44d.svg" alt="like" height="25">';
    let insertHtml = "";

    for (let i = 0; i < likes; i++) {
    insertHtml += imgHtml;
    }

    const messageDiv = document.querySelector("div#message-div");
    messageDiv.innerHTML = insertHtml;
}

function onAddClick() {
    var container = document.getElementById("container");
    var newElement = document.createElement("p");
    newElement.textContent = "New Element";
    container.appendChild(newElement);
}
