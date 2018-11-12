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
        tabel += ("<div class='tabel_pealkiri'>" + element[0] + "</div>");
        let vasak = '<div class="tabel_vasak">';
        let parem = '<div class="tabel_parem">';
        Object.entries(element[1]).forEach(function (element) {
            vasak += '<div class="tabel_vasak_väärtus">' + element[0] + "</div>";
            if (typeof element[1] === "number" || typeof element[1] === "string") {
                parem += '<div class="tabel_parem_väärtus">' + element[1] + '</div>';
            } else if (typeof element[1] === "object") {
                parem += '<div class="tabel_parem_väärtus">' + (element[1].toString()) + '</div>';
            }
        });
        vasak += '</div>';
        parem += '</div>';
        tabel += vasak;
        tabel += parem;
        console.log("---")
    });

    return tabel
}