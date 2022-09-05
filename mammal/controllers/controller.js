export default class Controller {
    initialize(model, view) {
        this.model = model;
        this.view = view;
    }

    buildTemplate(mammal) {
        return `<div class="customerrow">
            <div><p><b>Name:</b><a>${mammal.getName()}<a><p></div>
            <div><p><b>Gender:</b><a>${mammal.getGender()}<a><p></div>
            <div><p><b>Habitat:</b><a>${mammal.getHabitat()}<a><p></div>
            <div><p><b>Date Of Observation:</b><a>${mammal.getDateOfObservation()}<a><p></iv>
            <div><button type="button" id="${mammal.getName()}">Delete</button></div>
        </div>`
    }

    nameSearch(name) {
        const mammal = this.model.mammalList.getMammal(serialNumber);
        let template = "";

        if(mammal !== null) {
            template = this.buildTemplate(mammal);
        } else {
            template =
            `<div class="customerrow">
                <td colspan="5">Nothing to show</td>
            </div>`;
        }
        this.view.message(template);

    }

    search(searchMammal) {
        const mammal = this.model.mammalList.search(searchMammal);
        let template = "";

        if(mammal !== null) {
            template = this.buildTemplate(mammal);
        } else {
            template =
            `<div class="customerrow">
                <td colspan="5">Nothing to show</td>
            </div>`;
        }
        this.view.message(template);

    }

    showAllMammals() {
        let template = "";
        for (const mammal of this.model.mammalList.allMammals()) {
            template += this.buildTemplate(mammal);
        }
        this.view.message(template);
    }

    newMammal(guitar) {
        const doesMammalAlreadyExist = this.model.mammalList.getMammal(mammal.name);
        if(doesMammalAlreadyExist === null) {
            this.model.mammalList.addMammal(mammal.name, mammal.gender, mammal.habitat, mammal.dateOfObservation);
            this.view.snackbar("The mammal was saved");
            this.showAllMammals();
        } else {
            this.view.snackbar("The mammal already exists");
        }
    }

    deleteMammal(name) {
        this.model.mammalList.deleteMammal(name);
        this.view.snackbar("The mammal was deleted!");
    }
}