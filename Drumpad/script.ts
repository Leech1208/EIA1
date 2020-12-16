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

document.querySelector("#button1").addEventListener("click", function(){
    playSample(0);
    });

document.querySelector("#button2").addEventListener("click", function(){
    playSample(1);
    });

document.querySelector("#button3").addEventListener("click", function(){
    playSample(2);
    });

document.querySelector("#button4").addEventListener("click", function(){
    playSample(3);
    });

document.querySelector("#button5").addEventListener("click", function(){
    playSample(4);
    });

document.querySelector("#button6").addEventListener("click", function(){
    playSample(5);
    });

document.querySelector("#button7").addEventListener("click", function(){
    playSample(6);
    });

document.querySelector("#button8").addEventListener("click", function(){
    playSample(7);
    });

document.querySelector("#button9").addEventListener("click", function(){
    playSample(8);
    });

//Funktion zum Abspielen der Samples

function playSample(i:number){
    drumButton[i].play();
}

//Playbutton Sample

function playButton(){
    setInterval(function() {
        drumButton[4].play();
        drumButton[5].play();
        drumButton[8].play();
    }, 500);
}

document.querySelector(".playButton").addEventListener("click", function(){
    playButton();
    });