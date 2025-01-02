var z = 0;
var t = 0;
var listIngredient = [];
var prix = 0;
const price = document.getElementById("price");
price.textContent = prix.toFixed(2) + " DH";

const addIngredient = (ingredient) => {
  if (listIngredient.length < 13) {
    z = z + 10;

    var ingredientElement = document.createElement("div");

    ingredientElement.className = ingredient + " sub_ingredient";
    ingredientElement.id = ingredient;

    console.log(listIngredient);
    switch (true) {
      case ingredientElement.classList.contains("tomato"):
        t = t + 25;
        prix += 1.5;
        listIngredient.push("tomato");
        price.textContent = prix.toFixed(2) + " DH";
        break;

      case ingredientElement.classList.contains("beef"):
        t = t + 25;
        prix += 20;
        listIngredient.push("beef");
        price.textContent = prix.toFixed(2) + " DH";
        break;

      case ingredientElement.classList.contains("edam"):
        t = t + 25;
        prix += 3;
        listIngredient.push("edam");
        price.textContent = prix.toFixed(2) + " DH";
        break;

      case ingredientElement.classList.contains("lettuce"):
        t = t + 25;
        prix += 1.5;
        listIngredient.push("lettuce");
        price.textContent = prix.toFixed(2) + " DH";
        break;
      case ingredientElement.classList.contains("mayonnaise"):
        t = t + 19;
        prix += 1;
        listIngredient.push("mayonnaise");
        price.textContent = prix.toFixed(2) + " DH";
        break;
      case ingredientElement.classList.contains("Ketchup"):
        t = t + 25;
        prix += 1;
        listIngredient.push("Ketchup");
        price.textContent = prix.toFixed(2) + " DH";
        break;

      case ingredientElement.classList.contains("onion"):
        if (listIngredient != []) {
          t = t + 3;
        } else {
          t = t + 30;
        }

        prix += 1.5;
        listIngredient.push("onion");
        price.textContent = prix.toFixed(2) + " DH";
        break;
      case ingredientElement.classList.contains("pickle"):
        if (listIngredient != []) {
          t = t + 3;
        } else {
          t = t + 30;
        }
        prix += 1.5;
        listIngredient.push("pickle");
        price.textContent = prix.toFixed(2) + " DH";
        break;

      case ingredientElement.classList.contains("top-bun"):
        t = t + 70;
        listIngredient += "top-bun";
        prix += 2;
        price.textContent = prix.toFixed(2) + " DH";
        break;
    }
  } else {
    alert(
      "You can't add more than 13 ingredients or place ingredients on top of the bun"
    );
  }

  ingredientElement.style.top = "-" + t + "px";

  ingredientElement.style.zIndex = z;

  var Burger = document.getElementById("bun bottomBun");

  Burger.insertBefore(ingredientElement, Burger.firstChild);
};
const resetBurger = () => {
  listIngredient = [];
  location.reload();
};

const showAlertWithPrice = () => {
  const nameInput = document.getElementById("name");
  const clientName = nameInput.value;
  alert(
    `Enjoy your meal Mr. or Ms. ${clientName}, the price is ${prix.toFixed(
      2
    )} DH`
  );
};

