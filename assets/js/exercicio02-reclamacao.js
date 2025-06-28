function reclamacao(){
    let inputNome = document.querySelector("#campo-nome-reclamante");
    let nome = inputNome.value;

    let inputEmail = document.querySelector("#campo-email-reclamante");
    let email = inputEmail.value;

    let textareaReclamacao = document.querySelector("#campo-sua-reclamacao");
    let reclamacao = textareaReclamacao.value;

    let textarea = document.querySelector("#campo-reclamacao");
    textarea.value = textarea.value + "\nNome: " + nome +
    "\nEmail: " + email +
    "\nReclamação: " + reclamacao +
    "\n------------------------------------";
    alert("Reclamação enviada com sucesso!");
}