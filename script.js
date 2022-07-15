function enviar() {
    let name = document.getElementById("Ntext")
    let mail = document.getElementById("Mail")
    let password = document.getElementById("Senha")
    if (name.value.length == "" || mail.value.length == "" || password.value.length == "") {
        alert("Por favor, digite o que se pede!")
    } else {
        alert("Cadastro efetuado com sucesso!")
    }
}
