//DOM

//window.alert('1') //закулисами - это глобальная функция, используемая по умолчанию
//window.prompt('ты кто такой')
//window.confirm('Скачать прон?')

// тег===узел===node
//document - это объект с методами, представляющий DOM дерево

const heading1 = document.getElementById('H1')
//const heading2 = document.getElementsByTagName('h2')[0] // устаревший метод
//const heading2 = document.getElementsByClassName('h2class')[0] //тоже не лучший
const heading2 = document.querySelector('#sub-hello') // всегда 1 элемент
// сверху можно было обратиться и по классу и по тэгу : '.h2class' , 'h2'

const heading3 = heading2.nextElementSibling
const h2List = document.querySelectorAll('h2')
console.log(h2List)
const heading4 = h2List[2]
// или в нашем случае const heading4 = h2List[h2List.length-1]

console.log(heading2)
//console.dir(heading) самое полезное что я только видел!
console.dir(heading1.textContent)
const $textForHeading4 = 'Заголовок 4, но на самом деле 2'

setTimeout(()=> {
    addStylesTo(heading1, 'Changed from JavaScript', '#E4E2DE' )
    addStylesTo(heading4,$textForHeading4,'black','1rem')
    heading2.innerHTML = 'Привет'

    heading3.querySelector('a').innerHTML = 'Привет еще раз' // обращаемся к тэгу
    heading3.children[0].style.color = 'white' // обращаемся к ребенку
    heading3.children[0].addEventListener('click', (event) => {
        event.preventDefault() // делаем так чтобы не переходил по ссылке
        console.log('link was really clicked', event.target.getAttribute('href'))
        const urlMe = event.target.getAttribute('href')
        //console.log(event) чтобы смотреть магию
        window.location = urlMe
    })

    heading4.innerHTML = 'Привет еще раз2'
//    heading.textContent = 'Changed from JavaScript'
//    heading.style.color = 'white'
//    heading.style.textAlign = 'center'
//    heading.style.backgroundColor = '#313335'
//    heading.style.padding = '2rem'
//   console.dir(heading.style.color)
}, 1000)

//функция добавления стилей
function addStylesTo(node1, text1, color1 = 'white', fontSize1) {
    //node1.textContent = 'Changed from JavaScript'
    node1.textContent = text1
    node1.style.color = color1
    node1.style.textAlign = 'center'
    node1.style.backgroundColor = '#313335'
    node1.style.padding = '2rem'
    // falsy: '', undefined, null, 0, false
    if (fontSize1) {
        node1.style.fontSize = fontSize1
    }
    console.dir(node1.style.color)
}

// ONCLICK элементы событий
heading1.onmouseover = () => {
    heading1.style.color = '#2b2b2b'
    if (heading1.style.color = '#2b2b2b'){
        heading1.onmouseout = () => {
            heading1.style.color = 'white'
        }
    }
}
heading4.onclick = () => {
    if (heading4.style.color === 'black'){
        heading4.style.color = 'white'
        heading4.style.backgroundColor = '#103335'
    } else {
        heading4.style.color='black'
        heading4.style.backgroundColor = '#313335'
    }
}
heading2.addEventListener('dblclick', () => {
    if (heading2.style.color === 'black'){
        heading2.style.color = 'white'
        heading2.style.backgroundColor = '#103335'
    } else {
        heading2.style.color='black'
        heading2.style.backgroundColor = '#313335'
    }
})
let b = document.querySelector('button')
b.setAttribute('disabled', 'disabled')
setTimeout(()=> {
b.removeAttribute('disabled', 'disabled')},5000)