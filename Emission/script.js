var afrika08 = 1028;
var afrika18 = 1235.5;
var suedamerika08 = 1132.6;
var suedamerika18 = 1261.5;
var europa08 = 4965.7;
var europa18 = 4209.3;
var nordamerika08 = 6600.4;
var nordamerika18 = 6035.6;
var asien08 = 12954.7;
var asien18 = 16274.1;
var australien08 = 1993;
var australien18 = 2100.5;
var emissionGesamt18 = (afrika18 + suedamerika18 + europa18 + nordamerika18 + asien18 + australien18);
var afrikaGes = ((100 / emissionGesamt18) * afrika18).toFixed(2);
var afrikaVglP = (((afrika18 / afrika08) - 1) * 100).toFixed(2);
var afrikaVgl = (afrika18 - afrika08).toFixed(2);
var suedamerikaGes = ((100 / emissionGesamt18) * suedamerika18).toFixed(2);
var suedamerikaVglP = (((suedamerika18 / suedamerika08) - 1) * 100).toFixed(2);
var suedamerikaVgl = (suedamerika18 - suedamerika08).toFixed(2);
var europaGes = ((100 / emissionGesamt18) * europa18).toFixed(2);
var europaVglP = (((europa18 / europa08) - 1) * 100).toFixed(2);
var europaVgl = (europa18 - europa08).toFixed(2);
var nordamerikaGes = ((100 / emissionGesamt18) * nordamerika18).toFixed(2);
var nordamerikaVglP = (((nordamerika18 / nordamerika08) - 1) * 100).toFixed(2);
var nordamerikaVgl = (nordamerika18 - nordamerika08).toFixed(2);
var australienGes = ((100 / emissionGesamt18) * australien18).toFixed(2);
var australienVglP = (((australien18 / australien08) - 1) * 100).toFixed(2);
var australienVgl = (australien18 - australien08).toFixed(2);
var asienGes = ((100 / emissionGesamt18) * asien18).toFixed(2);
var asienVglP = (((asien18 / asien08) - 1) * 100).toFixed(2);
var asienVgl = (asien18 - asien08).toFixed(2);
console.log("EUROPA:");
console.log("Die Emission von Europa ist: " + europa18 + "kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit " + europaGes + "%.");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + europaVglP + " % verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + europaVgl + " kg CO2.");
console.log(" ");
console.log("AFRIKA:");
console.log("Die Emission von Afrika ist: " + afrika18 + "kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit " + afrikaGes + "%.");
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + afrikaVglP + " % verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + afrikaVgl + " kg CO2.");
console.log(" ");
console.log("SÜDAMERIKA:");
console.log("Die Emission von Südamerika ist: " + suedamerika18 + "kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Südamerika damit " + suedamerikaGes + "%.");
console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + suedamerikaVglP + " % verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + suedamerikaVgl + " kg CO2.");
console.log(" ");
console.log("NORDAMERIKA:");
console.log("Die Emission von Nordamerika ist: " + nordamerika18 + "kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit " + nordamerikaGes + "%.");
console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + nordamerikaVglP + " % verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + nordamerikaVgl + " kg CO2.");
console.log(" ");
console.log("ASIEN:");
console.log("Die Emission von Asien ist: " + asien18 + "kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit " + asienGes + "%.");
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um " + asienVglP + " % verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + asienVgl + " kg CO2.");
console.log(" ");
console.log("AUSTRALIEN:");
console.log("Die Emission von Australien ist: " + australien18 + "kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit " + australienGes + "%.");
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um " + australienVglP + " % verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + australienVgl + " kg CO2.");
//# sourceMappingURL=script.js.map