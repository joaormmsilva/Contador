let numero = document.getElementById("num")
numero.textContent = 0

function aumentar(){
    let valorAtual = parseInt(numero.textContent);
    numero.textContent = valorAtual + 1;
}

function diminuir(){
    let valorAtual = parseInt(numero.textContent);
    numero.textContent = valorAtual + -1;
}

function limpar(){
    numero.textContent = 0
}