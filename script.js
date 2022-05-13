const jokes = ["Hvilken side av sauen er det mest ull på? Utsiden", "Hvilket hode har ikke ører? Et kålhode",
    "Hva kan en mus trekke like godt som en elefant? Pusten", "Til hvilket hus er det brukt verken tre, glass eller stein? Sneglehuset", "Hva er likheten mellom en hane og en frisør? Begge har en kam", "Når kan man drikke melk av skålen? Når man er en katt", "Hva brukes et eggeskall til? Å holde egg sammen", "Hvorfor slo fysikklæreren opp med biologilæreren? De hadde ingen kjemi.", 
    "Hater du ikke det når noen svarer på sine egne spørsmål? Jeg gjør det ihvertfall"];

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const getRandomJoke = () =>
    `${jokes[getRandomNumber(jokes.length)]}`;

const setRandomJoke = () => {
    document.getElementById('random-joke').innerText = getRandomJoke();
}


function showTools() {
    document.getElementById('cardTools').innerHTML = /*html*/`
    <div class="link">
    <li><a href="https://www.youtube.com/watch?v=J3MIQTxV8-c&t=332s">Video</a>
    `;
}

document.getElementById('generate') 
addEventListener('click', setRandomJoke);
setRandomJoke();


