document.addEventListener('DOMContentLoaded', () => {
    getDate()
})

function fetch(city) {
    let apiKey = "GZ46xqn7DcyEqd0L0Xr1ApK2KuJh2NcG"
    const getKey = fetch(`"http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${city}&language=en-us&details=true"`)
    .then(response => response.json())
    .then(cityKey => cityKey.key)

    fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityKey}?apikey=${apiKey}&language=en-us&details=true&metric=true`)
    .then(responce => responce.json())
    .then(data => renderData(data))
}

function renderData(data) {

}

function addToFavorites() {
    
}

function getDate () {
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    document.querySelector('.date').innerText = `${month}/${day}/${year}`
}