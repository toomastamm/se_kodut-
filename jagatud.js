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

function dict_tabeliks(dict) {
    let tabel = "";
    Object.entries(dict).forEach(function (element) {
        tabel += ("<table class='tabel'><caption class='tabel_pealkiri'>" + element[0] + "</caption>");
        Object.entries(element[1]).forEach(function (element) {
            tabel += '<tr class="tabel_veerg"><td class="tabel_vasak">' + element[0] + "</td>";
            tabel += '<td class="tabel_parem">' + element[1].toString() + '</td>';
            tabel += '</tr>'
        });
        tabel += '</table>';
        console.log("---")
    });

    return tabel
}