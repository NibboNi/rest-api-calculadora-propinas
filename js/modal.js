const displayModal = (e) => {
  const { id } = e.target;

  if (id === "modal" || id === "close-modal" || id === "form")
    modal.classList.add("hide");
  else modal.classList.remove("hide");
};

export default displayModal;
