const buttonSearch = document.querySelector("#page-home main a");
const modal = document.querySelector("#modal");
const modalInput = document.querySelector("#modal input");
const close = document.querySelector("#modal .header a");

buttonSearch.addEventListener("click", () => {
    modal.classList.remove("hide");    
    modalInput.focus();
});

//Fechar o modal pela tecla ESC do teclado
modal.addEventListener("keyup", (e) => {    
    if(e.keyCode == 27) modal.classList.add("hide");
});

close.addEventListener("click", () => modal.classList.add("hide"));