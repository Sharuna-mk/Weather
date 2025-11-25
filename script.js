const apikey = "5bb7ac7b8094e09d81af8379d923f3ba"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox = document.querySelector("#cityname")



async function checkweather(city) {

    const response = await fetch(apiURL + city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);

    if (response.status == 404) {
        alert("invalid city name")
    }

    else if (searchBox.value == "") {
        alert("please enter city name")
    }
    else {

        document.querySelector('#city').innerHTML = data.name;
        document.querySelector('#temperature').innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector('#humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('#windspeed').innerHTML = data.wind.speed + "km/hr";

        document.querySelector('.weather').style.display = "block"
    }
}



function check() {
    checkweather(searchBox.value)
}

