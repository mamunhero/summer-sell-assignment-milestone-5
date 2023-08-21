let count = 1;
let total = 0;
function handleClickCard(card) {
  const selectedItemContainer = document.getElementById("selected-item")
  const cardNameElement = card.querySelector(".card-title");
  const cardName = cardNameElement.innerText;
  const ol = document.createElement("ol");
  ol.innerText = cardName;
  selectedItemContainer.appendChild(ol)
  const priceElement = card.querySelector("span");
  const price = priceElement.innerText.split(" ")[0];
  total = parseInt(total) + parseInt(price);
  document.getElementById("total-price").innerText = total;
  // discount
  const discountElement = document.getElementById("discount");
  const discountElementValue = discountElement.innerText.split(" ")[0];
  const discountElementValueString = parseFloat(discountElementValue);
  const discountAmount = (total * 0.2).toFixed(2);
  discountElement.innerText = discountAmount;
  // total
  const totalElement = document.getElementById("total");
  const totalElementValue = totalElement.innerText.split(" ")[0];
  const totalElementValueString = parseFloat(totalElementValue);
  const totalAmount = (total - discountAmount).toFixed(2);
  totalElement.innerText = totalAmount;
 if (total>0) {
  document.getElementById("btn-purchase").removeAttribute("disabled")
 }
 if (total<200) {
  document.getElementById("discount").innerText = "";
 }
 if (total>200) {
  document.getElementById("btn-apply").removeAttribute("disabled")
 }
 
}

function handleClickBtn() {
  document.getElementById("selected-item").innerText ="";
  document.getElementById("total-price").innerText = "";
  document.getElementById("discount").innerText = "";
  document.getElementById("total").innerText = "";
}

