const dishes = document.querySelector("#dishes");
const menu = document.querySelector("#menu");
const categories = {
  1: "comida",
  2: "bebida",
  3: "postre",
};

const fillDishesList = (dishes) => {
  if (document.querySelector("#dishes-list")) return;

  const dishesList = document.createElement("div");
  dishesList.setAttribute("id", "dishes-list");
  dishesList.classList.add("dishes");

  dishes.forEach((dish) => {
    const dishEl = document.createElement("div");
    const dishInfo = document.createElement("div");
    const dishDetails = document.createElement("div");
    const dishName = document.createElement("p");
    const dishCategory = document.createElement("p");
    const dishPrice = document.createElement("p");
    const qtyInput = document.createElement("input");

    dishName.textContent = dish.nombre;
    dishName.classList.add("name");

    dishCategory.textContent = categories[dish.categoria];
    dishCategory.classList.add("category", `${categories[dish.categoria]}`);

    dishPrice.textContent = `$${dish.precio}`;
    dishPrice.classList.add("price");

    dishDetails.classList.add("details");
    dishDetails.appendChild(dishName);
    dishDetails.appendChild(dishCategory);

    dishInfo.classList.add("info");
    dishInfo.appendChild(dishDetails);
    dishInfo.appendChild(dishPrice);

    qtyInput.classList.add("qty-input");
    qtyInput.type = "number";
    qtyInput.min = 0;
    qtyInput.step = 1;
    qtyInput.value = 0;
    qtyInput.id = `product-${dish.id}`;
    qtyInput.setAttribute("required", true);

    dishEl.classList.add("dish");
    dishEl.appendChild(dishInfo);
    dishEl.appendChild(qtyInput);

    dishesList.appendChild(dishEl);
  });

  menu.appendChild(dishesList);
};

const getDishes = async () => {
  const dishes = await fetch("http://localhost:3000/platillos");
  const dishesList = await dishes.json();
  fillDishesList(dishesList);
};

const displayDishes = (client) => {
  const emptyFields = Object.values(client).some((value) => value === "");

  if (emptyFields) return;

  dishes.classList.remove("hide");

  getDishes();
};

export default displayDishes;
