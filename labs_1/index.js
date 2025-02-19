function getJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('joke').innerHTML = data.value;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}