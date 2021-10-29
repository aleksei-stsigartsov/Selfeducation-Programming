console.log('Start')
console.log('Start2')

function timeout2sec(){
    console.log('timeout2sec')
}

setTimeout(function(){
    console.log('Inside timeout, after 1 second')
}, 1000)

setTimeout(timeout2sec, 2000)

console.log('End')
