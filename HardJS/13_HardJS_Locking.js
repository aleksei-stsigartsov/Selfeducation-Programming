
/*function createCalcFunction(n){
    return function (){
        console.log(1000 * n)
    }
}
const calc = createCalcFunction(42)
calc()

function createIncrementor(n){
    return function (num) {
        return n + num
    }
}
const addOne = createIncrementor(1)
const addTen = createIncrementor(10)

console.log(addTen(31))
console.log(addOne(41))
*/
/*
function urlGenerator(domain) {
    return function (url,slesh){
        return `https://${url}.${domain}/${slesh}`
    }
    if (url ==='google'){
        return `https://${url}.${domain}/${slesh}`
    }
}
const comUrl = urlGenerator('com')
const ruUrl = urlGenerator('ru')


console.log(comUrl('google', 'search?q=zopa'))
console.log(comUrl('vk', 'shtshigartsov'))
console.log(ruUrl('mail', ''))
*/
function bind(context, fn){
    return function(...args) {
        fn.apply(context, args)
    }
}
function logPerson(){
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}
const person1 = {name: 'Alex', age:22, job:'Frontend'}

bind(person1, logPerson)()