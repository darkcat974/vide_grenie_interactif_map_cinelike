// JavaScript code with changes
// get all info from the html actions
const container = document.querySelector('.container');
const places = document.querySelectorAll('.row .place');
const autreRadio = document.getElementById('Autre');
const autreVilleDiv = document.getElementById('autreVille');
const autreVilleInput = document.getElementById('autreVilleInput');

// fixing the price
let PlacePrice = 10;

// Function to update the content of the "address" box with the selected place numbers
function UpdateSelectedPlacesBox(placeIndex) {
    const placeNumberDiv = document.getElementById('placeNumber');

    if (placeIndex.length > 0) {
        const selectedPlaceNumbers = placeIndex.map(index => places[index].getAttribute('id')).join(', ');
        placeNumberDiv.textContent = selectedPlaceNumbers;
    } else {
        placeNumberDiv.textContent = 'aucune';
    }
}

// Function to update the content of each place div with the place ID
function UpdatePlaceIDs() {
    places.forEach((place, index) => {
        const placeIdSpan = place.querySelector('span');
        placeIdSpan.textContent = place.getAttribute('id');
    });
}


// Event listener for clicking on a place
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('place') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        
        // Get the updated list of selected places after the click event
        const SelectedPlaces = document.querySelectorAll('.row .place.selected');
        const placeIndex = [...SelectedPlaces].map(function (place){
            return [...places].indexOf(place);
        });
        
        // Update the content of the "address" box with the selected place numbers
        UpdateSelectedPlacesBox(placeIndex);
    }
});

// Call the function to initialize the place IDs
UpdatePlaceIDs();