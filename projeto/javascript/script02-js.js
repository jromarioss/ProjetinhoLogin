
function preencherFormularios() {
    var inNome = document.getElementById("inNome");
    var inEmail = document.getElementById("inEmail");
    var inTelefone = document.getElementById("inTelefone");
    var inSenha = document.getElementById("inSenha");
    var inCfSenha = document.getElementById("inCfSenha");

    var nome = inNome.value;
    var email = inEmail.value;
    var telefone = inTelefone.value;
    var senha = inSenha.value;
    var cfSenha = inCfSenha.value;

    if (nome == "") {
        inNome.placeholder = "Informe o nome e sobrenome";
        inNome.focus();
        return;
    } else if (email == "") {
        inEmail.placeholder = "Informe o E-mail";
        inEmail.focus();
        return;
    } else if (telefone == "") {
        inTelefone.placeholder = "Informe o Telefone";
        inTelefone.focus();
        return;
    } else if (senha == "") {
        inSenha.placeholder = "Informe uma Senha";
        inSenha.focus();
        return;
    } else {
        inCfSenha.placeholder = "Confirme a Senha";
        inCfSenha.focus();
        return;
    }
}
var btcadastro = document.getElementById("btcadastro");
btcadastro.addEventListener("click", preencherFormularios);