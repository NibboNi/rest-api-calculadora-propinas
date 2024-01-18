import displayDishes from "./dishes.js";

const saveOrder = (client, table, time, displayModal, e) => {
  e.preventDefault();

  const emptyFields = [table, time].some((field) => field === "");

  if (emptyFields) return;

  client = { ...client, table, time };
  displayModal(e);
  displayDishes(client);
};

export default saveOrder;
