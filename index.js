document.addEventListener('DOMContentLoaded', () => {
    getDate()
    fetchWeather()
})

function fetchWeather(city) {
    let apiKey = 'GZ46xqn7DcyEqd0L0Xr1ApK2KuJh2NcG'
    const getKey = fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${city}&language=en-us&details=true`)
    .then(response => response.json())
    .then(data => console.log(data.map(detail => parseInt(detail.Key))[0]))

    // fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${getKey}?apikey=${apiKey}&language=en-us&details=true&metric=true`)
    // .then(responce => responce.json())
    // .then(data => renderData(data))
}

function renderData(data) {
    const {Minimum, Maximum} = data.DailyForecasts.temperature;
    const {wind} = data.DailyForecasts.wind;
    const {name} = data.name
}

function citySearch(city) {
    const input = document.querySelector('.search-bar');
    input.addEventListener('submit', () => {
        const city = document.querySelector('#city');
        city.textContent = input.value
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