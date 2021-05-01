function validar() {

    /*Buscamos um elemento pelo Id para ter um retorno*/
    var form = document.getElementById("form");
    var username = document.getElementById("username");
    var email = document.getElementById("email");

    /*Realizamos uma condição que o campo Nome e E-mail não podem ser submetidos vazio */
    if (username.value == "") {
        /*Caso o campo esteja em branco retornamos na tag span com id um mensagem e focamos no campo que está sem o precimentos*/
        document.getElementById("msg_nome").innerHTML = "* O nome deve ser preenchido.";
        form.username.focus();
        return false;
    } else if (email.value == "") {
        document.getElementById("msg_email").innerHTML = "* O e-mail deve ser preenchido.";
        form.email.focus();
        return false;
    } else{
        /*Com os campos preenchidos retornamos um alert informado que o cadastro foi realizado e os dados informados (somente para visualização)*/
       alert("Cadastrado realizado com sucesso! Agora você vai ficar por dentro das novidades!\n" +
        "Os dados informados: \n" +
        "Nome: " + username.value + "\n" + "E-mail: " + email.value);
    }
}

 