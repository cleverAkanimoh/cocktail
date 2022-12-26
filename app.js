import fetchDrinks from './fetchDrinks.js';
import displayDrink from './displaySingleDrink.js';

const presentDrink = async () => {
    const id = localStorage.getItem('drink');
    if (!id) {
        window.location.replace('index.html');
    } else {
        const drink = await fetchDrinks(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        displayDrink(drink);
    }
};

window.addEventListener('DOMContentLoaded', presentDrink);

// import get from './getElement.js';
// import presentDrinks from './presentDrinks.js';

// const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

// const form = get('.search-form');
// const input = get('[name="drink"]');

// form.addEventListener('keyup', function (e) {
//     e.preventDefault();
//     const value = input.value;
//     if (!value) return;
//     presentDrinks(`${baseURL}${value}`);
// });