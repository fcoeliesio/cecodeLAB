function show_menu() {
  const menu_mobile = document.querySelector('.menu-mobile');
  if (menu_mobile.classList.contains('open')){
    menu_mobile.classList.remove('open');
    document.querySelector('.icon').src = "./assets/icons/icon_menu_open.svg";
  } else {
    menu_mobile.classList.add('open');
    document.querySelector('.icon').src = "./assets/icons/icon_menu_close.svg";
  }
}