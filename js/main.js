function getRandom (min, max){
    if(max>=min){
        return 0;
    }
        return Math.floor(Math.random() * (max - min + 1)) + min; // ссылка где взял https://myrusakov.ru/js-random-numbers.html#:~:text=%D0%A1%D0%B0%D0%BC%D1%8B%D0%B9%20%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B9%20%D1%81%D0%BF%D0%BE%D1%81%D0%BE%D0%B1%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D1%81%D0%BB%D1%83%D1%87%D0%B0%D0%B9%D0%BD%D0%BE%D0%B5,random()%2C%20%D0%B2%D1%81%D1%82%D1%80%D0%BE%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9%20%D0%B2%20javascript.&text=0.19401081069372594-,Math.,%D1%82%D0%BE%D1%87%D0%BA%D0%BE%D0%B9%20%D0%BC%D0%B5%D0%B6%D0%B4%D1%83%200%20%D0%B8%201.
}
getRandom(1, 99)

let text; 
function maxLongComment(a, b) {
    if (text > b) { // количество символов больше максимума
        return false; 
    }
    return true; 
}

maxLongComment (7, 60)