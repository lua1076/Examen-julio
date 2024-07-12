const fotosMarcadas = 0;

function marcarFoto(evt) {
    if(evt.target.dataset.marcada == undefined) {
       evt.target.style.filter = "sepia";
        evt.target.dataset.marcada == true;
        fotosMarcadas++;
    } else {
        evt.target.style.filter = "";
        evt.target.dataset.marcada == "false";
        fotosMarcadas--;
    }
    document.getElementById("marcadas").textContent= fotosMarcadas;
}

const fotos = document.querySelectorAll("fotos img")
for (const foto of fotos) {
    fotos.addEventListener("click", marcarFoto);
}
