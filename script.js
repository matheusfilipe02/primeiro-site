function enviar() {
    let mail = document.getElementById("Mail")
    let password = document.getElementById("Senha")
    if (mail.value.length == "" || password.value.length == "") {
        alert("Por favor, digite o que se pede!")
    }
}