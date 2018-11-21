const parameetrid = new URLSearchParams(window.location.search);
let type = parameetrid.get('type');

if (type == null) {
    console.log("Tüüpi pole määratud");
    type = "gpu"
}

let uus_tooted = [];

for (let i = 0; i < tooted.length; i++) {
    if (tooted[i]["type"] === type) {
        uus_tooted.push(tooted[i])
    }
}

console.log(uus_tooted);

const filtrid = document.getElementById("filtrid");

filtrid.onchange = function () {
    let valik = filtrid.options[filtrid.selectedIndex].value;
    if (valik === "nimi") {
        uus_tooted.sort(function (a, b) {
            a = a["nimi"].toLowerCase();
            b = b["nimi"].toLowerCase();
            if (a < b) { return 1 }
            if (a > b) { return -1 }
            return 0
        })
    } else if (valik === "kallimad") {
        uus_tooted.sort(function (a, b) {
            a = a["hind"];
            b = b["hind"];
            if (a < b) { return 1 }
            if (a > b) { return -1 }
            return 0
        });
    } else if (valik === "odavamad") {
        uus_tooted.sort(function (a, b) {
            a = a["hind"];
            b = b["hind"];
            if (a < b) { return -1 }
            if (a > b) { return 1 }
            return 0
        });
    }

    for (let i = 0; i < uus_tooted.length; i++) {
        console.log(uus_tooted[i])
    }

    console.log("-----")
};