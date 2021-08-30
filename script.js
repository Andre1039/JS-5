// alert('Задание 1');



// const users = {}

// for (let i = 1; i <= 10; i++) {
//     let name = prompt('Введите имя');
//     let age = prompt('Введите возраст');

//     users[i] = {
//         name: name,
//         age: age
//     }
// }

// for(const key in users){
//     console.log(`Пользователь ${key}`);
//     for(const newKey in users[key]){
//         console.log(newKey == 'name' ? `Ваше имя ${users[key][newKey]}` : `Ваш возраст ${users[key][newKey]}`);
//     }
// }

// console.log(users);



// alert('Задание 2')


let recept = receipt();

// console.log(recept);

let menu = 'Ваш заказ ';

let dostavka = 9000;

for(let key in recept){
    menu = menu + `${key} `
    for(let newKey in recept[key]) {
        menu = newKey == 'info' ? menu + `${recept[key][newKey]} ` : menu + ''
        dostavka = newKey == 'price' ? dostavka + recept[key][newKey] : dostavka
    }
}

console.log(`${menu} общая стоимость заказа: ${dostavka} это с учетом доставки 9000`);