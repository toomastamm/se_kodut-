const parameetrid = new URLSearchParams(window.location.search);
const id = parameetrid.get('id');

if (id == null) {
    muuda_nähtavust("toode");
} else {
    let toode = toode_IDst(tooted, id);

    if (toode === false) {
        muuda_nähtavust("toode");
    } else {
        muuda_nähtavust("error");
    document.getElementById("nimi").innerHTML = toode["nimi"];
    document.getElementById("hind").innerHTML = "Osta kohe " + toode["hind"] + "€";
    document.getElementById("kirjeldus").innerHTML = toode["kirjeldus"];
    //document.getElementById("pilt").innerHTML = toode["pilt"];

    }
}

