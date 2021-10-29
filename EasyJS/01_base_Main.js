// 1 Переменные
//camelCase
/*var firstName='Aleksei'
const lastName='Stsigartsov' //string
const age=18
let pet= 'cat' //num
const isProgrammer=true //boolean
const _private = 'private'
const $priv = 'some value'
const withNum5 = '5'

name='Leha'
pet='dog'

console.log(name)
console.log(lastName)
console.log(pet)
console.log(age)
console.log(isProgrammer)

// 2 Мутирование
console.log('Name: ' + firstName + ' & age:' + age)
//fatherName = prompt('Введите отчество')
//alert('Name: ' + firstName +' '+ lastName +' '+fatherName +' & age:' + age + 'y.o.')
console.log(age.toString())

// 3 Операторы
const currentYear = 2021
const birthYear = 2003
const age2 = currentYear - birthYear
console.log(age2)

let aa = 1
console.log(aa++)
console.log(aa)
console.log(--aa)

const a = 10
const b = 5
let c = 20

//c=c+a //тоже самое что
//c=c-a //тоже самое что
//c=c*a //тоже самое что
//c=c/a //тоже самое что
c+=a
c-=a
c*=a
c/=a
console.log(c)

// 4 Типы данных
const imTrue = true
const nickname = "aleshalexus"
const fakeAge = 18
let x
null
console.log(typeof imTrue)
console.log(typeof name)
console.log(typeof age)
console.log(typeof x)
console.log(typeof null)
const fullAge = 17
const birthYear2 = 2003
const currentYear2 = 2021
// > < >= <=
const isFullAge = currentYear2 - birthYear2 >= fullAge // 17>=18
console.log(isFullAge)

// 5 Условные операторы
const courseStatus ='pending' // ready, fail, pending
if(courseStatus=== 'ready') {
    console.log('Курс уже готов и его можно проходить')
}else if (courseStatus=== 'pending'){
    console.log('Курс пока находится в процессе разработки')
}else {
    console.log('Ошибка')
}

const isReady = true // or false
//if (isReady){
//    console.log('Success')
//}else{
//    console.log('He Success')
//} тоже самое что, если написать
isReady ? console.log('Success'): console.log('He Success') // Тернарное выражение

//const num1 = 42 //number
//const num2 = '42'//string
//console.log(num1 === num2)

// 6 Булевая логика - логические операторы

// 7 Функции

function calculateAge(year){
    return 2021 - year
}

//const myAge = calculateAge(2003)
//console.log(myAge)
function logInfoAbout(name, year){
    const age = calculateAge(year)

    if(age > 0) {
        console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age + ' лет')
    }else{
        console.log('Impossible')
    }
}
logInfoAbout('Leha', 2003)

// 8 Массивы

const cars = ['Mercedec' , 'Ferrari', 'Ford']
//const cars = new Array ('Mercedes' , 'Ferrari', 'Ford')
console.log(cars.length)
cars[1] = 'Porsche'
cars[cars.length] = 'Mazda'
console.log(cars)

// 9 Циклы
const cars = ['Mercedec' , 'Ferrari', 'Ford']

//for (let i = 0; i<cars.length; i++){
//    const car = cars[i]
//    console.log(car)
//} тоже самое, если писать
for (let car of cars){
    console.log(car)
}

// 10 Объекты
//const person = new Object ({1})
const person = {
    firstName: 'Aleksei',
    lastName: 'Stsigartsov',
    yearBorn: 2003,
    languages: ['Ru', 'En','De'],
    hasWife: false,
    greet: function() {
    console.log('greet from person')
    }
}
console.log(person.firstName, person.lastName)
person.greet()
console.log(person['lastName'])
const key = 'languages'
console.log(person[key])
person.hasWife = true
person.isProgrammer= true
console.log(person) */
