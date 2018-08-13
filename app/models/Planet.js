export default class planet {
    constructor(reqData) {
        this.name = reqData.name
        this.rotPeriod = reqData.rotation_period
        this.orbitPeriod = reqData.orbital_period
        this.climate = reqData.climate
    }
}