const amountEl = document.getElementById("amount")
const tipEl = document.getElementById("tip")
const submitEl = document.getElementById("submit")
const totalEl = document.getElementById("total")
function CalcfinalAmount(event){
    event.preventDefault()
let amount = parseFloat(amountEl.value)
let tipPercent = parseFloat(tipEl.value)

let finalAmount = amount+((tipPercent/100)*amount);
return totalEl.innerText= `Total: $${finalAmount.toFixed(2)}`;
}

submitEl.addEventListener("click",CalcfinalAmount);

