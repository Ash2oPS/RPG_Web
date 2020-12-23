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
var BelzeTXT = document.getElementById("BezebuthTXT");
var BobTXT = document.getElementById("BobTXT");

var EnnemyNameIndex = Math.floor(Math.random() * (11 - 0) ) + 0;
TextBox.innerHTML = "Des Villageois sauvages apparaissent !";

var LuciferTurn = true;
var SatanTurn = false;
var BelzeTurn = false;
var BobTurn = false;

if (LuciferTurn == true){
  LuciferTXT.style.height = "314px";
  LuciferTXT.style.background= "linear-gradient(#FA8F98, #FA8C78)"
  
} else{
    LuciferTXT.style.height = "80px";
  LuciferTXT.style.background= "linear-gradient(#9D7BC2, #5A5991)"
}



//SPECIALES : 
//LUCIFER - VENT D'EDEN : Soigne le coéquipier le plus affaibli
//SATAN - ENFER CUISANT : Brûle tous les adversaires
//BELZE - SACRIFICE DIABOLIQUE : Tue un coéquipier aléatoire afin de booster Belze
//BOB - GUILI-GUILI : Chatouille un adversaire. Ce dernier rigole bien et passe donc une bonne journée


