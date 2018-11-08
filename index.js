function toode_IDst(list, id) {
    for (let i=0; i<list.length; i++) {
        if (list[i]["id"] == id) {
            return list[i]
        }
    }

    return false
}

function muuda_nähtavust(id) {
    let x = document.getElementById(id);
    if (x.style.display !=='none') {
        x.style.display = 'none';
    } else {
        div.style.display = 'block'
    }
}