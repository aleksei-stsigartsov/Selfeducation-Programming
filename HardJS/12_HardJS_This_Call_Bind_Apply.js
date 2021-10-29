function hello() {
    console.log('Hello', this)
}

const person = {
    name: 'Vladilen',
    age: 25,
    status: true,
    sayHello: hello,
    sayHelloWindow: hello.bind(this),
    sayHelloDocument: hello.bind(document),
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
       // console.log(`is ${this.status}`)
        console.log(`Job is ${job}`)
        console.log(`Phone num is ${phone}`)
        console.groupEnd()
    }
}
const lena = {
    name: 'Elena',
    age: 23
}
//person.logInfo.bind(lena, 'Frontend', '+372-1488-228')() // возвращает новую функцию, когда нужно будет
//person.logInfo.call(lena, 'Frontend', '+372-1488-229') // сразу вызывает функцию
// методы call и bind отличаются лишь только способом передачи параметров
//person.logInfo.apply(lena, ['Frontend', '+372-1488-229'])

//=======================================================================

const array1 = [1,2,3,4,5]
/*
function multBy(arr, n){
    return arr.map(function (i){
        return i * n
    })
}
console.log(multBy(array1, 5))
*/
Array.prototype.multBy = function(n){
    console.log('original', this)
    return this.map(function (i){
        return i * n
    })
}
console.log(array1.multBy(2))
console.log([5,6,23].multBy(5), 'ага')