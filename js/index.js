// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'Pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(function(oneMushroom){
    state.mushrooms === true ? oneMushroom.style.visibility = 'visible' : oneMushroom.style.visibility = 'hidden';
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function(onePepper){
    state.greenPeppers === true ? onePepper.style.visibility = 'visible' : onePepper.style.visibility = 'hidden'; 
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauce = document.querySelector('.crust .sauce');
  state.whiteSauce === true ? sauce.className = 'sauce sauce-white' : sauce.className = 'sauce' ;
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crust = document.querySelector('.crust'); 
  state.glutenFreeCrust === true ? crust.className = 'crust crust-gluten-free' : crust.className = 'crust';
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll('.btn').forEach(function(button){
    switch(button.innerHTML){
      case 'pepperoni' :
        state.pepperoni === true ? button.className = 'btn btn-pepperoni active' : button.className = 'btn btn-pepperoni';
        break;
      case 'Mushrooms' :
        state.mushrooms === true ? button.className = 'btn btn-mushrooms active' : button.className = 'btn btn-mushrooms';
        break;
      case 'Green peppers' :
        state.greenPeppers === true ? button.className = 'btn btn-green-peppers active' : button.className = 'btn btn-green-peppers';
        break;
      case 'White sauce' :
        state.whiteSauce === true ? button.className = 'btn btn-sauce active' : button.className = 'btn btn-sauce';
        break;
      case 'Gluten-free crust' :
        state.glutenFreeCrust === true ? button.className = 'btn btn-crust active' : button.className = 'btn btn-crust';
        break;
        
    }
  });
  
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let totalPrice = basePrice;

  let list = document.querySelector('.panel.price ul');
  list.innerHTML='';

  for (let key in ingredients){
    if(state[key]){
      list.innerHTML += '<li>$' + ingredients[key].price + ' ' + ingredients[key].name + '</li>';
      totalPrice += ingredients[key].price;
    }
  }

  let actualPrice = document.querySelector('.panel.price strong');
  actualPrice.innerHTML = '$'+totalPrice;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

document.querySelector('.btn.btn-sauce').addEventListener('click', function(){
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

document.querySelector('.btn.btn-crust').addEventListener('click', function(){
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
