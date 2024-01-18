const newOrderBtn = document.querySelector("#new-order");
const modal = document.querySelector("#modal");

const displayModal = (e) => {
  const { id } = e.target;

  if (id === "modal" || id === "close-modal") modal.classList.add("hide");
  else modal.classList.remove("hide");
};

newOrderBtn.addEventListener("click", displayModal);
modal.addEventListener("click", displayModal);
