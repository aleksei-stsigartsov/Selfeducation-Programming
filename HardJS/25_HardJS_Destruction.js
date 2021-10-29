function calcValues(a,b) {
    return [
        a + b,
        a - b,
        a * b,
        a / b
    ]
}
const [sum, sub = 'NO SUBSTRACTION', mult, ...other] = (calcValues(42,10))
//const sum = result[0]
//const sub = result[1]
//const [sum,sub]= result

//console.log(sum, sub, mult, other)

//Objects
const  person = {
    name: 'Max',
    age: 20,
    address: {
        country: 'Russia',
        city: 'Moscow'
    }
}
//const name = person.name
/*const {name: firstName = 'No name',
    age,
    car = 'No car',
    address: {city: homeTown, country}
} = person
console.log(firstName,age, car, homeTown, country)*/
const {name, ...info} = person
console.log(name, info)

//function logPerson(per) {
    //console.log(per.name + ' ' + per.age)
//}

function logPerson({name: firstName = '111', age}) {
    console.log(firstName + ' ' + age)
}
logPerson(person)