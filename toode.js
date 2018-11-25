const parameetrid = new URLSearchParams(window.location.search);
const id = parameetrid.get('id');
const html_toode_kirjeldus = document.getElementById("kirjeldus");
const template_tabel = document.getElementById("tabel");
const template_veerg = document.getElementById("veerg");

if (id == null) {
    muuda_nähtavust("error");
    document.title = "Viga - Macro Center";
} else {
    let toode = toode_IDst(tooted, parseInt(id));

    if (toode === false) {
        muuda_nähtavust("error");
        document.title = "Viga - Macro Center";

    } else {
        document.title = toode["nimi"] + " - Macro Center";
        document.getElementById("nimi").innerHTML = toode["nimi"];
        document.getElementById("hind").innerHTML = toode["hind"];
        document.getElementById("pilt").src = toode["pilt"];
        html_speclist(toode["specs"], html_toode_kirjeldus, template_tabel, template_veerg);
        muuda_nähtavust("toode");
    }
}

