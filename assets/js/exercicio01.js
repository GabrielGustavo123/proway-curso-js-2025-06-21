function registrar() {
    let inputNome = document.querySelector("#campo-nomeproduto");
    let nome = inputNome.value;

    let inputQuantidade = document.querySelector("#campo-quantidade");
    let quantidade = parseFloat(inputQuantidade.value);

    let inputPreco = document.querySelector("#campo-precounidade");
    let preco = parseFloat(inputPreco.value);

    // let total = (
    //     "\nnome: " + nome +
    //     "\nquantidade: " + quantidade +
    //     "\npreço: R$" + (quantidade*preco)
    // );

    return quantidade * preco;
}

function calcularTotalProduto() {
    let spanTotal = document.querySelector("#totalpreco");

    let total = registrar();

    let totalFormatada = total.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    if (isNaN(total) === true) {
        return;
    }

    spanTotal.innerHTML = totalFormatada;
}