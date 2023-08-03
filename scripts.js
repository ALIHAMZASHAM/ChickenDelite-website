const menuItems = document.querySelectorAll('.menu-item');
const cartItemsElement = document.querySelector('#cart-items');
const totalPriceElement = document.querySelector('#total-price');

let cartItems = [
    {name: 'Chilli Dip', price: 0.50},
    {name: 'Mayo Dip', price: 0.50},
];
let totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

menuItems.forEach(item => {
    item.addEventListener('click', () => {
         let price = Number(item.dataset.price);
        let name = item.dataset.name;

        totalPrice += price;
        cartItems.push({name: name, price: price});

        updateCart();
        }
    });
});

function updateCart() {
    // Update the total price
    totalPriceElement.textContent = `Total Price: £${totalPrice.toFixed(2)}`;

    // Clear the list of cart items
    cartItemsElement.innerHTML = '';

    // Add each cart item to the list
    cartItems.forEach((item, index) => {
        let li = document.createElement('li');
        li.textContent = `${item.name} - £${item.price.toFixed(2)} `;
        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            // Remove this item from the cart
            totalPrice -= item.price;
            cartItems.splice(index, 1);

            updateCart();
        });
        li.appendChild(removeButton);
        cartItemsElement.appendChild(li);
    });
}

// Call updateCart once at the start to initialize the cart
updateCart();
function searchMenu() {
    let input = document.getElementById('search-box').value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('menu-item');
      
    for (i = 0; i < x.length; i++) {  
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display="none";
      }
      else {
        x[i].style.display="list-item";                 
      }
    }
  }
  //print cart
  document.getElementById('print-reciept').onclick = function() {
    var printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Print Cart</title>');
    printWindow.document.write('<style>/* Add some CSS if needed */</style></head><body>');
    printWindow.document.write(document.getElementById('cart').innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}
/*
//description for menu
window.onload = function() {
    var menuItems = document.getElementsByClassName("menu-item");
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];

    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener('click', function() {
            var description = this.getAttribute('data-description');
            var name = this.getAttribute('data-name');
            document.getElementById("modal-title").innerText = name;
            document.getElementById("modal-description").innerText = description;
            modal.style.display = "block";
        });
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
*/


  
