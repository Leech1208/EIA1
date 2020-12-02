var afrika08: number = 1028;
var afrika18: number = 1235.5;
var suedamerika08: number = 1132.6;
var suedamerika18: number = 1261.5;
var europa08: number = 4965.7;
var europa18: number = 4209.3;
var nordamerika08: number = 6600.4;
var nordamerika18: number = 6035.6;
var asien08: number = 12954.7;
var asien18: number = 16274.1;
var australien08: number = 1993;
var australien18: number = 2100.5;

var emissionGesamt18: number = (afrika18+suedamerika18+europa18+nordamerika18+asien18+australien18);

var afrikaGes = ((100/emissionGesamt18)*afrika18).toFixed(2);
var afrikaVglP = (((afrika18/afrika08)-1)*100).toFixed(2);
var afrikaVgl = (afrika18-afrika08).toFixed(2);

var suedamerikaGes = ((100/emissionGesamt18)*suedamerika18).toFixed(2);
var suedamerikaVglP = (((suedamerika18/suedamerika08)-1)*100).toFixed(2);
var suedamerikaVgl = (suedamerika18-suedamerika08).toFixed(2);

var europaGes = ((100/emissionGesamt18)*europa18).toFixed(2);
var europaVglP = (((europa18/europa08)-1)*100).toFixed(2);
var europaVgl = (europa18-europa08).toFixed(2);

var nordamerikaGes = ((100/emissionGesamt18)*nordamerika18).toFixed(2);
var nordamerikaVglP = (((nordamerika18/nordamerika08)-1)*100).toFixed(2);
var nordamerikaVgl = (nordamerika18-nordamerika08).toFixed(2);

var australienGes = ((100/emissionGesamt18)*australien18).toFixed(2);
var australienVglP = (((australien18/australien08)-1)*100).toFixed(2);
var australienVgl = (australien18-australien08).toFixed(2);

var asienGes = ((100/emissionGesamt18)*asien18).toFixed(2);
var asienVglP = (((asien18/asien08)-1)*100).toFixed(2);
var asienVgl = (asien18-asien08).toFixed(2);


function changeV(continent: string, continent18: number, continent08: number) {
    document.querySelector("#titleRegion").innerHTML = continent;
    document.querySelector("#emission18").innerHTML = continent18 + "t CO²";
    document.querySelector ("#percentrelative").innerHTML = (100 / (emissionGesamt18 / continent18)).toFixed (2);
    document.querySelector ("#percentgrowth").innerHTML = Math.round(((continent18/continent08)-1)*100).toString();
    document.querySelector ("#rategrowth").innerHTML = Math.round(continent18 - continent08) + "t CO2";


};

//Europa
document.querySelector (".europe").addEventListener ('click' , function () {
    changeV ("Europe" , europa18 , europa08)
});

//North America
document.querySelector (".northamerica").addEventListener ('click' , function () {
    changeV ("North America" , nordamerika18 , nordamerika08)
});

//South America
document.querySelector (".southamerica").addEventListener ('click' , function () {
    changeV ("South America" , suedamerika18 , suedamerika08)
});

//Africa
document.querySelector (".africa").addEventListener ('click' , function () {
    changeV ("Africa" , afrika18 , afrika08)
})

//Asia
document.querySelector (".asia").addEventListener ('click' , function () {
    changeV ("Asia" , asien18 , asien08)
});

//Australia
document.querySelector (".australia").addEventListener ('click' , function () {
    changeV ("Australia" , australien18 , australien08)
});