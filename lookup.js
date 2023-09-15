var searchPopup = document.createElement("div");
searchPopup.innerHTML = '<div class="meal-details-popper" data-popper-reference-hidden="false" data-popper-escaped="false" data-popper-placement="left" style="position: absolute; inset: 0px 0px auto auto; transform: translate(-669px, 668px);"> <div class="meal-details"> <div class="details-exit"><i class="fal fa-times"></i></div><div class="details-name spacer-bottom-24"> <p class="text-h3 text-h3--meal-name">Podaj składnik</p><input type="text" placeholder="koperek" id="ingredient-input"> <button id="ingredient-submit">Szukaj</button> </div></div>';
searchPopup.id = "search-popup";

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const showSearchPopup = () => {
    document.getElementsByClassName("card-header")[0].append(searchPopup);
    document.getElementsByClassName("details-exit")[0].onclick = () => { document.getElementById("search-popup").remove() };
    document.getElementById("ingredient-submit").onclick = () => {
        let ingredient = document.getElementById("ingredient-input").value
        searchIngredient(ingredient)
    };
}

const searchIngredient = async (ingredient) => {
    var elements = document.getElementsByClassName("nutrition-summary__info");
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        element.click();


        let ingredientString = document.getElementsByClassName("details-ingredients")
        let markSection = ingredientString[ingredientString.length - 1].textContent.toLowerCase().includes(ingredient.toLowerCase());

        if (markSection) {
            element.parentElement.parentElement.parentElement.style.backgroundColor = "#ffb7b7";
        } else {
            element.parentElement.parentElement.parentElement.style.backgroundColor = "#fff";
        }
        let exitButton = document.getElementsByClassName("details-exit")
        exitButton[exitButton.length - 1].click();

        console.log(exitButton.length)
    }
}



setTimeout(() => {
    let buttonPopup = document.createElement("button");
    buttonPopup.innerHTML = "Wyszukaj składnika";
    buttonPopup.id = "lookup-popup";
    buttonPopup.onclick = showSearchPopup;

    document.getElementById("app").appendChild(buttonPopup)  
}, "5000");

