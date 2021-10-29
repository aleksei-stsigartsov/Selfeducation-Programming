//Number
/*
const num = 42
const float = 42.42
const pow = 2e3
console.log('MAX_SAFE_INTEGER',Number.MAX_SAFE_INTEGER)
console.log('Math.pow 53',Math.pow(2,53) - 1)
console.log('MAX_SAFE_INTEGER',Number.MIN_SAFE_INTEGER)
console.log('MAX_VALUE', Number.MAX_VALUE)
console.log('MIN_VALUE', Number.MIN_VALUE)
console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
console.log('2/0',2/0)
console.log('Nan',Number.NaN) // Not a number
const weird = 2 / undefined
console.log('2/undefined', Number.isNaN(weird))
console.log('42 is NaN', Number.isNaN(42))
console.log(Number.isFinite(Infinity))
console.log(Number.isFinite(42))

//Конвертирование

const stringInt = '40'
const stringFloat = '40.42'
console.log(Number.parseInt(stringInt) + 2) //метод 1
console.log(Number(stringInt) + 2) //метод 2
console.log(+stringInt + 2)//метод 3

console.log(parseFloat(stringFloat) + 2)
console.log(+stringFloat + 2)

console.log(0.4 + 0.2 ) //0.6000000000000001
console.log(+(0.4 + 0.2).toFixed(1)) //нормализирует результат
console.log(parseFloat(0.4 + 0.2).toFixed(1) ) // ошибка из-за скобок
console.log(typeof parseFloat(0.4 + 0.2).toFixed(1) ) // ошибка из-за скобок
console.log(typeof parseFloat((0.4 + 0.2).toFixed(1)) )
console.log(typeof +(0.4 + 0.2).toFixed(1) )

// BigInt

console.log(typeof 9007199254740991n)
console.log(9007199254740991n - 19007199254740992n) // how to use bigint
//console.log(9007199254740991.2321n ) //error
//console.log(10n - 4)//error разные типы данных
console.log(parseInt(10n)-4)
console.log(10n - BigInt(4))
console.log(5n / 2n) // ответ: 2n bigint округляет

// Math
console.log(Math.E)
console.log(Math.PI)

console.log(Math.sqrt(25)) // высчитывает корень
console.log(Math.pow(5,3)) // возводит в степень
console.log(Math.abs(-42)) // выводит модуль числа
console.log(Math.max(42,12,31,4242)) //  вычисляет большее число из списка
console.log(Math.min(42,12,31,4242)) // вычисляет меньшее число из списка
console.log(Math.floor(4.99)) // округляет в меньшую сторону
console.log(Math.ceil(4.01)) // округляет в большую сторону
console.log(Math.round(4.49999)) // округляет по человечески
console.log(Math.trunc(4.9)) // избавляется от дробных знаков и возвращает 1 целое число
console.log(Math.random()) // выводит рандомное значение

// 4 Example
 function getRandomBetween(min,max) {
    return Math.floor(Math.random() * (max-min) + min)
 }
console.log(getRandomBetween(10, 32));*/
//Человеческая функция рандома