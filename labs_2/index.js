document.addEventListener('DOMContentLoaded', () => {

    const dogContainer = document.getElementById('dog-container');
    const button = document.getElementById('fetch-dog');
        
        button.addEventListener('click', () => {
            fetch('https://dog.ceo/api/breeds/image/random')
                .then(response => response.json())
                .then(data => {
                    const imgUrl = data.message;
                    const img = document.createElement('img');
                    img.src = imgUrl;
                    img.alt = 'Dog Image';
                    img.classList.add('dogImage');
                    dogContainer.textContent = '';
                    dogContainer.appendChild(img);
                })
                .catch(error => {
                    console.error('Error fetching dog image:', error);
                    dogContainer.textContent = 'Failed to fetch dog.';
                });
        });
    });