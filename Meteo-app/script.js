document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("search-btn");
    searchButton.addEventListener("click", function () {
        const cityInput = document.getElementById("city-input");
        const city = cityInput.value.trim();
        if (city !== "") {
            getWeatherData(city)
                .then(function (data) {
                    displayWeatherData(data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    });

    function getWeatherData(city) {
        const apiKey = "YOUR_API_KEY";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        return fetch(apiUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                return {
                    city: data.name,
                    temperature: data.main.temp,
                    description: data.weather[0].description,
                    humidity: data.main.humidity,
                    windSpeed: data.wind.speed
                };
            });
    }

    // function displayWeatherData(data) {
    //     const weatherContainer = document.getElementById("weather-container");
    //     weatherContainer.innerHTML = "";

    //     const weatherCard = document.createElement("div");
    //     weatherCard.classList.add("weather-card");

    //     const cityName = document.createElement("h2");
    //     cityName.textContent = data.city;
    //     weatherCard.appendChild(cityName);

    //     const temperature = document.createElement("p");
    //     temperature.textContent = `Temperatura: ${data}

    //         // const description = document.createElement("p");
    //         // description.textContent = `Descrizione: ${data.description}`;
    //         // weatherCard.appendChild(description);

    //         // const humidity = document.createElement("p");
    //         // humidity.textContent = `Umidità: ${data.humidity}%`;
    //         // weatherCard.appendChild(humidity);

    //         // const windSpeed = document.createElement("p");
    //         // windSpeed.textContent = `Velocità del vento: ${data.windSpeed} km/h`;
    //         // weatherCard.appendChild(windSpeed);

    //         // weatherContainer.appendChild(weatherCard);


    function handleRowClick() {
        // Ottieni il testo della riga cliccata
        var rowData = this.innerText;
        alert("Hai cliccato su: " + rowData);
    }

    window.addEventListener('DOMContentLoaded', (event) => {
        // Ottieni tutte le righe della tabella
        var rows = document.querySelectorAll('tbody tr');

        // Aggiungi l'evento onclick a ciascuna riga
        rows.forEach(function (row) {
            row.addEventListener('click', handleRowClick);
        });
    });