
function preencherCampo() {
   var inEmail = document.getElementById("inEmail");
   var email =inEmail.value;

   if (email == "") {
       inEmail.placeholder = "Informe o E-mail ou Telefone";
       inEmail.focus();
       return;
   }
}
var btPesquisar = document.getElementById("btPesquisar");
btPesquisar.addEventListener("click", preencherCampo);