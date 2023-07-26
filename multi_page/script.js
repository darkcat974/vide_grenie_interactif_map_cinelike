// JavaScript code with changes
// get all info from the html actions
const container = document.querySelector('.container');
const places = document.querySelectorAll('.row .place:not(.occupied)');
const autreRadio = document.getElementById('Autre');
const otherInput = document.getElementById('otherInput');

// fixing the price
let PlacePrice = 10;

// Function to update the content of the "adress" box with the selected place numbers
function UpdateSelectedPlacesBox(placeIndex) {
    const placeNumberDiv = document.getElementById('placeNumber');

    if (placeIndex.length > 0) {
        const selectedPlaceNumbers = placeIndex.map(index => places[index].getAttribute('date-place-id')).join(', ');
        placeNumberDiv.textContent = selectedPlaceNumbers;
    } else {
        placeNumberDiv.textContent = 'nothing selected';
    }
}

// Function to update the content of each place div with the place ID
function UpdatePlaceIDs() {
    places.forEach((place, index) => {
        const placeIdSpan = place.querySelector('span');
        placeIdSpan.textContent = place.getAttribute('date-place-id');
    });
}

// Call the function to initialize the place IDs
UpdatePlaceIDs();

// Event listener for clicking on a place
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('place') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');

        // Get the updated list of selected places after the click event
        const SelectedPlaces = document.querySelectorAll('.row .place.selected');
        const placeIndex = [...SelectedPlaces].map(function (place){
            return [...places].indexOf(place);
        });

        // Update the content of the "adress" box with the selected place numbers
        UpdateSelectedPlacesBox(placeIndex);
    }
});

// Event listener for clicking on the "Autre" radio button
autreRadio.addEventListener('click', () => {
    if (autreRadio.checked) {
        otherInput.style.display = 'block';
    } else {
        otherInput.style.display = 'none';
    }
});

function showTextBar() {
    const autreVilleDiv = document.getElementById('autreVille');
    const autreVilleInput = document.getElementById('autreVilleInput');
    const autreRadio = document.getElementById('Autre');

    if (autreRadio.checked) {
        autreVilleDiv.style.display = 'block';
        autreVilleInput.setAttribute('required', 'required');
    } else {
        autreVilleDiv.style.display = 'none';
        autreVilleInput.removeAttribute('required');
    }
}