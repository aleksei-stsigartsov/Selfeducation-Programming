const person = Object.create(
    {
    calculateAge(){
        console.log('Age:', new Date().getFullYear() - this.birthYear)
    }

    },{
    name: {
        value: 'Aleksei',
        enumerable: true,
        writable: true,
        configurable: true
    },
    birthYear: {
        value: 2003,
        enumerable: false,
        writable: false,
        configurable: false
    },
    age: {
        get(){
            return new Date().getFullYear() - this.birthYear
        },
        set(value) {
            document.body.style.backgroundColor = 'white'
            console.log('Set age', value)
        }
    }
})
console.log(person)

person.name = 'Maxim'

for(let key in person){
    if (person.hasOwnProperty(key)){
        console.log('Key:', key, person[key])
    }
}