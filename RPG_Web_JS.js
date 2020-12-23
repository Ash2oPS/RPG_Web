var MaxHPLucifer = 4800;
var MaxHPSatan = 2900;
var MaxHPBelze = 8200;
var MaxHPBob = 40;
var HPLucifer = MaxHPLucifer;
var HPSatan = MaxHPSatan;
var HPBelze = MaxHPBelze;
var HPBob = MaxHPBob;

var MaxMPLucifer = 4200;
var MaxMPSatan = 6400;
var MaxMPBelze = 1200;
var MaxMPBob = 20;
var MPLucifer = MaxMPLucifer;
var MPSatan = MaxMPSatan;
var MPBelze = MaxMPBelze;
var MPBob = MaxMPBob;

var LuciferDead = false;
var SatanDead = false;
var BelzeDead = false;
var BobDead = false;
var EnnemyLDead = false;
var EnnemyMDead = false;
var EnnemyRDead = false;

var ATKLucifer = 1450;
var ATKSatan = 320;
var ATKBelze = 2600;
var ATKBob = 4;

var SPATKLucifer = 1150;
var SPATKSatan = 3100;
var SPATKBelze = 120;
var SPATKBob = 1;

var DEFLucifer = 1320;
var DEFSatan = 920;
var ATKBelze = 1940;
var ATKBob = 6;

var LastActionLucifer = 0;
var LastActionSatan = 0;
var LastActionBelze = 0;
var LastActionBob = 0;

var MaxHPEnnemyL = 17000;
var MaxHPEnnemyM = 16000;
var MaxHPEnnemyR = 19000;
var HPEnnemyL = MaxHPEnnemyL;
var HPEnnemyM = MaxHPEnnemyM;
var HPEnnemyR = MaxHPEnnemyR;

var ATKEnnemyL = 95;
var ATKEnnemyM = 120;
var ATKEnnemyR = 110;

var DEFEnnemyL = 156;
var DEFEnnemyM = 34;
var DEFEnnemyR = 259;

var SPDEFEnnemyL = 200;
var SPDEFEnnemyM = 350;
var SPDEFEnnemyR = 124;

var TextBox = document.getElementById("MessageText");
var LuciferTXT = document.getElementById("LuciferTXT");
var SatanTXT = document.getElementById("SatanTXT");
var BelzeTXT = document.getElementById("BelzebuthTXT");
var BobTXT = document.getElementById("BobTXT");

var LuciferTXTNom = document.getElementById("LuciferTXTNom");
var LuciferTXTStats = document.getElementById("LuciferTXTStats");
var LuciferTXTATK = document.getElementById("LuciferTXTATK");
var LuciferTXTDEF = document.getElementById("LuciferTXTDEF");
var LuciferTXTSP = document.getElementById("LuciferTXTSP");

var SatanTXTNom = document.getElementById("SatanTXTNom");
var SatanTXTStats = document.getElementById("SatanTXTStats");
var SatanTXTATK = document.getElementById("SatanTXTATK");
var SatanTXTDEF = document.getElementById("SatanTXTDEF");
var SatanTXTSP = document.getElementById("SatanTXTSP");

var BelzeTXTNom = document.getElementById("BelzebuthTXTNom");
var BelzeTXTStats = document.getElementById("BelzebuthTXTStats");
var BelzeTXTATK = document.getElementById("BelzebuthTXTATK");
var BelzeTXTDEF = document.getElementById("BelzebuthTXTDEF");
var BelzeTXTSP = document.getElementById("BelzebuthTXTSP");

var BobTXTNom = document.getElementById("BobTXTNom");
var BobTXTStats = document.getElementById("BobTXTStats");
var BobTXTATK = document.getElementById("BobTXTATK");
var BobTXTDEF = document.getElementById("BobTXTDEF");
var BobTXTSP = document.getElementById("BobTXTSP");


TextBox.innerHTML = "Des Villageois sauvages apparaissent !";

var LuciferTurn = true;
var SatanTurn = false;
var BelzeTurn = false;
var BobTurn = false;

//TOUR DE LUCIFER
if (LuciferTurn == true) {
    LuciferTXT.style.height = "314px";
    LuciferTXT.style.background = "linear-gradient(#FA8F98, #FA8C78)";
    LuciferTXTNom.innerHTML = "<b>LUCIFER</b>";
    LuciferTXTStats.innerHTML = "<b>" + HPLucifer + " / " + MaxHPLucifer + " PV</b>";
    LuciferTXTStats.innerHTML += "<b>" + MPLucifer + " / " + MaxMPLucifer + " PM</b>";
    LuciferTXTATK.innerHTML = "ATTAQUER";
    LuciferTXTDEF.innerHTML = "<b> SE DEFENDRE </b>";
    LuciferTXTSP.innerHTML = "<b> VENT D'EDEN </b>";
} else {
    LuciferTXT.style.height = "80px";
    LuciferTXT.style.background = "linear-gradient(#9D7BC2, #5A5991)";
    LuciferTXT.innerHTML = "<b>LUCIFER</b>";
    LuciferTXTStats.innerHTML = "PV : " + HPLucifer;
    LuciferTXTStats.innerHTML += " PM : " + MPLucifer;
    LuciferTXTATK.innerHTML = "";
    LuciferTXTDEF.innerHTML = "";
    LuciferTXTSP.innerHTML = "";
}

//TOUR DE SATAN
if (SatanTurn == true) {
    SatanTXT.style.height = "314px";
    SatanTXT.style.background = "linear-gradient(#FA8F98, #FA8C78)";
    SatanTXTNom.innerHTML = "<b>SATAN</b>";
    SatanTXTStats.innerHTML = "<b>" + HPSatan + " / " + MaxHPSatan + " PV</b>";
    SatanTXTStats.innerHTML += "<b>" + MPSatan + " / " + MaxMPSatan + " PM</b>";
    SatanTXTATK.innerHTML = "<b> ATTAQUER </b>";
    SatanTXTDEF.innerHTML = "<b> SE DEFENDRE </b>";
    SatanTXTSP.innerHTML = "<b> ENFER CUISANT </b>";
} else {
    SatanTXT.style.height = "80px";
    SatanTXT.style.background = "linear-gradient(#9D7BC2, #5A5991)";
    SatanTXT.innerHTML = "<b>SATAN</b>";
    SatanTXTStats.innerHTML = "PV : " + HPSatan;
    SatanTXTStats.innerHTML += " PM : " + MPSatan;
    SatanTXTATK.innerHTML = "";
    SatanTXTDEF.innerHTML = "";
    SatanTXTSP.innerHTML = "";
}

//TOUR DE BELZEBUTH
if (BelzeTurn == true) {
    BelzeTXT.style.height = "314px";
    BelzeTXT.style.background = "linear-gradient(#FA8F98, #FA8C78)";
    BelzeTXTNom.innerHTML = "<b>BELZEBUTH</b>";
    BelzeTXTStats.innerHTML = "<b>" + HPBelze + " / " + MaxHPBelze + " PV</b>";
    BelzeTXTStats.innerHTML += "<b>" + MPBelze + " / " + MaxMPBelze + " PM</b>";
    BelzeTXTATK.innerHTML = "<b> ATTAQUER </b>";
    BelzeTXTDEF.innerHTML = "<b> SE DEFENDRE </b>";
    BelzeTXTSP.innerHTML = "<b> SACRIFICE DEMONIAQUE </b>";
} else {
    BelzeTXT.style.height = "80px";
    BelzeTXT.style.background = "linear-gradient(#9D7BC2, #5A5991)";
    BelzeTXT.innerHTML = "<b>BELZEBUTH</b>";
    BelzeTXTStats.innerHTML = "PV : " + HPBelze;
    BelzeTXTStats.innerHTML += " PM : " + MPBelze;
    BelzeTXTTATK.innerHTML = "";
    BelzeTXTDEF.innerHTML = "";
    BelzeTXTSP.innerHTML = "";
}

//TOUR DE BOB
if (BobTurn == true) {
    BobTXT.style.height = "314px";
    BobTXT.style.background = "linear-gradient(#FA8F98, #FA8C78)";
    BobTXTNom.innerHTML = "<b>BOB</b>";
    BobTXTStats.innerHTML = "<b>" + HPBob + " / " + MaxHPBob + " PV</b>";
    BobTXTStats.innerHTML += "<b>" + MPBob + " / " + MaxMPBob + " PM</b>";
    BobTXTATK.innerHTML = "<b> ATTAQUER </b>";
    BobTXTDEF.innerHTML = "<b> SE DEFENDRE </b>";
    BobTXTSP.innerHTML = "<b> GUILI-GUILI </b>";
} else {
    BobTXT.style.height = "80px";
    BobTXT.style.background = "linear-gradient(#9D7BC2, #5A5991)";
    BobTXT.innerHTML = "<b>BOB</b>";
    BobTXTStats.innerHTML = "PV : " + HPBob;
    BobTXTStats.innerHTML += " PM : " + MPBob;
    BobTXTATK.innerHTML = "";
    BobTXTDEF.innerHTML = "";
    BobTXTSP.innerHTML = "";
}

LuciferTXTATK.addEventListener("click", atk_Lucifer());

function atk_Lucifer(){
    LuciferTXT.style.opacity = "0.2";
}

if(HPLucifer <= 0){
    LuciferDead = true;
}
if(HPSatan <= 0){
    SatanDead = true;
}
if(HPBelze <= 0){
    BelzeDead = true;
}
if(HPBob <= 0){
    BobDead = true;
}
if(HPEnnemyL <= 0){
    EnnemyLDead = true;
}
if(HPEnnemyM <= 0){
    EnnemyMDead = true;
}
if(HPEnnemyR <= 0){
    EnnemyRDead = true;
}

if (LuciferDead && SatanDead && BelzeDead && BobDead){
    GameOver();
}

if (EnnemyLDead && EnnemyMDead && EnnemyRDead){
    Victory();
}

function GameOver(){
    TextBox.innerHTML = "Vous avez perdu. Vous avez déçu le Tout-Puissant (la honte, quoi ?)."
}

function Victory(){
    TextBox.innerHTML = "Bravo, vous avez tué trois mortel. Y a-t'il cependant vraiment de quoi être fier ? "
}

//SPECIALES : 
//LUCIFER - VENT D'EDEN : Soigne le coéquipier le plus affaibli.
//SATAN - ENFER CUISANT : Brûle tous les adversaires.
//BELZE - SACRIFICE DIABOLIQUE : Tue un coéquipier aléatoire afin de booster Belze.
//BOB - GUILI-GUILI : Chatouille un adversaire. Ce dernier rigole bien et passe donc une bonne journée.


