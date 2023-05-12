// Найти нужные узлы
const popupButtom = document.querySelector(".popup-menu__button");
const popupWrapper = document.querySelector(".popup-menu");
const popupMenu = document.querySelector(".popup-menu__list");

// Выполнить функцию клика по кнопке
popupButtom.addEventListener("click", handleMenu);

// Функция, которая скрывает и показывает поп-ап
function handleMenu() {
  popupMenu.classList.toggle("hide-popup");
}
//Функция при клике на любое место экрана
document.addEventListener("click", hidePopup);

function hidePopup(el) {
  // Проверяем, есть ли внутри того, по чему кликнули поп-ап меню или кнопка
  let targetInside = popupWrapper.contains(el.target);
  // Если нет, прячем меню
  if (!targetInside) {
    popupMenu.classList.add("hide-popup");
  } else {
    return;
  }
}
