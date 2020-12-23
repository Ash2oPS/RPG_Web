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
var BobTXT = document.getElementById("BobTXT");

TextBox.innerHTML = "Des Villageois sauvages apparaissent !";

var LuciferTurn = true;
var SatanTurn = false;
var BelzeTurn = false;
var BobTurn = false;

//TOUR DE LUCIFER
if (LuciferTurn == true){
  LuciferTXT.style.height = "314px";
  LuciferTXT.style.background = "linear-gradient(#FA8F98, #FA8C78)";
  LuciferTXT.innerHTML = "<b>LUCIFER</b>";
  LuciferTXT.innerHTML += "<b>" + HPLucifer + " / " + MaxHPLucifer + " PV</b>";
  LuciferTXT.innerHTML += "<b>" + MPLucifer + " / " + MaxMPLucifer + " PM</b>";
  LuciferTXT.innerHTML += "<br>";
  LuciferTXT.innerHTML += "<b> ATTAQUER </b>";
  LuciferTXT.innerHTML += "<b> SE DEFENDRE </b>";
  LuciferTXT.innerHTML += "<b> VENT D'EDEN </b>";
} else{
    LuciferTXT.style.height = "80px";
  LuciferTXT.style.background= "linear-gradient(#9D7BC2, #5A5991)";
  LuciferTXT.innerHTML = "<b>LUCIFER</b>";
  LuciferTXT.innerHTML += "PV : " + HPLucifer;
  LuciferTXT.innerHTML += " PM : " + MPLucifer;
}

//TOUR DE SATAN
if (SatanTurn == true){
    SatanTXT.style.height = "314px";
    SatanTXT.style.background = "linear-gradient(#FA8F98, #FA8C78)";
    SatanTXT.innerHTML = "<b>SATAN</b>";
    SatanTXT.innerHTML += "<b>" + HPSatan + " / " + MaxHPSatan + " PV</b>";
    SatanTXT.innerHTML += "<b>" + MPSatan + " / " + MaxMPSatan + " PM</b>";
    SatanTXT.innerHTML += "<br>";
    SatanTXT.innerHTML += "<b> ATTAQUER </b>";
    SatanTXT.innerHTML += "<b> SE DEFENDRE </b>";
    SatanTXT.innerHTML += "<b> ENFER CUISANT </b>";
  } else{
    SatanTXT.style.height = "80px";
    SatanTXT.style.background= "linear-gradient(#9D7BC2, #5A5991)";
    SatanTXT.innerHTML = "<b>SATAN</b>";
    SatanTXT.innerHTML += "PV : " + HPSatan;
    SatanTXT.innerHTML += " PM : " + MPSatan;
  }
//TOUR DE BELZEBUTH
  if (BelzeTurn == true){
    BelzeTXT.style.height = "314px";
    BelzeTXT.style.background = "linear-gradient(#FA8F98, #FA8C78)";
    BelzeTXT.innerHTML = "<b>BELZEBUTH</b>";
    BelzeTXT.innerHTML += "<b>" + HPBelze + " / " + MaxHPBelze + " PV</b>";
    BelzeTXT.innerHTML += "<b>" + MPBelze + " / " + MaxMPBelze + " PM</b>";
    BelzeTXT.innerHTML += "<br>";
    BelzeTXT.innerHTML += "<b> ATTAQUER </b>";
    BelzeTXT.innerHTML += "<b> SE DEFENDRE </b>";
    BelzeTXT.innerHTML += "<b> SACRIFICE DIABOLIQUE </b>";
  } else{
    BelzeTXT.style.height = "80px";
    BelzeTXT.style.background= "linear-gradient(#9D7BC2, #5A5991)";
    BelzeTXT.innerHTML = "<b>BELZEBUTH</b>";
    BelzeTXT.innerHTML += "PV : " + HPBelze;
    BelzeTXT.innerHTML += " PM : " + MPBelze;
  }

//TOUR DE BOB
  if (BobTurn == true){
    BobTXT.style.height = "314px";
    BobTXT.style.background = "linear-gradient(#FA8F98, #FA8C78)";
    BobTXT.innerHTML = "<b>BOB</b>";
    BobTXT.innerHTML += "<b>" + HPBob + " / " + MaxHPBob + " PV</b>";
    BobTXT.innerHTML += "<b>" + MPBob + " / " + MaxMPBob + " PM</b>";
    BobTXT.innerHTML += "<br>";
    BobTXT.innerHTML += "<b> ATTAQUER </b>";
    BobTXT.innerHTML += "<b> SE DEFENDRE </b>";
    BobTXT.innerHTML += "<b> GUILI-GUILI </b>";
  } else{
    BobTXT.style.height = "80px";
    BobTXT.style.background= "linear-gradient(#9D7BC2, #5A5991)";
    BobTXT.innerHTML = "<b>BOB</b>";
    BobTXT.innerHTML += "PV : " + HPBob;
    BobTXT.innerHTML += " PM : " + MPBob;
  }



//SPECIALES : 
//LUCIFER - VENT D'EDEN : Soigne le coéquipier le plus affaibli
//SATAN - ENFER CUISANT : Brûle tous les adversaires
//BELZE - SACRIFICE DIABOLIQUE : Tue un coéquipier aléatoire afin de booster Belze
//BOB - GUILI-GUILI : Chatouille un adversaire. Ce dernier rigole bien et passe donc une bonne journée


