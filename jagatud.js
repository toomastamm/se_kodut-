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

function list_stringiks(list) {
    if (list.getType() === "string") {return list}
    let string = "";
    for (let i=0; i<list.length-1; i++) {
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
            tabel += '<td class="tabel_parem">' + (element[1]) + '</td>';
            tabel += '</tr>'
        });
        tabel += '</table>';
        console.log("---")
    });

    return tabel
}

function tooted_flexiks(tooted) {
    let flex = "";
    for (let i=0; i<tooted.length; i++) {
        flex += '<div class="asi">';
        flex += '<img class="pilt" src="' + tooted[i]["pilt"] + '">';
        flex += '<div class="nimi">' + tooted[i]["nimi"] + '</div>';
        flex += '<a class="hind" href="' + "toode.html?id=" + tooted[i]["id"] +  '">' + tooted[i]["hind"] + '€</a>';
        flex += '</div>'
    }
    console.log(flex);
    return flex
}