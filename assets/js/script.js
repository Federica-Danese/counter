const circularProgress = document.getElementById("circularProgress");
let progressStartValue = 0;
const progressEndValue = 100;
const speed = 5;
let progress;

let count = 0;

circularProgress.style.background = `conic-gradient(#ededed 0deg, #ededed 0deg)`;

let buttons = document.getElementById("buttons");

let minusButton = document.createElement("button");
minusButton.textContent = "-";
minusButton.setAttribute('id', 'decreaseBtn');
buttons.appendChild(minusButton);

let reset = document.createElement("button");
reset.textContent = "RESET";
reset.setAttribute('id', 'resetBtn');
buttons.appendChild(reset);

let addButton = document.createElement("button");
addButton.textContent = "+";
addButton.setAttribute('id', 'increaseBtn');
buttons.appendChild(addButton);

minusButton.addEventListener('click', () => {
    count -= 1;
    document.getElementById("progressValue").innerHTML = count;
    startProgressD();
});

reset.addEventListener('click', () => {
    count = 0;
    document.getElementById("progressValue").innerHTML = count;
    resetProgress();
});

addButton.addEventListener('click', () => {
    count += 1;
    document.getElementById("progressValue").innerHTML = count;
    startProgress();
});

function startProgress() {
    progressStartValue = 0;
    clearInterval(progress);
    
    progress = setInterval(() => {
        progressStartValue++;
        circularProgress.style.background = `conic-gradient(#F2BF02 ${progressStartValue * 3.6}deg, #ededed 0deg)`;
        if(progressStartValue == progressEndValue){
            clearInterval(progress);
        }
    }, speed);
}

function resetProgress() {
    progressStartValue = 0; 
    circularProgress.style.background = `conic-gradient(#ededed 0deg, #ededed 0deg)`; 
    clearInterval(progress); 
}

function startProgressD() {
    progressStartValue = 100;
    clearInterval(progress);
    progress = setInterval(() => {
        progressStartValue--;
        circularProgress.style.background = `conic-gradient(#F2BF02 ${progressStartValue * 3.6}deg, #ededed 0deg)`;
        if(progressStartValue == 0){
            clearInterval(progress);
        }
    }, speed);
}