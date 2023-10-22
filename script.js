// modal

const btnsElement = document.querySelectorAll(".btn");
const modalElement = document.querySelector(".modal");
const overlayElement = document.querySelector(".overlay");
const closeBtnElement = document.querySelector(".close-btn");

btnsElement.forEach((btn) => {
    btn.addEventListener("click", () => {
        //modalElement.style.opacity = 1;
        //modalElement.style.zIndex = 999;
        modalElement.classList.remove("hide-modal");
        overlayElement.classList.remove("hide-modal");
        modalElement.classList.add("open-modal");
    });
});

closeBtnElement.addEventListener("click", () => {
  //modalElement.style.opacity = 0;
  //modalElement.style.zIndex = -1;
    modalElement.classList.remove("open-modal");
    modalElement.classList.add("hide-modal");
    overlayElement.classList.add("hide-modal");
});

modalElement.addEventListener('click', () => {
    modalElement.classList.remove("open-modal");
    modalElement.classList.add("hide-modal");
})

