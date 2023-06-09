
function getWeather(region) {
    var apiKey = "801454b5f63e4964b29299cb77647dc6";
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + region + ",it&appid=801454b5f63e4964b29299cb77647dc6";

    fetch(url)
        .then(response => response.json())
        .then(data => displayWeather(data))
    // .catch(error => console.error("Errore nella richiesta HTTP", error));
}
const citySelect = document.getElementById("#citySelect");
function displayWeather(data) {

    var weatherContainer = document.getElementById("weatherContainer");
    var region = data.name;
    var temperature = Math.round(data.main.temp - 273.15);
    var description = data.weather[0].description;
    var card = document.createElement("div");
    card.className = "card";
    card.innerHTML = "<h2>" + region + "</h2><p>Temperatura: " + temperature + "°C</p><p>Descrizione: " + description + "</p>";
    weatherContainer.appendChild(card);
}

var originalRegions = [
    "Abruzzo", "Basilicata", "Calabria", "Campania", "Emilia-Romagna", "Friuli-Venezia", "Giulia", "Lazio", "Liguria", "Lombardia", "Marche", "Molise", "Piemonte", "Puglia", "Sardegna", "Sicilia", "Toscana", "Trentino-Alto+Adige", "Umbria", "Valle d'Aosta", "Veneto"
];

var regions = [...originalRegions];
regions.sort(function (a, b) {
    return a.localeCompare(b, "it");
});

console.log(regions);

for (var i = 0; i < regions.length; i++) {
    getWeather(regions[i]);
    console.log(regions)
}

var cities = [
    { name: "Palermo", coord: { lon: 13.5833, lat: 37.8167 } },
    { name: "Napoli", coord: { lon: 14.2681, lat: 40.8522 } },
    { name: "Milano", coord: { lon: 9.19, lat: 45.4642 } },
    { name: "Torino", coord: { lon: 7.6868, lat: 45.0703 } },
];

var weatherContainer = document.getElementById("weatherContainer");

citySelect.addEventListener("change", function () {
    var selectedCity = citySelect.value;
    if (selectedCity !== "") {
        getWeather(selectedCity);
    } else {
        displayAllWeather();
    }
});








