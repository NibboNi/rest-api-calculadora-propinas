import displayModal from "./modal.js";
import saveOrder from "./client.js";

const newOrderBtn = document.querySelector("#new-order");
const dishes = document.querySelector("#dishes");
const modal = document.querySelector("#modal");
const form = document.querySelector("#form");
const table = document.querySelector("#table");
const time = document.querySelector("#time");

let client = {
  table: "",
  time: "",
  order: [],
};

const init = () => {
  newOrderBtn.addEventListener("click", displayModal);
  modal.addEventListener("click", displayModal);
  form.addEventListener("submit", (e) =>
    saveOrder(client, table.value, time.value, displayModal, e)
  );
};

document.addEventListener("DOMContentLoaded", init);
