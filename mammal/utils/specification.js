import Mammal from "./mammalClass.js"

export default class Specification{
    constructor() {
        this.mammals = [];
    }

    addMammal(name, gender, habitat, dateOfObservation) {
        const newMammal = new Mammal(name, gender, habitat, dateOfObservation);
        this.mammals.push(newMammal);
    }

    getMammal(name) {
        for (const mammal of this.mammals) {
            if (name === mammal.name) {
                return mammal;
            }
        }
        //the value null represents the absence of an object value
        return null;
    }

    search(idealMammal) {
        //destructuring 
        const {name, gender, habitat, dateOfObservation} = idealMammal;
        for (const mammal of this.mammals) {
            if (mammal.name === name && mammal.gender === gender && mammal.habitat === habitat && mammal.dateOfObservation === dateOfObservation)
                return mammal;
        }
        return null;
    }

    allMammals() {
        return this.mammals;
    }

    deleteMammal(name) {
        const index=this.mammals.map(mammal => mammal.name).indexOf(name);
        this.mammals.splice(index, 1); //removes mammal from mammal object list
    }
}