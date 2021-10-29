/*const person = {
    name: "Aleksei",
    age: 18,
    greet: function(){
        console.log('Greet')
    }
}*/
const person = new Object({
        name: "Aleksei",
        age: 18,
        greet: function() {
        console.log('Greet')
    }
})
Object.prototype.sayHello = function(){
    console.log('Hello!')
}

const lena = Object.create(person)
lena.name = 'Elena'

//const str = 'I am string'
const str = new String('I am string')
