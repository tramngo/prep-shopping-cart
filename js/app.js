window.onload = function ( ) {


var orders = [
  { "name": "Lusicious Jello Mix", "description": ["Very Elegant", "Trending item", "Come in Purple"], "price": 80.65 },
  { "name": "Tarnished Standing Desk", "description": ["Modular", "Works for both Tall and Loud People", "Smells like Productivity"], "price": 1654.99},
  { "name": "Hand-made Hand Grenades", "description": ["Such gift!", "Much boom!", "Very safe for kids"], "price": 10.44},
  { "name": "Pan-fried Cookie Dough", "description": ["Chocolate", "Family-size", "Hot Mess"], "price": 16.99 },
  { "name": "Fancy Dress Hanger", "description": ["Keep organized", "On Sale"], "price": 67.32 },
  { "name": "Snarky Britsh Mustache 3-Pack", "description": ["Sharing is caring!", "Hugs not drugs", "As seen on 'So You Think You Can Dance - Nigeria!'"], "price": 1.99 },
];

function printCart (items) {
for (var i=0;i<items.length; i++) {
	var main = document.getElementById('main');
	var newLine = document.createElement('div');
	main.appendChild(newLine);

	var nameBox = document.createElement('div');
	nameBox.classname = "names";
	nameBox.innerHTML = items[i].name;
	main.appendChild(nameBox);

	var descriptionBox = document.createElement('div');
	descriptionBox.classname = "description";
	descriptionBox.innerHTML = items[i].description;
	main.appendChild(descriptionBox);

	var priceBox = document.createElement('div');
	priceBox.classname = "price";
	priceBox.innerHTML = items[i].price;
	main.appendChild(priceBox);
}
   }

 printCart(orders);

};






