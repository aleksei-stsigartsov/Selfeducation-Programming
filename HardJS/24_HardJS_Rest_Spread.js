const citiesRussia = ['Moscow', 'Leningrad', 'Kazanj', 'Ekaterinburg']
const citiesEurope = ['Berlin', 'Prague', 'Paris']

const citiesRussiaWithPopulation = {
    Moscow: 20,
    Leningrad: 8,
    Kazan: 5,
    Ekaterinburg: 3
}

const citiesEuropeWithPopulation = {
    Moscow: 26,
    Berlin: 10,
    Prague: 3,
    Paris: 2
}

/// Spread

console.log(...citiesEurope)
console.log(...citiesRussia)

//const allCities = [...citiesRussia, 'Washington', ...citiesEurope]
const allCities = citiesEurope.concat(citiesRussia).concat(citiesEurope).concat('Zalupinsk')
//console.log(allCities)

//console.log({...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation, ...citiesEurope})

//Practice
const numbers = [5, 37, 42, 17]
console.log(Math.max(5, 37, 42, 17))
console.log(Math.max(...numbers))
console.log(Math.max.apply(null, numbers))

const divs = document.querySelectorAll('div')
const nodes = [...divs]
console.log(divs, Array.isArray(divs))
console.log(nodes, Array.isArray(nodes))

//console.log(nodes.map())

/// Rest
function sum(a,b, ...rest){
    return a + b + rest.reduce((a,i) => a+i,0)
}
const numbers1 = [1,3,4,2]
//Spread!
//console.log(sum(...numbers1))

//const a = numbers1[0]
//const b = numbers1[1]
const [a,b, ...other] = numbers1 //деструктризация

console.log(a,b, other)

const person = {
    name:'Max',
    age: 20,
    city: 'Moscow',
    country: 'Russia'
}
const {name, age, ...address} = person
console.log(name, age, address)

//служит это все во благо создания, трансфиромаривая, соединения новых объектов
