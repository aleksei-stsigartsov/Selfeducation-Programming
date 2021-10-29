console.log('Request data')
/*setTimeout(() => {
    console.log('Prepairing data...')
    const backendData = {
        server: 'aws',
        port: 2000,
        status: 'working'
    }
    setTimeout(()=> {
        console.log('Data received', backendData)
    },2000)
},2000)*/

const p = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Prepairing data...')
        const backendData = {
            server: 'aws',
            port: 2000,
            status: 'working'
        }
        resolve(backendData)
    }, 2000)
})
/*
p.then(function(data) {
//    console.log('Promise resolved', data)
     return  new Promise(function(resolve, reject){
     setTimeout(function(){
         data.modified= true
         resolve(data)
     },3000)
    }).then(clientData => {
        console.log('Data received', clientData)
         clientData.fromPromise = true
         return clientData
     }).then(data => {
         console.log('Modified', data)
     }).catch(err => console.error ('Error:',err))
         .finally(function(){ console.log('Finally')})

    //p2.then(clientData => {
    //    console.log('Data received', clientData)
    //})
})*/

const sleep = function(ms){
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            resolve()
        }, ms)
    })
}
//sleep(2000).then(function(){console.log('After 2 seconds')})
//sleep(3000).then(function(){console.log('After 3 seconds')})

Promise.all([sleep(2000), sleep(5000)])
.then(function(){
    console.log('All promises')
})

Promise.race([sleep(2000), sleep(5000)])
    .then(function(){
        console.log('Race promises')
    })