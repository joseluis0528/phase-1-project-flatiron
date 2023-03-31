document.addEventListener('DOMContentLoaded', () => {
    getDate()
})

function fetch() {
    
}

function getDate () {
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    document.querySelector('.date').innerText = `${month}/${day}/${year}`
}