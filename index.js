let homeEl = document.getElementById("home")
console.log(homeEl)
let guestEl= document.getElementById("guest")
console.log(guestEl)
let count=0
function hPlus1() {
    count += 1
    homeEl.textContent = count
}
function hPlus2() {
    count += 2
    homeEl.textContent = count
}
function hPlus3() {
    count += 3
    homeEl.textContent = count
}
let gCount=0
function gPlus1() {
    gCount += 1
    guestEl.textContent = gCount
}
function gPlus2() {
    gCount += 2
    guestEl.textContent = gCount
}
function gPlus3() {
    gCount += 3
    guestEl.textContent = gCount
}
 function newGame(){
    homeEl.textContent = 0
    guestEl.textContent = 0
    count=0
    gCount=0
}
