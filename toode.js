const parameetrid = new URLSearchParams(window.location.search);
const id = parameetrid.get('id');

if (id == null) {
    muuda_nähtavust("toode");
    document.title = "Viga - Macro Center";
} else {
    let toode = toode_IDst(tooted, parseInt(id));

    if (toode === false) {
        muuda_nähtavust("toode");
        document.title = "Viga - Macro Center";

    } else {
        muuda_nähtavust("error");
        document.title = toode["nimi"] + " - Macro Center";
        document.getElementById("nimi").innerHTML = toode["nimi"];
        document.getElementById("hind").innerHTML = toode["hind"];
        document.getElementById("kirjeldus").innerHTML = dict_tabeliks(toode["specs"]);
        document.getElementById("pilt").src = toode["pilt"];
    }
}

