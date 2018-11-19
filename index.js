const parameetrid = new URLSearchParams(window.location.search);
var type = parameetrid.get('type');

if (type == null) {
    console.log("Tüüpi pole määratud");
    type = "gpu"
}

let uus_tooted = [];

for (let i=0; i<tooted.length; i++) {
    if (tooted[i]["type"] === type) {
        uus_tooted.push(tooted[i])
    }
}

console.log(uus_tooted);

var filtrid = document.getElementById("filtrid");

filtrid.onchange = function() {
    let valik = filtrid.options[filtrid.selectedIndex].value;
    if (valik === "kallimad") {
        uus_tooted.sort(function (a,b) {
            if (a["hind"] < b["hind"]) {
                return 1
            } else if (a["hind"] > b["hind"]) {
                return -1
            }
            return 0
        });
    } else if (valik === "odavamad") {
        uus_tooted.sort(function (a,b) {
            if (a["hind"] < b["hind"]) {
                return -1
            } else if (a["hind"] > b["hind"]) {
                return 1
            }
            return 0
        });
    }

    for (let i=0; i<uus_tooted.length; i++) {
        console.log(uus_tooted[i]["hind"])
    }
    console.log("-----")
};