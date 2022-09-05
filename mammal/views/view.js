import Mammal from "../utils/mammalClass.js";

export default class View {
    constructor(controller) {
        const self = this;
        const nameSearchForm = document.getElementById("nameSearchForm");
        const nameField = document.getElementById("nameField");
        const searchPanel = document.getElementById("searchPanel");
        const panelText = document.getElementById("panelText");
        const closeCross = document.getElementById("closeCross");
        const searchForm = document.getElementById("searchForm");
        const gender = document.getElementById("gender");
        const habitat = document.getElementById("habitat");
        const dateOfObservation = document.getElementById("dateOfObservation");
        const showAllMammalsButton = document.getElementById("showAllMammalsButton");
        const mammalDialogForm = document.getElementById("mammalDialogForm");
        const addMammalButton = document.getElementById("addMammalButton");
        const mammalDialog = document.getElementById("mammalDialog");
        const cancelButton = document.getElementById("cancelButton");
        const searchResult = document.getElementById("searchResult");
        const hiddenSnFieldd = document.getElementById("hiddenSnField");
        const confirmDialog = document.getElementById("confirmDialog");
        const confirmDialogForm = document.getElementById("confirmDialogForm");
        const cancelConfirmBtn = document.getElementById("cancelConfirmBtn");
        
        self.controller = controller;

        showAllMammalsButton.onclick = function () {
            self.controller.showAllMammals();
        }

        nameSearchForm.onsubmit = function (e) {
            e.preventDefault();
            self.controller.nameSearch(nameField.value);
        }

        searchForm.onsubmit = function (e) {
            e.preventDefault();
            const optimalMammal = new Mammal ("", name.value, gender.value, habitat.value, dateOfObservation.value);
            self.controller.search(optimalMammal);
            search.classList.remove("searchPanelAnim");
        }

        panelText.onclick = function () {
            searchPanel.classList.add("searchPanelAnim");
        }

        closeCross.onclick = function () {
            searchPanel.classList.remove("searchPanelAnim");
        }

        //Dialogue eventhandler
        addMammalButton.onclick = function () {
            mammalDialogForm.reset();
            mammalDialog.showModal();
        }

        cancelButton.onclick = function () {
            mammalDialog.close();
        }

        mammalDialogForm.onsubmit = function () {
            self.controller.newMammal({
                name: document.getElementById("namefield").value,
                gener: document.getElementById("genderfield").value,
                habitat: document.getElementById("habitatfield").value,
                dateOfObservation: document.getElementById("dateOfObservationfield").value,
            })
        }

        searchResult.onclick = function (e) {
            if(e.target.nodeName === "BUTTON") {
                hiddenSnFieldd.value = e.target.id;
                confirmDialog.showModal();
            }
        }

        cancelConfirmBtn.onclick = function () {
            confirmDialog.close();
        }

        confirmDialogForm.onsubmit = function () {
            self.controller.deleteMammal(hiddenSnField.value);
            self.controller.showAllMammals();
        }
    }

    message(template) {
        const element = document.getElementById("searchResult");
        element.innerHTML=""; //resets result output element
        element.insertAdjacentHTML("beforeend", template);
    }

    snackbar(snackbarmessage) {
        const snackbar = document.getElementById("snackbar");
        snackbar.innerHTML = snackbarmessage;
        snackbar.className = "show";
        setTimeout(function () {
            snackbar.className=snackbar.className.replace("show", "");
        },3000);
    }
}