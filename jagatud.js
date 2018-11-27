function toode_IDst(list, id) {
    for (let i = 0; i < list.length; i++) {
        if (list[i]["id"] === id) {
            return list[i]
        }
    }

    return false
}

function muuda_nähtavust(id) {
    let x = document.getElementById(id);
    if (x.style.display !== 'none') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block'
    }
}

function vormista(variable) {
    if (typeof variable === "string") {
        return variable
    }
    if (typeof variable === "number") {
        return variable
    }

    if (variable.length === 0) { return "" }

    let string = "";

    for (let i = 0; i < variable.length - 1; i++) {
        string += variable[i];
        string += ", "
    }
    string += variable[variable.length-1];
    return string
}

function html_speclist(specs, sihtmärk, template_tabel, template_veerg) {
    sihtmärk.innerHTML = "";
    Object.entries(specs).forEach(function (element) {
        let tabel = document.importNode(template_tabel.content, true);
        tabel.querySelector("#tabel_pealkiri").innerHTML = element[0];
        Object.entries(element[1]).forEach(function (element) {
            let veerg = document.importNode(template_veerg.content, true);
            veerg.querySelector("#tabel_vasak").innerHTML = element[0];
            veerg.querySelector("#tabel_parem").innerHTML = vormista(element[1]);
            tabel.querySelector("#specs_tabel").appendChild(veerg);
        });

        sihtmärk.appendChild(tabel)
    });

}

function html_tootelist(tooted, sihtmärk, template) {
    sihtmärk.innerHTML = "";
    for (let i = 0; i < tooted.length; i++) {
        let toode = document.importNode(template.content, true);
        toode.querySelector("#pilt").src = tooted[i]["pilt"];
        toode.querySelector("#nimi").textContent = tooted[i]["nimi"];
        toode.querySelector("#hind").textContent = tooted[i]["hind"] + "€";
        toode.querySelector("#hind").href = "toode.html?id=" + tooted[i]["id"];
        sihtmärk.appendChild(toode);
    }
}