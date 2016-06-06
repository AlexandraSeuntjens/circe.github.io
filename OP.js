function main() {
  var onesie = document.getElementById("een");
  var slaapzak = document.getElementById("twee");
  var kleding = document.getElementById("drie");
  var tattoo = document.getElementById("vier");
  var bodypaint = document.getElementById('vijf');
  var decor = document.getElementById('zes');

  var kikker = document.getElementById("kikker");
  var pinguin = document.getElementById("pinguin");
  var haai = document.getElementById("haai");
  var beestje = document.getElementById("beestje");
  var beer = document.getElementById("beer");
  var panda = document.getElementById("panda");
  var egel = document.getElementById("egel");
  var everzwijn = document.getElementById("everzwijn");
  var vos = document.getElementById("vos");
  var fox = document.getElementById("fox");
  var papegaai = document.getElementById("papegaai");
  var eagel = document.getElementById("eagel");
  var nemo = document.getElementById("nemo");
  var elephant = document.getElementById("elephant");
  var bloembak = document.getElementById("bloembak");
  var muur = document.getElementById("muur");
  var kast = document.getElementById("kast");

  var teller = 0;

  var producten = document.getElementsByClassName("producten");

  onesie.onclick = function () {
    kikker.className = "geselecteerd";
    pinguin.className = "geselecteerd";
    haai.className = "hide";
    beestje.className = "hide";
    beer.className = "hide";
    panda.className = "hide";
    egel.className = "hide";
    everzwijn.className = "hide";
    vos.className = "hide";
    fox.className = "hide";
    papegaai.className = "hide";
    eagel.className = "hide";
    nemo.className = "hide";
    elephant.className = "hide";
    bloembak.className = "hide";
    muur.className = "hide";
    kast.className = "hide";
   }

  slaapzak.onclick = function () {
    kikker.className = "hide";
    pinguin.className = "hide";
    haai.className = "geselecteerd";
    beestje.className = "geselecteerd";
    beer.className = "geselecteerd";
    panda.className = "hide";
    egel.className = "hide";
    everzwijn.className = "hide";
    vos.className = "hide";
    fox.className = "hide";
    papegaai.className = "hide";
    eagel.className = "hide";
    nemo.className = "hide";
    elephant.className = "hide";
    bloembak.className = "hide";
    muur.className = "hide";
    kast.className = "hide";
  }

  kleding.onclick = function () {
    kikker.className = "hide";
    pinguin.className = "hide";
    haai.className = "hide";
    beestje.className = "hide";
    beer.className = "hide";
    panda.className = "geselecteerd";
    egel.className = "geselecteerd";
    everzwijn.className = "geselecteerd";
    vos.className = "hide";
    fox.className = "hide";
    papegaai.className = "hide";
    eagel.className = "hide";
    nemo.className = "hide";
    elephant.className = "hide";
    bloembak.className = "hide";
    muur.className = "hide";
    kast.className = "hide";
  }

  tattoo.onclick = function () {
    kikker.className = "hide";
    pinguin.className = "hide";
    haai.className = "hide";
    beestje.className = "hide";
    beer.className = "hide";
    panda.className = "hide";
    egel.className = "hide";
    everzwijn.className = "hide";
    vos.className = "geselecteerd";
    fox.className = "geselecteerd";
    papegaai.className = "geselecteerd";
    eagel.className = "hide";
    nemo.className = "hide";
    elephant.className = "hide";
    bloembak.className = "hide";
    muur.className = "hide";
    kast.className = "hide";
  }

  bodypaint.onclick = function () {
    kikker.className = "hide";
    pinguin.className = "hide";
    haai.className = "hide";
    beestje.className = "hide";
    beer.className = "hide";
    panda.className = "hide";
    egel.className = "hide";
    everzwijn.className = "hide";
    vos.className = "hide";
    fox.className = "hide";
    papegaai.className = "hide";
    eagel.className = "geselecteerd";
    nemo.className = "geselecteerd";
    elephant.className = "geselecteerd";
    bloembak.className = "hide";
    muur.className = "hide";
    kast.className = "hide";
  }

  decor.onclick = function () {
    kikker.className = "hide";
    pinguin.className = "hide";
    haai.className = "hide";
    beestje.className = "hide";
    beer.className = "hide";
    panda.className = "hide";
    egel.className = "hide";
    everzwijn.className = "hide";
    vos.className = "hide";
    fox.className = "hide";
    papegaai.className = "hide";
    eagel.className = "hide";
    nemo.className = "hide";
    elephant.className = "hide";
    bloembak.className = "geselecteerd";
    muur.className = "geselecteerd";
    kast.className = "geselecteerd";
  }

  var hamsterrad = document.getElementsByClassName("rad")[0];
  var renbaan = document.getElementsByClassName("ren")[0];
  var hondenparcour = document.getElementsByClassName("parcour")[0];
  var kattenyoga = document.getElementsByClassName("yoga")[0];

  var tekstEen = document.getElementById("hamster");
  var tekstTwee = document.getElementById("baan");
  var tekstDrie = document.getElementById("honden");
  var tekstVier = document.getElementById("katten");


  hamsterrad.onclick = function () {
    tekstEen.className = "geselecteerd";
    tekstTwee.className = "hide";
    tekstDrie.className = "hide";
    tekstVier.className = "hide";
  }

  renbaan.onclick = function () {
      tekstEen.className = "hide";
    tekstTwee.className = "geselecteerd";
    tekstDrie.className = "hide";
    tekstVier.className = "hide";
  }

  hondenparcour.onclick = function () {
    tekstEen.className = "hide";
    tekstTwee.className = "hide";
    tekstDrie.className = "geselecteerd";
    tekstVier.className = "hide";
  }

  kattenyoga.onclick = function () {
    tekstEen.className = "hide";
    tekstTwee.className = "hide";
    tekstDrie.className = "hide";
    tekstVier.className = "geselecteerd";
  }

}

window.onload = function() {
       main();
}
