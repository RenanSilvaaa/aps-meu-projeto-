document.getElementById("mensagem").innerText=" " ; //Codigos vanila em JS
document.getElementById("mensagem2").innerText=" ";
document.getElementById("mensagem3").innerText=" " ;
document.getElementById("mensagem4").innerText=" ";
document.getElementById("mensagem5").innerText=" ";

function mostrarSecao(id) {
// Seleciona todas as seções
    const secoes = document.querySelectorAll(".secao");

// Oculta todas as seções
    secoes.forEach(secao => secao.style.display = "none");

// Exibe apenas a seção clicada 
    const secaoSelecionada = document.getElementById(id);
    secaoSelecionada.style.display = "block"; 
} 