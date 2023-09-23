var searchPopup = document.createElement("div");
searchPopup.innerHTML = '<div class="meal-details-popper" data-popper-reference-hidden="false" data-popper-escaped="false" data-popper-placement="left" style="position: absolute; inset: 0px 0px auto auto; transform: translate(-669px, 850px);"> <div class="meal-details"> <div id="details-exit" style="position: absolute; top: 16px; right: 18px; width: 30px; cursor: pointer;"><i class="fal fa-times"></i></div><div class="details-name spacer-bottom-12"> <p class="text-h3 text-h3--meal-name spacer-bottom-12">Wyszukiwarka składników</p><div class="row"> <div class="col-12 spacer-bottom-8"> <div class="form-input is-required"> <div class="input-label "> <label class="is-required"><span>Składnik</span></label> </div><div class="position-relative"> <input class="is-required" id="ingredient-input" type="text" placeholder="koperek" value=""> </div></div></div></div><button id="ingredient-submit">Szukaj</button> </div></div>';
searchPopup.id = "search-popup";

const showSearchPopup = () => {
    document.getElementsByClassName("card-header")[0].append(searchPopup);
    document.getElementById("details-exit").onclick = () => { document.getElementById("search-popup").remove() };
    document.getElementById("ingredient-submit").onclick = () => {
        let ingredient = document.getElementById("ingredient-input").value;
        searchIngredient(ingredient);
    };
}

const searchIngredient = async (ingredient) => {
    var elements = document.getElementsByClassName("nutrition-summary__info");
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        element.click();


        let ingredientString = document.getElementsByClassName("details-ingredients");
        let markSection = ingredientString[ingredientString.length - 1].textContent.toLowerCase().includes(ingredient.toLowerCase());

        let section = element.parentElement.parentElement.parentElement;
        if (markSection) {
            if (section.tagName === 'LI') {
                section.style.backgroundColor = "#ffb7b7";
            } else {
                section.parentElement.style.backgroundColor = "#ffb7b7";
            }
        } else {
            if (section.tagName === 'LI') {
                section.style.backgroundColor = "#fff";
            } else {
                section.parentElement.style.backgroundColor = "#fff";
            }
        }
        let exitButton = document.getElementsByClassName("details-exit");
        exitButton[exitButton.length - 1].click();
    }
}



setTimeout(() => {
    let buttonPopup = document.createElement("button");
    buttonPopup.innerHTML = "Wyszukaj składnika";
    buttonPopup.id = "lookup-popup";
    buttonPopup.onclick = showSearchPopup;

    document.getElementById("app").appendChild(buttonPopup);
}, "2000");