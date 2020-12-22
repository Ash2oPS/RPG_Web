.InfoGob{
    transform: scale(0);
    Background-color: white;
    border-radius: 8px;
    font-family:  Andale Mono, monospace;
    transition: 0.2s;
}
.gobelin:hover > .infoGob{
    transform: scale(1);
}

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

var EnnemyNameIndex = Math.floor(Math.random() * (11 - 0) ) + 0;
TextBox.textContent = EnnemyNameIndex;

var oui = true;

if (oui == true;){
  
}



//SPECIALES : 
//LUCIFER - VENT D'EDEN : Soigne le coéquipier le plus affaibli
//SATAN - ENFER CUISANT : Brûle tous les adversaires
//BELZE - SACRIFICE DIABOLIQUE : Tue un coéquipier aléatoire afin de booster Belze
//BOB - GUILI-GUILI : Chatouille un adversaire. Ce dernier rigole bien et passe donc une bonne journée


