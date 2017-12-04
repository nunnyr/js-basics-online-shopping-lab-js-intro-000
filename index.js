var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here

 let itemPrice = Math.floor(Math.random() * 100 +1 )
 cart.push({[item]: itemPrice})
 console.log(`${item} has been added to your cart.`)
 console.log("What is the value!", cart[item])
 return cart

}


//
function viewCart() {
  let itemsandprices = [];
  let initial = 'In your cart, you have';
  for (var i = 0; i < cart.length; i++){
    //we need to access the key  and the value in the array. It is an array with objects.
    //Use array method.
    let itemInArray = Object.keys(cart[i]);
    let priceInArray = cart[i][itemInArray];
        itemsandprices.push(itemInArray +' at $'+ priceInArray)  }
    let twoItems = itemsandprices.join(' and ');
    let first = itemsandprices.slice(0, -1).join(', ');
    let last = itemsandprices.slice(-1);

      if (cart.length === 0){
        console.log('Your shopping cart is empty.')
      }
        else if (cart.length === 1){
          console.log(`${initial} ${itemsandprices}.`)
        }
          else if (cart.length === 2){
            console.log(`${initial} ${twoItems}.`)
          }
            else if (cart.length > 2){
              return(`${initial} ${first}, and ${end}.`)
            }
  }






function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
