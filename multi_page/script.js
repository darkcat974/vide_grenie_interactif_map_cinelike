// JavaScript code with changes
// get all info from the html actions
const container = document.querySelector('.container');
const places = document.querySelectorAll('.row .place:not(.occupied)');
const autreRadio = document.getElementById('Autre');
const autreVilleDiv = document.getElementById('autreVille');
const autreVilleInput = document.getElementById('autreVilleInput');

// fixing the price
let PlacePrice = 10;

// Function to update the content of the "address" box with the selected place numbers
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

        // Update the content of the "address" box with the selected place numbers
        UpdateSelectedPlacesBox(placeIndex);
    }
});

// Event listener for clicking on the "Autre" radio button
autreRadio.addEventListener('click', () => {
    if (autreRadio.checked) {
        autreVilleDiv.style.display = 'block';
        autreVilleInput.setAttribute('required', 'required');
    } else {
        autreVilleDiv.style.display = 'none';
        autreVilleInput.removeAttribute('required');
    }
});

function showTextBar() {
    if (autreRadio.checked) {
        autreVilleDiv.style.display = 'block';
        autreVilleInput.setAttribute('required', 'required');
    } else {
        autreVilleDiv.style.display = 'none';
        autreVilleInput.removeAttribute('required');
    }
}

// Function to send form data to the external form
function sendFormDataToExternalForm() {
    const prenom = document.getElementById('prenom').value;
    const nom = document.getElementById('nom').value;
    const adresse = document.getElementById('adresse').value;
    const telephone = document.getElementById('telephone').value;
    const codePostal = document.getElementById('codePostal').value;
    const ville = document.querySelector('input[name="ville"]:checked').value;
    const autreVille = autreVilleInput.value;

    const formData = new FormData();
    formData.append('entry.1', prenom);
    formData.append('entry.2', nom);
    formData.append('entry.3', adresse);
    formData.append('entry.4', telephone);
    formData.append('entry.5', codePostal);
    formData.append('entry.6', ville === 'Autre' ? autreVille : ville);

    fetch('https://framaforms.org/vide-grenier-de-vert-saint-denis-24-septembre-2023-1687503051', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        // Handle the response from the external form, if needed
        console.log('Form data submitted successfully');
    })
    .catch(error => {
        // Handle any errors that occurred during form submission
        console.error('Error submitting form data:', error);
    });
}

// Event listener for clicking on the "Valider" button
const validerButton = document.querySelector('.adress button');
validerButton.addEventListener('click', () => {
    sendFormDataToExternalForm();
});
