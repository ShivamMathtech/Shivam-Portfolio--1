let menu_toggle = document.querySelector("#menubar");
let btnStatu = 0;
let menu_item = document.querySelector(".menu_item");
menu_toggle.addEventListener("click", function () {
  if (btnStatu == 0) {
    menu_toggle.classList.remove("fa-bars");
    menu_toggle.classList.add("fa-x");
    menu_item.classList.add("active");
    btnStatu = 1;
  } else {
    menu_toggle.classList.remove("fa-x");
    menu_toggle.classList.add("fa-bars");
    menu_item.classList.remove("active");
    btnStatu = 0;
  }
});
