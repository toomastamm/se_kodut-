const filtrid = document.getElementById("filtrid");
const template_toode = document.getElementById("toode");
const html_toodete_list = document.getElementById("tooted");

let parameetrid = new URLSearchParams(window.location.search);
let type = parameetrid.get('type');
let filter = parameetrid.get('filter');
let uus_tooted = [];



filtrid.onchange = function () {
    let valik = filtrid.options[filtrid.selectedIndex].value;
    parameetrid.set("filter", valik);
    window.history.replaceState("", "", window.location.href.split('?')[0] + "?" + parameetrid.toString());
    if (valik === "nimi") {
        uus_tooted.sort(function (a, b) {
            a = a["nimi"].toLowerCase();
            b = b["nimi"].toLowerCase();
            if (a < b) { return -1 }
            if (a > b) { return 1 }
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

    html_tootelist(uus_tooted, html_toodete_list, template_toode);
};


if (type == null) {
    type = "gpu";
    parameetrid.set("type", type);
    window.history.replaceState("", "", window.location.href.split('?')[0] + "?" + parameetrid.toString());
}

for (let i = 0; i < tooted.length; i++) {
    if (tooted[i]["type"] === type) {
        uus_tooted.push(tooted[i])
    }
}

if (filter !== null) {
    filtrid.value = filter;
    filtrid.onchange();
}

html_tootelist(uus_tooted, html_toodete_list, template_toode);
