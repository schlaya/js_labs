// Add event listener to wait for document to finish 
// loading, then attach click event to #myBtn to call 
// randomNumber function on click
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("myBtn").addEventListener("click", randomNumber);
});

function randomNumber() {
    const randomNumber = Math.floor(Math.random() * 100);
    document.getElementById("randomNumber").innerHTML = randomNumber;
}