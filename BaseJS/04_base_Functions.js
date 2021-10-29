// Функции

// Function Declaration 1.1
//избегает ошибки, может обращаться к переменной, даже если она создана первее чем функция
greet('Zopa')
function greet(name){
    console.log('Hello! -',name)
}
// 1.2 Function Expression
const greet2 = function greet2(name){
    console.log('Hello2! -',name)
}
greet2('Zopa')

console.log(typeof(greet))
console.dir(greet)

// 2 Анонимные функции
let counter = 0
const interval = setInterval(function (){ // or set Timeout
    if(counter ===5){
        clearInterval(interval) // or clear Timeout
    }else{
    console.log(++counter)}
}, 1000)

// 3 Стрелочные функции
const arrow = (name) => {
    console.log('Hello - ', name)
}
arrow('Leha1')
//тоже самое что
const arrow2 = (name) =>  console.log('Hello - ', name)
arrow2('Leha2')
// функция возведение числа во 2 степень
const pow2 = num => num ** 2
console.log(pow2(5))

// 4 Параметры по умолчанию

const sum = (a= 40,b= a * 2) => a+b
console.log(sum(41,32))

function sumAll(...all){
    console.log(all)
    let result = 0
    for(let num of all){
        result+=num
    }
    return result
}
const res = sumAll(1,2,23)
console.log(res)

// 5 Замыкания
function createMember(name){
    return function(lastName) {
        console.log(name +' '+lastName)
    }
}
const logWithLastName = createMember('Vladilen')
console.log(logWithLastName('Minin'))
console.log(logWithLastName('Stsigartsov'))
