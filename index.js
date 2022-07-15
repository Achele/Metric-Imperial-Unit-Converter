/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let num = 0
let convertNum = document.getElementById("convert-num")
const convertBtn = document.getElementById("convert-btn")
const lengthDisplay = document.getElementById("length-display")
const volumeDisplay = document.getElementById("volume-display")
const massDisplay = document.getElementById("mass-display")

convertBtn.addEventListener("click", function() {
    // console.log(num)
    num = convertNum.value
    length()
    volume()
    mass()
    // console.log("ready for conversion")
})

// for converted Length
function length() {
    let toFeet = (num * 3.281).toFixed(3)
    let toMeter = (num / 3.281).toFixed(3)
    lengthDisplay.textContent = `${num} meters = ${toFeet} feet | ${num} feet = ${toMeter} meters` 
}
length()

// for converted volume
function volume() {
    toGallon = (num * 0.264).toFixed(3)
    toLiter = (num / 0.264).toFixed(3)
    volumeDisplay.textContent = `${num} liters = ${toGallon} gallons | ${num} gallon = ${toLiter} liters`
}
volume()


function mass() {
    toPound = (num * 0.264).toFixed(3)
    toKilo = (num / 0.264).toFixed(3)
    massDisplay.textContent = `${num} kilos = ${toPound} pounds | ${num} pounds = ${toKilo} kilos`
}
mass()