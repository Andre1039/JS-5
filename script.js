// alert('Задание 1');



// const users = {

// }

// for (let i = 1; i <= 10; i++) {
//     var username = prompt('Введите имя пользователя ' + i);
//     var age = prompt('Введите возраст пользователя ' + i);

//     const id = {
//         Имя: username,
//         Возраст: age
//     }

//     console.log('Пользователь ' + i);
//     for(let key in id){
//         console.log(key + ' ' + id[key]);
//     }

//     users[id + i] = {
//         Имя: username,
//         Возраст: age
//     }
// }

// console.log(users);



// alert('Задание 2')


console.log(receipt());

// for(var key in receipt()){
//     console.log(key);
//     // console.log(receipt()[key]) ;
//     for(const newKey in receipt()[key]){  
//         console.log(newKey + ' ' +  receipt()[key][newKey]); 
//     }
//     var info = info + receipt()[key][info];
//     var list = key + ' ' + list
// }
// console.log('Вы заказали: ' + list);


// for(const key in receipt()){
//     for(const newKey in receipt()[key]){
//         var info = receipt()[key][newKey];
//         var price = receipt()[key][newKey];
//     }
//     var list = list + ' ' + key + info +  ',';
//     var mainprice = mainprice + price;
// }

// mainprice = mainprice + 9000;

// console.log('Вы заказали: ' +  list + ' общая стоимость: ' + mainprice + '. С доставкой [9000]');