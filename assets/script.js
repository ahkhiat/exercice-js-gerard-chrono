console.log('script chargé')

const divMillisecondes = document.getElementById("millisecondes");
const divSecondes = document.getElementById("secondes");
const divMinutes = document.getElementById("minutes");
const divHeures = document.getElementById("heures");

let millisecondes = 0;
let secondes = 0;
let minutes = 0;
let heures = 0;
let startChrono;
let runningChrono = false;

affichage()
function affichage() {
    divMillisecondes.innerText = (millisecondes)
    divSecondes.innerText = (secondes)
    divMinutes.innerText = (minutes)
    divHeures.innerText = (heures)
}

function updateMs() {

    millisecondes++;
    affichage();

    if(millisecondes == 100) {
        secondes++;
        millisecondes = 0;
    }

    if(secondes == 60){
        minutes++;
        secondes = 0;
    }
}

function start() {
    if(!runningChrono) {
    startChrono = setInterval(updateMs, 10);
    runningChrono = true;
    }
}

function stop() {
    clearInterval(startChrono);
    runningChrono = false;
}

function reset() {
    stop()
    millisecondes = 0;
    secondes = 0;
    minutes = 0;
    heures = 0;
    affichage()
}

                   
    


        
        



