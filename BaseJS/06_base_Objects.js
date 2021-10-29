const person = {
    name: 'Aleksei',
    age: 18,
    isProgrammer: true,
    languages: ['en','de','ru'],
    'complex key': 'Complex Value',
    ['key_' + (1+3)]: 'Computed Key',
    greet() {
        console.log('greet from person')
    },
    info(){
        //console.log('this:', this)
        console.info('Information about person which name is:', this.name)
    }
}
/*
console.log(person.name)
const ageKey = 'age'
console.log(person[ageKey])
console.log(person['complex key'])
person.greet()
person.age++
person.languages.push('et')
console.log(person)
//person['key_4'] = undefined
delete person['key_4']
console.log(person['key_4']);

//const name = person.name
//const age = person.age
//const languages = person.languages //тоже самое что и
//const {name, age: personAge, languages} = person
//console.log(name, personAge, languages)

//for(let key in person) {
//    if(person.hasOwnProperty(key)){
//    console.log('key:',key)
//    console.log('value:', person[key])
//    }
//}//лушче варинат снизу
//const keys = Object.keys(person)
//console.log(keys)
//keys.forEach((key) =>{console.log('key:',key)
//    console.log('value:', person[key])})
//или еше ниже
Object.keys(person).forEach((key) =>{
    console.log('key:',key)
    console.log('value:', person[key])
})

// Context
//person.info()

const logger = {
    keys(){
        console.log('Object Keys:', Object.keys(this))
    },
    keysAndValues(){
        //'key:' value
        //Object.keys(this).forEach(key => {
        //    console.log(`"${key}": ${this[key]}`)
        //})

        //const self = this решение
        Object.keys(this).forEach(function(key){
            console.log(`"${key}": ${this[key]}`)
        }.bind(this))
    },
    withParams(top=false, between=false, bottom=false) {
        if (top){
            console.log('-------- Start ---------')
        }
        Object.keys(this).forEach((key, index, array) => {
            console.log(`"${key}": ${this[key]}`)
            if(between && index !== array.length - 1){
                console.log('------------------------')
            }
        })
        if(bottom){
            console.log('--------- End ----------')
        }
    }
}
//const bound = logger.keys.bind(logger)//bind берет и привязывает выбранный контекст
//bound()
//logger.keys.call(person)
logger.keysAndValues.call(logger)
logger.keysAndValues.call(person)
logger.keysAndValues.call({a:1, c:2})
logger.withParams.call(person, [true, true, true])

*/
