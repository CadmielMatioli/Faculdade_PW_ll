
// document.getElementById("filme1").addEventListener('click', function (event) {
//     document.getElementById("msg-direito").style.display = "none";
//     document.getElementById("conteudo-direito").style.display = "block";

//     var filme1 = document.getElementById("filme1");
//     var capa_src = filme1.getElementsByTagName("img")[0].src;
//     var titulo = filme1.getElementsByClassName("titulo")[0].innerHTML;
//     var ano = filme1.getElementsByClassName("ano")[0].innerHTML;
//     var diretor = filme1.getElementsByClassName("diretor")[0].innerHTML;

//     document.getElementById("visualiza-imagem").src = capa_src;
//     document.getElementById("visualiza-titulo").innerHTML = titulo;
//     document.getElementById("visualiza-ano-diretor").innerHTML = ano + " - " + diretor;
// });

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        preencherLinhaFilmes1XML(this.responseXML);
    }
};
xhttp.open("GET", "/films14", true);
xhttp.send();

var xhttp2 = new XMLHttpRequest();
xhttp2.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        preencherLinhaFilmes2JSON(this.responseText);
    }
};
xhttp2.open("GET",  "/films58", true);
xhttp2.send();

function preencherLinhaFilmes1XML(xmlDoc) {
    var i;

    var filmes = xmlDoc.getElementsByTagName("filme");

    var filmes_obj = [];

    for(i=0; i<filmes.length; i++) {
        var titulo = filmes[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue;
        var img_src = filmes[i].getElementsByTagName("img_src")[0].childNodes[0].nodeValue;
        var ano = filmes[i].getElementsByTagName("ano")[0].childNodes[0].nodeValue;
        var diretor = filmes[i].getElementsByTagName("diretor")[0].childNodes[0].nodeValue;
        var sinopse = filmes[i].getElementsByTagName("sinopse")[0].childNodes[0].nodeValue;

        var filme = {
            "titulo": titulo,
            "img_src": img_src,
            "ano": ano,
            "diretor": diretor,
            "sinopse": sinopse
        }

        filmes_obj.push(filme);
    }

    var linha_filmes1 = document.getElementsByClassName("linha-filmes")[0];
    var filmes_divs = linha_filmes1.getElementsByClassName("filme");

    for (i=0; i<filmes_divs.length; i++) {
        var filme_atual_div = filmes_divs[i];
        var filme_atual = filmes_obj[i];

        filme_atual_div.getElementsByTagName("img")[0].src = filme_atual.img_src;
        filme_atual_div.getElementsByClassName("titulo")[0].innerHTML = filme_atual.titulo;
        filme_atual_div.getElementsByClassName("ano")[0].innerHTML = filme_atual.ano;
        filme_atual_div.getElementsByClassName("diretor")[0].innerHTML = filme_atual.diretor;
    }
}

function preencherLinhaFilmes2JSON(json) {
    var filmes_obj = JSON.parse(json);
    filmes_obj = filmes_obj.filmes;

    var linha_filmes2 = document.getElementsByClassName("linha-filmes")[1];
    var filmes_divs = linha_filmes2.getElementsByClassName("filme");

    for (i=0; i<filmes_divs.length; i++) {
        var filme_atual_div = filmes_divs[i];
        var filme_atual = filmes_obj[i];

        filme_atual_div.getElementsByTagName("img")[0].src = filme_atual.imgSrc;
        filme_atual_div.getElementsByClassName("titulo")[0].innerHTML = filme_atual.titulo;
        filme_atual_div.getElementsByClassName("ano")[0].innerHTML = filme_atual.ano;
        filme_atual_div.getElementsByClassName("diretor")[0].innerHTML = filme_atual.diretor;
    }
}
