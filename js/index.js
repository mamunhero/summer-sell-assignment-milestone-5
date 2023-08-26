let total = 0;
function handleClickCard(card) {
  const cardNameElement = card.querySelector(".card-title")
  const cardName = cardNameElement.innerText;
  const li = document.createElement("li");
  li.innerText = cardName;
  li.style.listStyle = "decimal"
  const selectedItemContainer = document.getElementById("selected-item");
  selectedItemContainer.appendChild(li);
  const priceElement = card.querySelector("span");
  const price = priceElement.innerText.split(" ")[0];
  total = parseFloat(total) + parseFloat(price);
  const totalPrice = total
  document.getElementById("total-price").innerText = totalPrice.toFixed(2);
  if (total>0) {
    document.getElementById("btn-purchase").removeAttribute("disabled")
   }
}

function handleClickBtnApply() {
  const buttonElement = document.getElementById("btn-apply");
  const couponCodeElement = document.getElementById("coupon-code");
  const couponCode = couponCodeElement.value;
  if (couponCode === "SELL" && total>200) {
     // discount
   const discountElement = document.getElementById("discount");
   const discountElementValue = discountElement.innerText.split(" ")[0];
   const discountElementValueString = parseFloat(discountElementValue);
   const discountAmount = (total * 0.2).toFixed(2);
   discountElement.innerText = discountAmount ;
  //  document.getElementById("btn-apply").removeAttribute("disabled")
   // total
  const totalElement = document.getElementById("total");
  const totalElementValue = totalElement.innerText.split(" ")[0];
  const totalElementValueString = parseFloat(totalElementValue);
  const totalAmount = (total - discountAmount).toFixed(2);
  totalElement.innerText = totalAmount;
  
  } 
}


 function handleClickBtn() {
  document.getElementById("selected-item").innerText ="";
  document.getElementById("total-price").innerText = "";
  document.getElementById("discount").innerText = "";
  document.getElementById("total").innerText = "";
}

