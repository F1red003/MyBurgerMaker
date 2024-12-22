var z = 0;
var t = 0;
var listIngredient=[];

const addIngredient = (ingredient) => {
  z = z + 10;

  var ingredientElement = document.createElement("div");

  ingredientElement.className = ingredient + " sub_ingredient";
  ingredientElement.id = ingredient;

  switch (true) {
    case ingredientElement.classList.contains("tomato"):
      t = t + 25;
      listIngredient+="tamato";
      break;
    
    case ingredientElement.classList.contains("beef"):
      t = t + 25;
      listIngredient+="tamato";
      break;

    case ingredientElement.classList.contains("edam"):
      t = t + 25;
      listIngredient+="edam";
      break;

    case ingredientElement.classList.contains("lettuce"):
      t = t + 25;
      listIngredient+="lettuce";
      break;
    case ingredientElement.classList.contains("mayonnaise"):
      t = t + 19;
      listIngredient+="mayonnaise";
      break;
    case ingredientElement.classList.contains("Ketchup"):
      t = t + 25;
      listIngredient+="ketchup";
      break;

    case ingredientElement.classList.contains("onion"):
        if(listIngredient!=[]){
            t=t+3;
        }else{
            t=t+30;
        }
      
      listIngredient+="onion";
      break;
    case ingredientElement.classList.contains("pickle"):
        if(listIngredient!=[]){
            t=t+3;
        }else{
            t=t+30;
        }
      listIngredient+="cucumber";
      console.log(listIngredient);
      break;
    case ingredientElement.classList.contains("topbread"):
      t = t + 17;
      break;
  }

  ingredientElement.style.top = "-" + t + "px";

  ingredientElement.style.zIndex = z;

  var Burger = document.getElementById("bun bottomBun");

  Burger.insertBefore(ingredientElement, Burger.firstChild);
};
