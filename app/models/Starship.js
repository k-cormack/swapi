export default class starship {
    constructor(reqData) {
        this.name = reqData.name
        this.model = reqData.model
        this.manufacturer = reqData.manufacturer
        this.class = reqData.starship_class
        this.films = reqData.films
    }
}