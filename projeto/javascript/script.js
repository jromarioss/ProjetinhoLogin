

function verificarBotao() {
    var inNome = document.getElementById("inNome");
    var inSenha = document.getElementById("inSenha");

    var nome = inNome.value;
    var senha = inSenha.value;

    if (nome == ""){
        inNome.placeholder="Informe o nome ou e-mail";
        inNome.focus();
        return;
    } else if (senha == "") {
        inSenha.placeholder="Informe uma senha";
        inSenha.focus();
        return;
    }

}
var btLogar = document.getElementById("btLogar");
btLogar.addEventListener("click", verificarBotao);

function olharASenha() {
    var inSenha = document.getElementById("inSenha");;

    if (inSenha.type == "password") {
        inSenha.type = "text";
    } else {
        inSenha.type = "password";
    }
}
var olhoSenha = document.getElementById("olhoSenha");
olhoSenha.addEventListener("click", olharASenha);