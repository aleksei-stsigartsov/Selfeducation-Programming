const cars =['Mazda', 'Ford', 'BMW', 'Mercedes']
const people = [
    {name: 'Vladilen', budget:4200},
    {name: 'Victoria', budget:3500},
    {name: 'Antonov', budget:1700},
]
const fib = [1, 1, 2, 3, 5, 8, 13]
/*
// если функция вызывается в последствии объекта, то это называется метод
//Function
function addItemToEnd() {

}
//Method
cars.push('Renault') //складывает-добавляет элемент в конец массива
cars.unshift('Volga') //складывает-добавляет элемент в начало массива
console.log(cars)
const firstItem = cars.shift()
const lastItem = cars.pop()
console.log(firstItem)
console.log(lastItem)
console.log(cars)
console.log(cars.reverse())
//const indexC = (cars.indexOf('BMW'))
//console.log(cars[indexC])
//cars[indexC] = 'Porsche'
//console.log(cars)
//console.log(cars[indexC])
let findedPerson
for(const person of people) {
    console.log(person)
    if(person.budget===4200){
        findedPerson = person
    }
}
console.log(findedPerson)
//const indexC = people.findIndex(function(person){
//    return person.budget === 4200
//})
//const person = people.find(function(person){
//    return person.budget === 3500
//})//ПОИСК ПО МАССИВУ
const person = people.find(person => person.budget === 4200)
console.log(person)
console.log(cars.includes('Mazda'))

const upperCaseCars=cars.map(car => {
    return car.toUpperCase()
})
console.log(upperCaseCars)

const pow2 = num => num**2
//const pow2Fib = fib.map(pow2).map(Math.sqrt) // передаём функцию
const pow2Fib = fib.map(pow2)
const filteredNumbers = pow2Fib.filter(num => num > 20)
console.log(filteredNumbers)
console.log(pow2Fib)

// неправильно с точки высшего программирования
const allBudget = people.reduce((acc, person)=>{
    if (person.budget > 2000) {
        acc += person.budget
    }
    return acc
}, 0)
// а ниже правильно
const allBudget = people
    .filter(person => person.budget > 2000)
    .reduce((acc, person) =>{
        acc+= person.budget
        return acc
    }, 0)
console.log(allBudget)

const displayItems = allItems
    .filter(item => item.name.contains('phone')) // суть фильтра поиска на сайте
    //.filter(item => item.name.indexOf('phone') !== -1) // суть фильтра поиска на сайте
*/

//Задача 1 - Переворот слова наоборот
//const text = 'Богдан Пузиков'
//const reverseText = text.split('').reverse().join('')
//console.log(reverseText)