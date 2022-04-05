function jogar(value) {
    var qtdjogos ="JOGOS";
    var vitorias ="VITORIAS";
    var derrotas ="DEROTAS";
    var total = +localStorage.getItem(qtdJogos) + 1;
    localStorage.setItem(qtdjogos,total);

    var escolhaPC = Math.floor(Math.random() * (3 - 1) +1);

    if (escolhaPC === value) {
        alert ('empate');
    }
    total();
}

function total() {
    var qtdjogos = "jogos";
    var total = localStorage.getItem(qtdjogos);
    var inputTotal = document.getElementById("total");
    inputTotal = total;
}