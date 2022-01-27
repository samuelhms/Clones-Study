function criarCanvas() {
    document.querySelector("#score").innerHTML = "Score: 0";

    document.querySelector("#boxbox").innerHTML = '<canvas id="snake" width="512" height="512"></canvas>'
    try {
        document.querySelector("#btn").remove()
    } catch (error) {

    }

    inicioGame();
}

let nIntervId;
let sec = 3;

let element = document.querySelector('#count-down-timer');

function timer() {
    
    element.textContent = sec;
    --sec
    if (sec < 0) {
        clearInterval(nIntervId);
        // release our intervalID from the variable
        nIntervId = null;
        element.textContent = null;
    }
}
function start() {
    sec = 3;
    nIntervId = setInterval(timer, 1000);
    setTimeout(criarCanvas, 4000)
    
}