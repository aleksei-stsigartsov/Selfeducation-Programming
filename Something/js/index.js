let lightOn = document.getElementById('btnLightOn')
let nightShiftOn = document.getElementById('nightShiftMode')
let lightLevel = document.getElementById('lightLevel')
let timeStart = document.getElementById('tS')
let timeEnd = document.getElementById('tE')
let lightnessLevel = document.getElementById("lightnessLevel")
let lightCount = 0
let nightCount = 0
function applyLightStatement(){
    if(lightCount % 2 == 0) {
            lightOn.setAttribute("checked", "true")
            lightLevel.removeAttribute('disabled')
            lightCount++
        } else if(lightCount % 2 == 1){
            lightLevel.setAttribute('disabled', 'true')
            lightCount++
    }
}
function applyNightStatement(){
    console.log(nightCount)
    if(nightCount % 2 == 0) {
        nightShiftOn.setAttribute('checked', 'true')
        timeStart.removeAttribute('disabled')
        timeEnd.removeAttribute('disabled')
        nightCount++
    } else if(nightCount % 2 == 1){
        timeStart.setAttribute('disabled', 'true')
        timeEnd.setAttribute('disabled', 'true')
        nightCount++
    }
}

function changeLightLevel(){
    lightnessLevel.value=lightLevel.value + '%';
}

