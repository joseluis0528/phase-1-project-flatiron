document.addEventListener('DOMContentLoaded', () => {
    getDate()
    //fetchKey()
    //fetchData()
    citySearch()
})

let apiKey = 'GZ46xqn7DcyEqd0L0Xr1ApK2KuJh2NcG';
// parseInt(detail.Key))[0])

function fetchData(city) {
    fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${city}&language=en-us&details=true`)
    .then(response => response.json())
    .then(data => (data.map( details => {
        let cityKey = details.Key
        fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityKey}?apikey=${apiKey}&language=en-us&details=true&metric=true`)
        .then(responce => responce.json())
        .then(data => this.renderData(data))       
    })))
}

function renderData(data) {

    console.log(data['DailyForecasts']['Temperature'])
}

function citySearch(city) {
    const input = document.querySelector('.search-bar');
    input.addEventListener('submit', () => {
        const getCity = document.querySelector('#city');
        getCity.textContent = input.value
    })
}

function getDate () {
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    document.querySelector('.date').innerText = `${month}/${day}/${year}`
}

function addToFavorites() {
    const getRemoveBtn = document.querySelector('#remove-btn');
    getRemoveBtn.addEventListener('click', () => {
        console.log('click!')
    })
}