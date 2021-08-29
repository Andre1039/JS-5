alert('Задание 1');



const users = {

}

for (let i = 1; i <= 3; i++) {
    var username = prompt('Введите имя пользователя ' + i);
    var age = prompt('Введите возраст пользователя ' + i);

    const id = {
        Имя: username,
        Возраст: age
    }

    console.log('Пользователь ' + i);
    for(let key in id){
        console.log(key + ' ' + id[key]);
    }

    users[id + i] = {
        Имя: username,
        Возраст: age
    }
}

console.log(users);



// alert('Задание 2')


// console.log(receipt());

// for(var key in receipt()){
//     console.log(key);
//     console.log(receipt()[key]) ;
//     for(const newKey in receipt()[key]){  
//         console.log( receipt()[key][newKey]); 
        
//     }
//     var list = key + list
// }
// console.log('Вы заказали: ' + list);