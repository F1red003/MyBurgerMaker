var z = 0;
var t = 0;
var listIngredient = [];
var prix=0;
const price= document.getElementById("price");
price.textContent = prix.toFixed(2) + " DH";


const addIngredient = (ingredient) => {
  z = z + 10;

  var ingredientElement = document.createElement("div");

  ingredientElement.className = ingredient + " sub_ingredient";
  ingredientElement.id = ingredient;

  switch (true) {
    case ingredientElement.classList.contains("tomato"):
      t = t + 25;
      prix+=1.5;
      listIngredient += "tamato";
      price.textContent = prix.toFixed(2) + " DH";
      break;

    case ingredientElement.classList.contains("beef"):
      t = t + 25;
      prix+=20;
      listIngredient += "tamato";
      price.textContent = prix.toFixed(2) + " DH";
      break;

    case ingredientElement.classList.contains("edam"):
      t = t + 25;
      prix+=3;
      listIngredient += "edam";
      price.textContent = prix.toFixed(2) + " DH";
      break;

    case ingredientElement.classList.contains("lettuce"):
      t = t + 25;
      prix+=1.5;
      listIngredient += "lettuce";
      price.textContent = prix.toFixed(2) + " DH";
      break;
    case ingredientElement.classList.contains("mayonnaise"):
      t = t + 19;
      prix+=1;
      listIngredient += "mayonnaise";
      price.textContent = prix.toFixed(2) + " DH";
      break;
    case ingredientElement.classList.contains("Ketchup"):
      t = t + 25;
      prix+=1;
      listIngredient += "ketchup";
      price.textContent = prix.toFixed(2) + " DH";
      break;

    case ingredientElement.classList.contains("onion"):
      if (listIngredient >0) {
        t = t + 3;
      } else {
        t = t + 30;
      }
      
      prix+=1.5;
      listIngredient += "onion";
      price.textContent = prix.toFixed(2) + " DH";
      break;
    case ingredientElement.classList.contains("pickle"):
      if (listIngredient >0) {
        t = t + 3;
      } else {
        t = t + 30;
      }
      prix+=1.5;
      listIngredient += "cucumber";
      price.textContent = prix.toFixed(2) + " DH";
      break;
    
    case ingredientElement.classList.contains("top-bun"):
      t = t +70;
      listIngredient += "top-bun";
      prix+=2;
      price.textContent = prix.toFixed(2) + " DH";
      break;
  }

  ingredientElement.style.top = "-" + t + "px";

  ingredientElement.style.zIndex = z;

  var Burger = document.getElementById("bun bottomBun");

  Burger.insertBefore(ingredientElement, Burger.firstChild);
};


