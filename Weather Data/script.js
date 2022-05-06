$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Goa,india&units=metric&appid=b295c5614fa4fd64ebde71e917426329",
function(data) {
    console.log(data);

    var icon ="https://openweathermap.org/img/w/" + data.weather[0].icon +".png";
    var temp =Math.floor(data.main.temp);
    var weathern = data.weather[0].main;
    $('.icon').attr('src',icon);
    $('.weather').append(weathern);
    $('.temp').append(temp);
    }
);