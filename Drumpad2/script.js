//Array für Sound-Dateien
var drumButton = [];
drumButton[0] = new Audio('./assets/A.mp3');
drumButton[1] = new Audio('./assets/C.mp3');
drumButton[2] = new Audio('./assets/F.mp3');
drumButton[3] = new Audio('./assets/G.mp3');
drumButton[4] = new Audio('./assets/hihat.mp3');
drumButton[5] = new Audio('./assets/kick.mp3');
drumButton[6] = new Audio('./assets/laugh-1.mp3');
drumButton[7] = new Audio('./assets/laugh-2.mp3');
drumButton[8] = new Audio('./assets/snare.mp3');
//EventListener zum Abspielen der Sounds bei Click
document.querySelector("#button1").addEventListener("click", function () {
    playSample(0);
    recSample(0);
});
document.querySelector("#button2").addEventListener("click", function () {
    playSample(1);
    recSample(1);
});
document.querySelector("#button3").addEventListener("click", function () {
    playSample(2);
    recSample(2);
});
document.querySelector("#button4").addEventListener("click", function () {
    playSample(3);
    recSample(3);
});
document.querySelector("#button5").addEventListener("click", function () {
    playSample(4);
    recSample(4);
});
document.querySelector("#button6").addEventListener("click", function () {
    playSample(5);
    recSample(5);
});
document.querySelector("#button7").addEventListener("click", function () {
    playSample(6);
    recSample(6);
});
document.querySelector("#button8").addEventListener("click", function () {
    playSample(7);
    recSample(7);
});
document.querySelector("#button9").addEventListener("click", function () {
    playSample(8);
    recSample(8);
});
//Funktion zum Abspielen der Samples
function playSample(x) {
    x.play();
    recSample(x);
}
var sample = [];
sample[0] = new Audio("./assets/hihat.mp3");
sample[1] = new Audio("./assets/kick.mp3");
sample[2] = new Audio("./assets/snare.mp3");
var recordactive;
var intervall = 0;
var x;
var a;
var i;
var play = document.querySelector(".playButton");
var stoppen = document.querySelector(".stopButton");
var record = document.querySelector(".recordButton");
var del = document.querySelector(".deleteButton");
//Funktion Playbutton
function playButton() {
    setInterval(function () {
        drumButton[4].play();
        drumButton[5].play();
        drumButton[8].play();
    }, 500);
}
document.querySelector(".playButton").addEventListener("click", function () {
    playButton();
});
record.addEventListener("click", function () {
    if (record.classList.contains("active")) {
        record.classList.remove("active");
        recordactive = false;
    }
    else {
        record.classList.add("active");
        recordactive = true;
    }
    console.log(recordactive);
    console.log(sample.length);
});
//Loop löschen
del.addEventListener("click", function () {
    deleteLoop();
});
function deleteLoop() {
    sample.splice(0, sample.length);
    console.log(sample.length);
}
function recLoop(x) {
    console.log(recordactive);
    if (recordactive == true) {
        sample.push(x);
        console.log(sample.length);
    }
}
function PlayLoop(a) {
    if (a == true) {
        intervall = setInterval(function () {
            if (i < sample.length) {
                playSample(sample[i]);
                i++;
            }
            else {
                i = 0;
            }
        }, 400);
    }
    else {
        clearInterval(intervall);
    }
}
function recSample(x) {
    console.log(recordactive);
    if (recordactive == true) {
        sample.push(x);
        console.log(sample.length);
    }
}
//# sourceMappingURL=script.js.map