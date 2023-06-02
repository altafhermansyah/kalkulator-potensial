//Energi Potensial
function hitungep() {
    var epmas = Number(document.getElementById("epm").value);
    var epgra = Number(document.getElementById("epg").value);
    var ephei = Number(document.getElementById("eph").value);
    var hasil = "EP";
    var rumus = "EP";

    if (epgra == 0) {
        epgra = 10;
    }

    hasil = epmas * epgra * ephei;
    rumus = ("Ep = m . g . h");

    document.getElementById('rumus1').innerHTML = rumus;
    document.getElementById('hasil1').innerHTML = ("Ep = " + epmas + " . " + epgra + " . " + ephei + " = " + hasil + " Joule");
}
//Massa
function hitungm() {
    var mep = Number(document.getElementById("mep").value);
    var mgra = Number(document.getElementById("mg").value);
    var mhei = Number(document.getElementById("mh").value);

    var hasil = "m";
    var rumus = "m";

    if (mgra == 0) {
        mgra = 10;
    }

    hasil = mep / (mgra * mhei);
    rumus = ("m = Ep / (g . h)");

    document.getElementById('rumus2').innerHTML = rumus;
    document.getElementById('hasil2').innerHTML = ("m = " + mep + " / (" + mgra + " . " + mhei + ") = " + hasil + " Kg");
}
//Gravitasi
function hitungg() {
    var gep = Number(document.getElementById("gep").value);
    var gmas = Number(document.getElementById("gm").value);
    var ghei = Number(document.getElementById("gh").value);

    var hasil = "g";
    var rumus = "g";

    hasil = gep / (gmas * ghei);
    rumus = ("g = Ep / (m . h)");

    document.getElementById('rumus3').innerHTML = rumus;
    document.getElementById('hasil3').innerHTML = ("g = " + gep + " / (" + gmas + " . " + ghei + ") = " + hasil + " m/s");
}
//Height
function hitungh() {
    var hep = Number(document.getElementById("hep").value);
    var hmas = Number(document.getElementById("hm").value);
    var hgra = Number(document.getElementById("hg").value);

    var hasil = "h";
    var rumus = "h";

    if (hgra == 0) {
        hgra = 10;
    }

    hasil = hep / (hmas * hgra);
    rumus = ("h = Ep / (m . g)");

    document.getElementById('rumus4').innerHTML = rumus;
    document.getElementById('hasil4').innerHTML = ("h = " + hep + " / (" + hmas + " . " + hgra + ") = " + hasil + " M");
}