let fruits = [
    {id:1, title:'Apples', price: 20, img: 'https://m.dom-eda.com/uploads/images/catalog/item/86df51de21/c25c94fe96_1000.jpg'},
    {id:2, title:'Oranges', price: 30, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5VDxBUcTNSMjws-BIz2g8lEWrE4uMEKkgulT-W7FDQkMvJRP_e8tXjS1I2rk4IppotY&usqp=CAU'},
    {id:3, title:'Mangos', price: 40, img: 'data:image/jpeg;base64,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'},
]

const toHTML = fruit => `
        <div class="col-4">
            <div class="card" style="width: 18rem;">
                <img style="height: 250px" src="${fruit.img}" class="card-img-top" alt="${fruit.title}">
                <div class="card-body">
                    <h5 class="card-title">${fruit.title}</h5>
                    <a href="#" class="btn btn-primary" data-id="${fruit.id}" data-btn="price">Show price</a>
                    <a href="#" class="btn btn-danger" data-id="${fruit.id}" data-btn="remove">Delete</a>
                </div>
            </div>
        </div>
`


function render(){
    const html = fruits.map(toHTML).join('')
    document.querySelector('#fruits').innerHTML = html
}
render()

/*const modal = $.modal({
    title: 'Product price',
    closable: true,
    content:`
    <h4>Modal is working</h4>
    <p>Lorem ipsum dolor sit.</p>
    `,
    width: '400px',
    footerButtons: [
        {text: 'OK', type: 'success', handler(){
            console.log('Primary btn clicked')
            priceModal.close()
        }},
        {text: 'Cancel', type: 'danger', handler(){
            console.log('Danger btn clicked')
            modal.close()
        }}
    ]
})*/
const priceModal = $.modal({
    title: 'Product price',
    closable: true,
    content:`
    <h4></h4>
    `,
    width: '400px',
    footerButtons: [
        {text: 'Close', type: 'danger', handler(){
                console.log('Primary btn clicked')
                priceModal.close()
        }}
    ]
})

/*const confirmModal = $.modal({
    title: 'Are you sure?',
    closable: true,
    content:`
    `,
    width: '400px',

    footerButtons: [
        {text: 'Delete', type: 'danger', handler(){
                console.log('Primary btn clicked')
                confirmModal.close()
        }},
        {text: 'Cancel', type: 'secondary', handler(){
                console.log('Primary btn clicked')
                confirmModal.close()
        }}
    ]
})*/

document.addEventListener('click', event => {
    event.preventDefault()
    const btnType = event.target.dataset.btn
    const id = +event.target.dataset.id
    const fruit = fruits.find(f => f.id === id)
    if (btnType === 'price') {
        priceModal.setContent(`
        <p>Price of ${fruit.title}: <strong>${fruit.price} roubles</strong>  per one</p>`)
        priceModal.open()
        console.log(id, fruit)
    }
    else if (btnType === 'remove') {
        $.confirm({
            title: 'Are you sure?',
            content: `<p>You will delete the fruit: <strong>${fruit.title}</strong></p>`
        }).then( () => {
            console.log('Remove')
            fruits = fruits.filter(f => f.id !== id)
            render()
        }).catch( () =>{
            console.log('Cancel')
        })
        /*confirmModal.setContent(`
        <p>You will remove the fruit: <strong>${fruit.title}</strong></p>
        `)
        confirmModal.open()*/
    }
})
