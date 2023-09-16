const elInputName = document.querySelector("#name");
const elInputRelationship = document.querySelector("#relationship");
const elInputPhone = document.querySelector("#phone");
const elForm = document.querySelector("#form");
const elCards = document.querySelector(".cards");

class NewCard {
    addCard(parent, form) {
        if (elInputName.value && elInputRelationship.value && elInputPhone.value !== "") {
            const newCard = document.createElement("div");
            newCard.className = "box";
            newCard.innerHTML = `
                 <h5 class="m-3">${elInputName.value}</h5>
                 <p class="m-3">${elInputRelationship.value}</p>
                 <p class="text-info m-3">${elInputPhone.value}</p>
             `;
            parent.appendChild(newCard);
            form.reset();
        } else {
            alert("Error");
        }
    }
}

const card = new NewCard();

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    card.addCard(elCards, elForm);
});
