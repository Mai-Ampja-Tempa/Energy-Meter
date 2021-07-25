// HAPPINESS BAR AND CUDDLE BUTTON
const cuddleBtn = document.getElementById("cuddle")
let happinessProgress = document.querySelector("#happiness-progress")
let happinessPercentage = document.getElementById("happiness-percent")
let happinessNum = 100
const happinessDown = setInterval(countDown, 3000)


// HUNGER AND FEED BUTTON
const feedBtn = document.getElementById("feed")
let hungerProgress = document.querySelector("#hunger-progress")
let hungerPercentage = document.getElementById("hunger-percent")
let hungerNum = 50
const hungerStart = setInterval(gettingHungry, 10000)

// ENERGY AND RUN BUTTON
const runBtn = document.getElementById("run")
let energyProgress = document.querySelector("#energy-progress")
let energyPercentage = document.getElementById("energy-percent")
let energyNum = 100
const energyAccumulated = setInterval(needARun, 5000)

setTimeout(onStart(), 500)
function onStart() {
    // CUDDLE
    happinessPercentage.textContent = `${happinessNum}%`
    happinessProgress.style.width = happinessNum + "%"
    cuddleBtn.disable = true

    //FEED
    hungerPercentage.textContent = `${hungerNum}%`
    hungerProgress.style.width = hungerNum + "%"
    feedBtn.disable = false

    // GO RUN
    energyPercentage.textContent = `${energyNum}%`
    energyProgress.style.width = energyNum + "%"

}

// Happiness level going down by 2% every 3 second
function countDown() {
    if (happinessNum > 0) {
        happinessNum -= 2
        happinessPercentage.textContent = `${happinessNum}%`
        happinessProgress.style.width = happinessNum + "%"
    }
    else if (happinessNum === 0 || happinessNum < 0) {
        happinessPercentage.textContent = `${happinessNum}% 😢`
    }
}

// increase hunger level, hunger bar going down by 25% every minute
function gettingHungry() {
    hungerNum -= 25
    hungerPercentage.textContent = `${hungerNum}%`
    hungerProgress.style.width = hungerNum + "%"
    if (hungerNum <= 0 ){
        hungerNum = 0
        hungerPercentage.textContent = `${hungerNum}% 💀`
        hungerProgress.style.width = hungerNum + "%"

    }
}

// energy level increase by 1% every 5 second
function needARun() {
    energyNum += 1
    energyPercentage.innerHTML = `${energyNum}%`
    energyProgress.style.width = energyNum + "%"
    if (energyNum > 100 && energyNum < 110) {
        energyPercentage.innerHTML = `${energyNum}% <br> going crazy🤪`
        energyProgress.style.width = energyNum + "%"
    } else if (energyNum >= 110){
        energyNum = 110
        energyPercentage.innerHTML = `${energyNum}% <br> beyond crazy🤪💥`
        energyProgress.style.width = energyNum + "%"
    }
}

cuddleBtn.addEventListener("click", function () {
    if (happinessNum < 100) {
        cuddleBtn.disable = false
        happinessNum = 100
        happinessPercentage.textContent = `${happinessNum}% 🥰`
        happinessProgress.style.width = happinessNum + "%"
    }
}
)

feedBtn.addEventListener("click", function () {
    if (hungerNum >= 100) {
        feedBtn.disable = true
    } else {
        feedBtn.disable = false
        hungerNum += 50
        hungerPercentage.textContent = `${hungerNum}%`
        hungerProgress.style.width = hungerNum + "%"
    }
})

runBtn.addEventListener("click", function () {
    if (energyNum >= 0) {
        runBtn.disable = false
        energyNum -= 20
        energyPercentage.innerHTML = `${energyNum}%`
        energyProgress.style.width = energyNum + "%"
    } else {
        runBtn.disable = true
    }
})