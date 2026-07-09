// Покраска первой карточки

const productCard = document.querySelector('.card');
const btnColor = document.querySelector('[data-action="color"]');

btnColor.addEventListener('click', () => {
    console.log('Кнопка была нажата');
    productCard.style.backgroundColor = '#d59fca'
});


// Покраска всех карточек

const productCards = document.querySelectorAll('.card');
const btnColorAll = document.querySelector('[data-action="color-all"]');

btnColorAll.addEventListener('click', () => {
    productCards.forEach((item) => item.style.backgroundColor = '#8cd7df')
});


// Открыть Google

const btnOpenGoogle = document.querySelector('[data-action="google"]');
btnOpenGoogle.addEventListener('click', openGoogle);

function openGoogle() {
    const answer = confirm('Вы действительно хотите открыть Google?');

    if (answer) {
        window.open('https://google.com')
    } else {
        return
    }
}


// Вывод контента заголовка в консоль при наведении

const productsTitle = document.querySelector('.products__title');

getTitle.addEventListener('mouseenter', (event) => {
    console.log(event.target.textContent);
});

const buttonCustomizable = document.querySelector('[data-action="customizable"]');

buttonCustomizable.addEventListener('click', () => {
    console.log('Поменялся цвет')
    buttonCustomizable.classList.toggle('btn--purple');
});