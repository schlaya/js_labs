// Add event listener to wait for document to finish 
// loading, then attach click event to #myBtn to call 
// randomNumber function on click
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("myBtn").addEventListener("click", randomNumber);
    document.getElementById("changingText").addEventListener("click", changeText);
});

function randomNumber() {
    const randomNumber = Math.floor(Math.random() * 100);
    document.getElementById("randomNumber").innerHTML = randomNumber;
}

texts = ['Guten Tag', 'Hallo mein Freund', 'Wie geht es dir heute?', 'Ich hoffe, dass du einen guten Tag hast', 'Bis bald', 'Tschüss', 'Auf Wiedersehen', 'Bis später', 'Bis morgen', 'Bis nächste Woche', 'Bis nächstes Jahr']
let index = 0;
function changeText() {
    document.getElementById("changingText").innerText = texts[index];
    index = (index + 1) % texts.length;
}

const darkMode = () => {
    // saves the Element myDiv as a new var named element
    var element = document.getElementById("myDiv");
    // toggles the class darkMode on / temporarily assigns the css classs .darkMode to the myDiv element
    element.classList.toggle("darkMode");
}

const input = () => {
    var x = document.getElementById("myText").value;
    document.getElementById("lengthOfInput").innerHTML = x.length;
}