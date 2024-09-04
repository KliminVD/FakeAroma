let liquidLevel = 0; // Уровень парфюма в текущий момент
let Interval = 0; // Временной интервал
let elems = []; // Массив ингридиентов
let perfumes = [ // Массив парфюмов
    {name: "Baraonda Nasomatto", ingr: ["Жасмин", "Бергамот", "Табак"]},
    {name: "Black Afgano Nasomatto", ingr: ["Ваниль", "Черный перец", "Табак"]},
    {name: "Duro Nasomatto", ingr: ["Жасмин", "Ваниль", "Бергамот"]},
    {name: "Narcotic Venus Nasomatto", ingr: ["Бергамот", "Черный перец", "Табак"]},
    {name: "Fantomas Nasomatto", ingr: ["Черный перец", "Бергамот", "Жасмин"]},
    {name: "14Hour Dream Jusbox", ingr: ["Черный перец", "Табак", "Жасмин"]},
    {name: "Black Powder Jusbox", ingr: ["Табак", "Бергамот", "Ваниль"]},
    {name: "Good Morning Jusbox", ingr: ["Жасмин", "Ваниль", "Черный перец"]},
    {name: "Night Flow Jusbox", ingr: ["Жасмин", "Ваниль", "Табак"]},
    {name: "Carioca Heart Jusbox", ingr: ["Ваниль", "Бергамот", "Черный перец"]},];
function addIngredient() { // Функция добавления элемента в парфюм
    const ingredientSelect = document.getElementById('ingredient-select'); // Получаем выбранный элемент
    if (liquidLevel < 99) { // Если флакон не заполнен до конца
        liquidLevel += 33.33; // Добавляем высоту
        updateLiquidLevel(); // Обновление уровня
        elems.push(document.getElementById("ingredient-select").value); // Добавление элемента в массив
        if (liquidLevel == 99.99){ // Если флакон заполнен
            document.getElementById("liquid-level").style.backgroundColor = "red"; // Жидкость становится красной
            for (parf of perfumes){ // Если состав совпадает с одним из парфюмов
                if(parf.ingr.indexOf(elems[0])!=-1 &&parf.ingr.indexOf(elems[1])!=-1 &&parf.ingr.indexOf(elems[2])!=-1 &&elems[0]!=elems[1] &&elems[0]!=elems[2] &&elems[1]!=elems[2])
                {   
                    document.getElementById("congratulations").innerHTML = `Это ${parf.name}`; // Выводится название парфюма
                    break;
                }
            }
            if (document.getElementById("congratulations").innerHTML == "Добавь 3 элемента, чтобы изготовить парфюм!") // Если изменений не было
                document.getElementById("congratulations").innerHTML = `Состав: ${elems}`; // Выводится состав
            Interval = setInterval(() => { // Через три секунды все приходит в начальное состояние
                document.getElementById("congratulations").innerHTML = "Добавь 3 элемента, чтобы изготовить парфюм!";
                document.getElementById("liquid-level").style.backgroundColor = "#6495ED";
            }, 3000);
        }}}

function removeIngredient() { // Функция удаления элемента из парфюма
    clearInterval(Interval); // Обнуление интервала
    if (liquidLevel > 0) { // Если во флаконе есть жидкость
        liquidLevel -= 33.33; // Уменьшаем уровень
        elems.pop(); // Удаляем элемент из массива
        updateLiquidLevel(); // Обновление уровня
    }
    document.getElementById("congratulations").innerHTML = "Добавь 3 элемента, чтобы изготовить парфюм!"; // Принудительный возврат в начальное состояние
    document.getElementById("liquid-level").style.backgroundColor = "#6495ED";
}

function updateLiquidLevel() { // Функция обновления уровня жидкости
    const liquidElement = document.getElementById('liquid-level'); // Получаем текущий уровень
    liquidElement.style.height = `${liquidLevel}%`; // Обновление свойства высоты блока
}