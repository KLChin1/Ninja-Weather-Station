/*
weatherbit API info
APIkey d6f10447e55c42e9a5767af9c7048e64

url 
https://api.weatherbit.io/v2.0/current?city=city&units=I&key=d6f10447e55c42e9a5767af9c7048e64

/* items needed "city", "temp", "datetime", "weather" "icon" */


/*Preloaded city weather*/
/* city array*/


async function fetchSetWeather() {
    //var elem1 = document.querySelector("#cityInput")
    const cities = ["atlanta", "detroit", "lexington", "reno", "denver", "san antonio", "chicago", "san diego", "dallas", "cincinnati"]
    const labels = ["#city1", "#city2", "#city3", "#city4", "#city5", "#city6", "#city7", "#city8", "#city9", "#city10"]
    for (var i=0; i<10; i++){
    var city = cities[i];
    var label = labels[i];
    console.log(label)

    var respose= await fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&units=I&key=88d07d327af0403c9d723bd77d4d0bd3`)
    var data = await respose.json();
     data = data.data[0] 
    console.log(data)
    var div = document.createElement("div")
    //console.log(data[0].city_name)
    //console.log(data.data[0])
    div.innerHTML = `
    <h2>${data.city_name}</h2>
    <img  src="https://cdn.weatherbit.io/static/img/icons/${data.weather.icon}.png"alt="Weather icon" >
    <h3>${data.weather.description}</h3>
    <h3>${data.temp}°F</h3>
    <h5>${data.timezone}</h5>
    
    
    
    `
    
    const resultdiv = document.querySelector(label)
    resultdiv.appendChild(div)
}
}

/*Manual city weather*/
async function fetchWeather() {
    var elem1 = document.querySelector("#cityInput")
    var city = elem1.value;


    var respose= await fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&units=I&key=d6f10447e55c42e9a5767af9c7048e64`)
    var data = await respose.json();
     data = data.data[0] 
    console.log(data)
    var div = document.createElement("div")
    //console.log(data[0].city_name)
    //console.log(data.data[0])
    div.innerHTML = `
    <h2>${data.city_name}</h2>
    <img  src="https://cdn.weatherbit.io/static/img/icons/${data.weather.icon}.png"alt="Weather icon" >
    <h3>${data.weather.description}</h3>
    <h3>${data.temp}°F</h3>
    <h3>${data.timezone}</h3>
    
    `
    const resultdiv = document.querySelector(".weather")
    resultdiv.appendChild(div)
}

//clear manual selection



//remove blocker
function remove(id) {
    let element = document.querySelector(id);
    element.remove();
}
