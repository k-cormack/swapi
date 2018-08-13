
import SwapiController from "./components/swapiController.js";




class App {
    constructor() {
        this.controllers = {
            swapi: new SwapiController
        }
    }
}

const app = new App()
window.app = app