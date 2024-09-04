let cartItems = []; // Массив товаров в корзине
function addToCart(productName, price) { // Функция добавления товара в коризну
    var item = { // Объект товар: имя, стоимость, количество
        name: productName,
        price: price, 
        amount: 1
    };
    let check = false; // Флажок
    for (let it of cartItems){ // Для каждого товара
        if (it.name == productName){ // Если название продукта совпадает
            it.price += price; // Увеличивается общая стоимость
            it.amount += 1; // Увеличивается количество
            check = true; // Флажок принимает значение true
            break;
        }
    }
    if (!check) cartItems.push(item); // Если флажок истинен, в массив добавляется новый товар
    updateCart();} // Обновление корзины
function removeFromCart(index) { // Функция удаления товара из корзины
    if (cartItems[index].amount == 1) // Если количество равно 1
        cartItems.splice(index, 1); // Удаляем элемент из массива
    else { // Иначе
        cartItems[index].amount -= 1; // Уменьшаем на 1 количество товаров
        cartItems[index].price *= cartItems[index].amount / (cartItems[index].amount + 1); // Уменьшение общей стоимости
    }
    updateCart();} // Обновление корзины
function clearCart() { // Функция очистки корзины
    cartItems = []; // Присвоение пустого массива
    updateCart();} // Обновление корзины
function updateCart() { // Функция обновления корзины
    let cartList = document.getElementById('cartItems'); // Получение элемента cartItems
    cartList.innerHTML = ''; // Делаем элемент пустым
    cartItems.forEach((item, index) => { // Для каждого элемента внутри cartItems
        let li = document.createElement('li'); // Создаем элемент li
        li.innerHTML = `${item.name} - ${item.price}₽ - ${item.amount} штук <button onclick="removeFromCart(${index})">Удалить</button>`; // Выводим информацию о товаре
        cartList.appendChild(li); // Добавляем элемент в cartList
    });}
    