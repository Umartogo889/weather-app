let container = document.querySelector(".container"),
    form = document.querySelector("form"),
    infoBox = document.querySelector(".info-box"),
    time = document.querySelector(".time")


form.location.focus()

let weatherIcon = ""
// get weather  data 
const setCardInfo = async (data) => {
    if (data.weather[0].main == "Clear") {
        weatherIcon = 'sun.png'
    }
    else if (data.weather[0].main == "Clouds") {
        weatherIcon = "cloud.png"
        container.style.background = "url(./images/clouds-bg.jpg ) no-repeat center"
        container.style.backgroundSize = "cover"
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon = "rain.png"
        container.style.background = "url(./images/rain-bg.webp ) no-repeat center"
        container.style.backgroundSize = "cover"
    }

    else if (data.weather[0].main == "Drizzle") {
        weatherIcon = "cloudy.png"
        container.style.background = "url(./images/rain-bg.webp ) no-repeat center"
        container.style.backgroundSize = "cover"
    }
    else if (data.weather[0].main == "Mist") {
        container.style.background = "url(./images/mist-bg.webp ) no-repeat center"
        container.style.backgroundSize = "cover"
        weatherIcon = "mist.png"
    }

    infoBox.innerHTML = `

      <img class="weather-img"  src="./images/${weatherIcon}" alt="" />

    <h1 id="location_name">${data.name} ${data.sys.country}</h1>

    <h3 id="main-type">${data.weather[0].main}</h3>

    <h2 id=" main-temp ">${Math.round(data.main.temp - 273)} °C</h2>
    `
}

// get data 
const getDate = () => {

    let now = new Date()
    let Hours = now.getHours()
    let Minutes = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes()
    let Seconds = now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds()

    let data = `<h1> ${Hours}:${Minutes}:${Seconds}</h1> `

    return data

}

setInterval(() => {
    time.innerHTML = getDate()
}, 100);

form.addEventListener(("submit"), (e) => {
    e.preventDefault()
    let location = form.location.value
    getData(location).then(item => setCardInfo(item))
    setCardInfo()

})
