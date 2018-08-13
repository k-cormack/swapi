import starship from "../../app/models/Starship.js"
import person from "../../app/models/Person.js"
import planet from "../../app/models/Planet.js"

let people = {}

export default class SwapiService {

    getStarships(draw, drawError) {
        console.log("This is SwapiService")
        fetch("https://swapi.co/api/starships")
            .then(res => res.json())
            .then(draw)
            .catch(drawError)
    }
    getPeople(draw, drawError) {
        console.log("This is SwapiService")
        fetch("https://swapi.co/api/people")
            .then(res => res.json())
            // .then(res => {
            //     let myPeople = res.results.map(rawPerson => {
            //         let person = new person(rawPerson)
            //          people[person.id] = person
            //        return person
            //     })
            //     draw(myPeople)
            // })
            .then(draw)
            .catch(drawError)

    }
    get people() {
        return people
    }
    getPlanets(draw, drawError) {
        console.log("This is SwapiService")
        fetch("https://swapi.co/api/planets")
            .then(res => res.json())
            .then(draw)
            .catch(drawError)
    }

}