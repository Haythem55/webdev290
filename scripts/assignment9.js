var Vehicle = {
    init: function(name) {
    this.name = name;
},
start: function() {
    return "engine of "+this.name + " starting...";
}}
var Car = Object.create(Vehicle);
Car.run = function() {
    console.log("Hello "+ this.start());
};
var c1 = Object.create(Car);
c1.init('Fiesta');
var c2 = Object.create(Car);
c2.init('Baleno');

//weather API
function getWeather(){
    $('.weatherResponse').html('');
    let cityName= $('#cityName').val();
    //I tried different links to the weather api here and couldn't solve this problem. I keep getting an erro
    let apiCall= "http://www.api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=1e6ef7c0afeab7ed8fdac79e0a80b27e";
    $.getJSON(apiCall, weatherCallback);
    
    /*function wheatherCallback(data){
        console.log(data.weather);
    }*/
    function weatherCallback(weatherData){
        let cityName = weatherData.name;
        let country = weatherData.sys.country;
        let description = weatherData.weather[0].description;
        $('.weatherResponse').append("The weather in "+ cityName +" "+ country + " is currently "+ description);
    }

}