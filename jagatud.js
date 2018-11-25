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

function beautify(list) {
    if (typeof list === "string") {
        return list
    }
    if (typeof list === "number") {
        return list
    }
    let string = "";
    for (let i = 0; i < list.length - 1; i++) {
        string += list[i];
        string += ", "
    }
    string += list[list.length];
    return string
}

function dict_tabeliks(dict) {
    let tabel = "";
    Object.entries(dict).forEach(function (element) {
        tabel += ("<table class='tabel'><caption class='tabel_pealkiri'>" + element[0] + "</caption>");
        Object.entries(element[1]).forEach(function (element) {
            tabel += '<tr class="tabel_veerg"><td class="tabel_vasak">' + element[0] + "</td>";
            tabel += '<td class="tabel_parem">' + beautify(element[1]) + '</td>';
            tabel += '</tr>'
        });
        tabel += '</table>';
    });

    return tabel
}

function html_tootelist(tooted, sihtmärk, template) {
    let flex = "";
    sihtmärk.innerHTML = "";
    for (let i = 0; i < tooted.length; i++) {
        toode = document.importNode(template.content, true);
        toode.querySelector("#pilt").src = tooted[i]["pilt"];
        toode.querySelector("#nimi").textContent = tooted[i]["nimi"];
        toode.querySelector("#hind").textContent = tooted[i]["hind"] +  "€";
        toode.querySelector("#hind").href = "toode.html?id=" + tooted[i]["id"];
        sihtmärk.appendChild(toode);
        console.log(toode)
    }
}