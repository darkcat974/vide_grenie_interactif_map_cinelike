// get all info from the html actions
const container = document.querySelector('.container');
const places = document.querySelectorAll('.row .place:not(.occupied)')
const count = document.getElementById('count');
const total = document.getElementById('total');
const date = document.getElementById('date');

// fixing the price
let PlacePrice = 10;

function UpdateSelectedCount() {
    const SelectedPlaces = document.querySelectorAll('.row .place.selected');

    const placeIndex = [...SelectedPlaces].map(function (place){
        return [...places].indexOf(place);
    })
    console.log(placeIndex);
    localStorage.setItem('SelectedPlaces', JSON.stringify(placeIndex))

    const SelectedCount = SelectedPlaces.length;
    count.innerText = SelectedCount;
    total.innerText = SelectedCount * PlacePrice
};

container.addEventListener('click', (e) => {
    if (e.target.classList.contains('place')
    && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected')
    }
    UpdateSelectedCount();
});
