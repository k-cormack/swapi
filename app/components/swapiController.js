import SwapiService from "./swapiService.js"

const swapiService = new SwapiService
let app = document.getElementById('app')

function draw(data) {
    console.log(data)
    app.innerHTML = `
    <div id="error"></div>
    <button onclick="app.controllers.swapi.getStarships()">Get Starships</button>
    <div id="starships"></div>
    <div id="error"></div>
    <button onclick="app.controllers.swapi.getPeople()">Get People</button>
    <div id="people"></div>
    <div id="error"></div>
    <button onclick="app.controllers.swapi.getPlanets()">Get Planets</button>
    <div id="planets"></div>
    `
}
function drawStarships(data) {
    let starshipsElem = document.getElementById("starships")
    let template = ''
    data.results.forEach(starship => {
        template += `<div>
        ${starship.name}
        </div> 
        `
    })

    starshipsElem.innerHTML = template
}
function drawPeople(data) {
    let peopleElem = document.getElementById("people")
    let template = ''
    data.results.forEach(person => {
        template += `<div>
        ${person.name}
        </div> 
        `
    })

    peopleElem.innerHTML = template
}
function drawPlanets(data) {
    let planetsElem = document.getElementById("planets")
    let template = ''
    data.results.forEach(planet => {
        template += `<div>
        ${planet.name}
        </div> 
        `
    })

    planetsElem.innerHTML = template
}

function drawError(error) {
    console.log(error)
    document.getElementById("error").innerHTML = error.message
}

export default class SwapiController {
    constructor() {
        draw()
    }

    getStarships() {
        console.log("hello from SwapiController")
        swapiService.getStarships(drawStarships, drawError)
    }
    getPeople() {
        console.log("hello from SwapiController")
        swapiService.getPeople(drawPeople, drawError)
        console.log(swapiService.people)
    }
    getPlanets() {
        console.log("hello from SwapiController")
        swapiService.getPlanets(drawPlanets, drawError)
    }
}
