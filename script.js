let numero = document.getElementById("num")
numero.textContent = 0

function atualizarCor() {
    let valor = parseInt(numero.textContent);
    if (valor > 0) {
        numero.style.color = "green";
    } else if (valor < 0) {
        numero.style.color = "red";
    } else {
        numero.style.color = "black";
    }
}

function aumentar(){
    let valorAtual = parseInt(numero.textContent);
    numero.textContent = valorAtual + 1;
    atualizarCor()
}

function diminuir(){
    let valorAtual = parseInt(numero.textContent);
    numero.textContent = valorAtual + -1;
    atualizarCor()
}

function limpar(){
    numero.textContent = 0
    atualizarCor()
}