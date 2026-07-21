function showWeather(city, temperature) {
    console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}

showWeather('Мекка', 47);
showWeather('Медина', 45);
showWeather('Иерусалим', 34);

const LIGHT_SPEED = 299792458;

function speedTest(speed) {
    if (speed > LIGHT_SPEED) {
        console.log("Сверхсветовая скорость");
    } else if (speed < LIGHT_SPEED) {
        console.log("Субсветовая скорость");
    } else {
        console.log("Скорость света");
    }
}

speedTest(999999999);
speedTest(99999999);
speedTest(299792458);


const productName = "Ящик со сладостями";
const productPrice = 99;

function buyProduct(budget) {
    if (budget >= productPrice) {
        console.log(`${productName} приобретён. Спасибо за покупку!`)
    } else {
        const shortage = productPrice - budget;
        console.log(`Вам не хватает ${shortage}$, пополните баланс.`)
    }
}

buyProduct(98);
buyProduct(99);
buyProduct(100);


const myQuran = "Коран";
const pagesQuantity = 600;
const chaptersQuantity = 30;

function readQuran(pages) {
    if (pages > pagesQuantity) {
        console.log('Ошибка! В Коране всего 600 страниц.');
    } else if (pages === pagesQuantity) {
        console.log(`Вы закончили чтение. Не забудьте сделать дуа!`);
    } else {
        const remainingPages = pagesQuantity - pages;
        const remainingChapters = Math.floor(remainingPages/20);
        const remainingPagesInChapter = remainingPages % 20;
        console.log(`У вас осталось ${remainingChapters} джузов и ${remainingPagesInChapter} страниц`);
    }
}

readQuran (601);
readQuran (600);
readQuran (450);
readQuran (297);