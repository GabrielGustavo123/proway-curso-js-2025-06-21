// Function para que serve???????????????? Contem um trecho de codigo que tem o 
// objetivo de resolver algum problema
function realizarSoma() {
    let inputNumero1 = document.querySelector("#numero1")
    let numero1 = parseInt(inputNumero1.value)

    let inputNumero2 = document.querySelector("#numero2")
    let numero2 = parseInt(inputNumero2.value)

    alert("Soma: "+ (numero1 + numero2))
}

function apresentarVariaveis(){
    let nome = "Pedro";
    let sobrenome = "Carlos";

    let idade = 20;

    let salario = 1800.20;

    let empregado = false; // falso -> false, verdadeiro -> true

    /* 
        Tipos de dados:
        string -> armazenar texto
        int -> inteiro
        float -> numero reais
        boolean -> tipo logico(vdd ou falso)
    */
   // Adicionarr 15 reais de aumento para o pedro
   let aumento = 15.00;
   salario = salario + aumento
   alert("Nome: " + nome + " Salario: " + salario)
}

function apresentarIdade(){
    let dataNascimento = new Date(1996, 7, 15);
    let anoNascimento = dataNascimento.getFullYear()
    
    let dataHoraAtual = new Date();
    let anoAtual = dataHoraAtual.getFullYear();

    let idade = anoAtual -anoNascimento

    console.log("idade: ", idade)

    if (idade <= 17){
        console.log("menor de idade")      
    } else {
        console.log("adulto")
    }

}