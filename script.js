// Aguarda o HTML carregar completamente
document.addEventListener("DOMContentLoaded", function () {

    const linkInicio = document.getElementById("link-inicio");
    const fraseInicio = document.getElementById("frase-inicio");

    // Só executa se os dois elementos existirem na página
    if (linkInicio && fraseInicio) {
        linkInicio.addEventListener("click", function (evento) {
            // Impede o link de recarregar a página
            evento.preventDefault();

            // Alterna a classe que mostra/esconde a frase
            fraseInicio.classList.toggle("frase-visivel");
        });
    }

});