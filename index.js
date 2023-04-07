document.addEventListener('DOMContentLoaded', () => {
    getDate()
})

function fetch(city) {
    let apiKey = "GZ46xqn7DcyEqd0L0Xr1ApK2KuJh2NcG"
    fetch(`"http://dataservice.accuweather.com/locations/v1/cities/search?apikey=GZ46xqn7DcyEqd0L0Xr1ApK2KuJh2NcG&q=${city}&language=en-us&details=true"`)
    .then(response => response.json())
    .then(data => data.key)

    fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/348308?apikey=${apiKey}&language=en-us&details=true&metric=true`)
    .then(responce => responce.json())
    .then(data => data)
}

function getDate () {
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    document.querySelector('.date').innerText = `${month}/${day}/${year}`
}