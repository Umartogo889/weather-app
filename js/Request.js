const api = {
    key: "e849018863b875b67b15221bab34427f",
    base: "https://api.openweathermap.org/data/2.5/"

}

const getData = async (city) => {

    let req = fetch(api.base + `weather?q=${city}&appid=${api.key}`)
    let data = (await req).json()

    return data
}

