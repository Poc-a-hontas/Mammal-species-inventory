export default class Mammal {
    constructor(name, gender, habitat, dateOfObservation) {
        this.name = name;
        this.gender = gender;
        this.habitat = habitat;
        this.dateOfObservation = dateOfObservation;
    }
    getName() {
        return this.name;
    }

    getGender() {
        return this.gender;
    }

    getHabitat() {
        return this.habitat;
    }

    getDateOfObservation() {
        return this.dateOfObservation;
    }
}