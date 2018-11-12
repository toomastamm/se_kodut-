const parameetrid = new URLSearchParams(window.location.search);
const id = parameetrid.get('id');

if (id == null) {
    muuda_nähtavust("toode");
    document.title = "Viga - Mingi Pood";
} else {
    let toode = toode_IDst(tooted, id);

    if (toode === false) {
        muuda_nähtavust("toode");
        document.title = "Viga - Mingi Pood";

    } else {
        muuda_nähtavust("error");
        document.title = toode["nimi"] + " - Mingi Pood";
        document.getElementById("nimi").innerHTML = toode["nimi"];
        document.getElementById("hind").innerHTML = "Osta kohe " + toode["hind"] + "€";
        document.getElementById("kirjeldus").innerHTML = dict_tabeliks(toode["specs"]);
        document.getElementById("pilt").src = toode["pilt"];
    }
}

