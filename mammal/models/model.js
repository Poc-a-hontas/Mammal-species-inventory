import Specification from "../utils/specification.js"

export default class Model {
    constructor() {
        this.mammalList = new Specification;
        this.mammalList.addMammal("giraffe", "female", "savana", "12-03-2019");
        this.mammalList.addMammal("elephant", "male", "grassland", "22-12-2020");
        this.mammalList.addMammal("lion", "male", "savana", "18-04-2022");
        this.mammalList.addMammal("cat", "female", "desert", "26-09-2018");
        this.mammalList.addMammal("dog", "female", "prairies", "02-10-2012");
        this.mammalList.addMammal("tiger", "male", "rain forest", "19-07-2014");


    }
}