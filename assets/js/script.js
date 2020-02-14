
$("#searchBar").submit(function (event) {
    event.preventDefault()
    var city = $("#barSearch").val()
    weatherToday(city)

    
})

function weatherToday(city) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=48b7a5f03bd667d9b560690cd21d983d"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        
        var hDiv = $("<div>");
        
        var newDate = $("<div>").text("Date: " + moment().format('l'))
        var temp = $("<div>").text("Current temperature: " + response.main.temp + " (℉)");
        var humidity = $("<div>").text("Humidity: " + response.main.humidity + "%");
        var wind = $("<div>").text("Wind speed: " + response.wind.speed + " mph");
        var iconCode = $("<img src='https://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='icon for current weather'>")
        
        hDiv.append(city, iconCode, newDate, temp, humidity, wind);
        $("#weatherArea").prepend(hDiv);
        hDiv.addClass("currentWeather")

 
    });
}



var cityArr = []

localStorage.setItem("city", city)
var cityInput = JSON.parse(localStorage.getItem("city", city));
console.log(cityinput);

var citySearch = $("<div>").text(cityinput)
$("#searchArea").prepend(cityinput)