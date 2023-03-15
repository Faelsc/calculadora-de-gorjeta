const gorjeta = document.getElementById("bill");
const numeroDePessoas = document.getElementById("people");
const porcentagemDeGorjeta = document.getElementById("custom");
const quantidadeDeGorjeta = document.getElementById("tipAmount");
const gorjetaPorPessoa = document.getElementById("total");
const resetBotao = document.getElementById("resetBotao");
const botoes = document.querySelectorAll(".tip-botao button");

botoes.forEach((button) => {
  button.addEventListener("click", (e) => {
    let tipvalue = e.target.innerText;
    tipvalue = tipvalue.substr(0, tipvalue.length - 1);

    if (gorjeta.value === "") return;
    if (numeroDePessoas.value === "") numeroDePessoas.value = 1;

    calculateTip(
      parseFloat(gorjeta.value),
      parseInt(tipvalue),
      parseInt(numeroDePessoas.value)
    );
  });
});

porcentagemDeGorjeta.addEventListener("blur", (e) => {
  if (gorjeta.value === "") {
    resetEverything();
    return;
  }
  if (numeroDePessoas.value === "") numeroDePessoas.value = 1;

  calculateTip(
    parseFloat(gorjeta.value),
    parseFloat(e.target.value),
    parseInt(numeroDePessoas.value)
  );
});

function calculateTip(gorjeta, tipPercentage, numeroDePessoas) {
  let tipAmount = (gorjeta * (tipPercentage / 100)) / numeroDePessoas;
  let tip = Math.floor(tipAmount * 100) / 100;
  tip = tip.toFixed(2);

  let totalAmount = (tipAmount * numeroDePessoas + gorjeta) / numeroDePessoas;
  totalAmount = totalAmount.toFixed(2);

  quantidadeDeGorjeta.innerHTML = `$${tip}`;
  gorjetaPorPessoa.innerHTML = `$${totalAmount}`;
}

resetBotao.addEventListener("click", resetEverything);
function resetEverything() {
  quantidadeDeGorjeta.innerHTML = "$0.00";
  gorjetaPorPessoa.innerHTML = "$0.00";
  gorjeta.value = "";
  numeroDePessoas.value = "";
  porcentagemDeGorjeta.value = "";
}