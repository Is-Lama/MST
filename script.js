const header = document.querySelector('.header');

// Функция для добавления класса при скролле
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) { // Если страница пролистана хотя бы немного вниз
    header.classList.add('scrolled-header'); // Добавляем класс, меняющий фон
  } else {
    header.classList.remove('scrolled-header'); // Убираем класс, возвращая прозрачность
  }
});