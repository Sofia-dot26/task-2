// 1.Удалить из массива дубликаты : const arr = [1, 2, 3, 5, 1, 6, 2, 5, 6, 7]

let arr = [1, 2, 3, 5, 1, 6, 2, 5, 6, 7];
let arr__unique = [...new Set(arr)];

console.log('Задание №1')
console.log('Исходный массив:',...arr);
console.log('Массив с уникальными значениями:', ...arr__unique)

// 2. Объеденить 2 объекта в один: const obj1 = { id: 1, name: 'userName' } И obj2 = {id: 2, pass: 'qwerty'}

let obj1 = {
    id:1,
    name:'userName'
}

let obj2 = {
    id:1,
    pass:'qwerty'
}

let obj = {
    ...obj1,
    ...obj2
}
console.log('Задание №2')
console.log(obj1,obj2)
console.log(obj)

// 3. Сократите объявление функции в одну строку, используя новый синтаксис ES6

const add = (x,y)=>x+y

console.log('Задание №3')
console.log(add(4,5))

// 4. Напишите функцию, с помощью которой можно будет выполнять различные действия с задержкой


const sleep = ms =>{
   return new Promise (resolve=> setTimeout(resolve,ms))
}

sleep(5000).then(()=>{
    console.log('Задание №4')
    console.log('Выполнилось с задержкой 5 секунд')
})