var itemPrice = 10;


function updateCart(itemId, remove,event) {
  var quantityElement = document.getElementById('quantity' + itemId);
  var currentQuantity = parseInt(quantityElement.innerText);

  if (remove && currentQuantity >1) {
    quantityElement.innerText = currentQuantity - 1;
    
    // if (currentQuantity===1) {
    //   totalQuantity=totalQuantity
    // }
  }
  else if (remove && currentQuantity ==1) {
    var div =quantityElement

    event.target.parentNode.remove()
    
  }
  else {
    quantityElement.innerText = currentQuantity + 1;
    
  }
  

  updateTotalPrice();
}

function updateTotalPrice() {
  var total = document.getElementsByClassName('price')
  var prix = document.querySelectorAll('h3')
console.log(prix)

  var value = document.getElementById('totalPrice');


  sum= 0
  for (let i = 0; i < prix.length; i++) {

      sum =sum  + Number(prix[i].innerHTML)*Number(total[i].innerHTML)
console.log(prix[i],total[i])

  }
console.log (sum)
  value.innerHTML = `Total : ${sum}`;
}


updateTotalPrice();

function btnremove(event) {
  event.target.parentNode.remove();
}

//function heart:
 function like(event){
  heart = event.target.parentNode.querySelector('.heart')
  if(heart.style.color=== 'red'){
    heart.style.color = 'gray';
}else{
    heart.style.color = 'red';
}

 }