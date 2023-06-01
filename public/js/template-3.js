const images = ['https://images.unsplash.com/photo-1554311825-6f9e499ba167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=409&q=80/500x500', 'https://images.unsplash.com/photo-1685468412851-228199f688d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1104&q=80/500x500', 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80/500x500', 'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80/500x500', 'https://images.unsplash.com/photo-1549558549-415fe4c37b60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1119&q=80/500x500', 'https://images.unsplash.com/photo-1543433787-075b7686f6d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80/500x500']; // Здесь перечислите пути к вашим изображениям
let currentSlide = 0;
const imgElement = document.querySelector('.hero__img');

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = images.length - 1;
  }
  imgElement.src = images[currentSlide];
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= images.length) {
    currentSlide = 0;
  }
  imgElement.src = images[currentSlide];
}

imgElement.src = images[currentSlide]; // Отобразить первое изображение при загрузке страницы



// Функция для отображения модального окна
const showModal = () => {
  const modal = document.getElementById("cookieModal");
  modal.style.display = "block";
};

// Задержка в 5 секунд перед отображением модального окна
setTimeout(showModal, 2000);

// Обработчик события для кнопки закрытия
const closeButton = document.getElementById("closeButton");
closeButton.addEventListener("click", () => {
  const modal = document.getElementById("cookieModal");
  modal.style.display = "none";
});