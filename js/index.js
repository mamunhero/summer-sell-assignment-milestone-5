console.log("hello-world")
// let total = 0;
// function handleClickCard(card) {
//   const selectedItemContainer = document.getElementById("selected-item")
//   const cardNameElement = card.querySelector(".card-title");
//   const cardName = cardNameElement.innerText;
//   const li = document.createElement("li");
//   li.innerText = cardName;
//   li.style.listStyle = "decimal"
//   selectedItemContainer.appendChild(li)
//   const priceElement = card.querySelector("span");
//   const price = priceElement.innerText.split(" ")[0];
//   total = parseInt(total) + parseInt(price);
//   document.getElementById("total-price").innerText = total;
  // discount
  // const discountElement = document.getElementById("discount");
  // const discountElementValue = discountElement.innerText.split(" ")[0];
  // const discountElementValueString = parseFloat(discountElementValue);
  // const discountAmount = (total * 0.2).toFixed(2);
  // discountElement.innerText = total;
  // total
  // const totalElement = document.getElementById("total");
  // const totalElementValue = totalElement.innerText.split(" ")[0];
  // const totalElementValueString = parseFloat(totalElementValue);
  // const totalAmount = (total - discountAmount).toFixed(2);
  // totalElement.innerText = totalAmount;
 if (total>0) {
  document.getElementById("btn-purchase").removeAttribute("disabled")
 }
//  if (total<200) {
//   document.getElementById("discount").innerText = "";
//  }
//  if (total>200) {
//   document.getElementById("btn-apply").removeAttribute("disabled")
//  }
 
}

function handleClickBtnApply() {
  const codeElement = document.getElementById("btn-apply")
  console.log(codeElement);
  // const codeElement = document.getElementById("c");
  // const discountElement = document.getElementById("b");
  // console.log(discountElement)
  // const codeElementValue = codeElement.value; 
  // console.log(codeElementValue)
  // if (codeElementValue == "SELL" ) {
    console.log('clisked')
  // const totalElement = document.getElementById("total");
  // const totalElementValue = totalElement.innerText.split(" ")[0];
  // const totalElementValueString = parseFloat(totalElementValue);
  // const totalAmount = (total - discountAmount).toFixed(2);
  // totalElement.innerText = totalAmount;
  // const discountAmount = (total * 0.2).toFixed(2);
  // discountElement.innerText = "discountAmount";
  }
  // const totalElement = document.getElementById("total");
  // const totalElementValue = totalElement.innerText.split(" ")[0];
  // const totalElementValueString = parseFloat(totalElementValue);
  // const totalAmount = (total - discountAmount).toFixed(2);
  // totalElement.innerText = totalAmount;
  // const discountAmount = (total * 0.2).toFixed(2);
  // discountElement.innerText = "discountAmount";
}


function handleClickBtn() {
  document.getElementById("selected-item").innerText ="";
  document.getElementById("total-price").innerText = "";
  document.getElementById("discount").innerText = "";
  document.getElementById("total").innerText = "";
}
