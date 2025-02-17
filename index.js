document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('fetch-joke');
    const jokeContainer = document.getElementById('joke-container');

    button.addEventListener('click', () => {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(data => {
                jokeContainer.textContent = data.value;
            })
            .catch(error => {
                console.error('Error fetching joke:', error);
                jokeContainer.textContent = 'Failed to fetch joke.';
            });
    });
});