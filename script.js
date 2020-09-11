let button = document.querySelector('.search');
let inputVal = document.querySelector('.inputVal');
let name = document.querySelector('.name');
let icon = document.querySelector('.icon');
let desc = document.querySelector('.desc');
let wind = document.querySelector('.wind');
let temp = document.querySelector('.temp');
let feels = document.querySelector('.feels');
let pres = document.querySelector('.pres');

window.addEventListener('load',function(){
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=new york city&units=metric&appid=4030ac742b531a108804ed9c3c7be4ba')
    .then(response => response.json())
    .then(data => {
        let nameValue = data['city']['name'];
        let iconValue = data['list'][0]['weather'][0]['icon'];
        let tempValue = data['list'][0]['main']['temp'];
        let feelsValue = data['list'][0]['main']['feels_like'];
        let presValue = data['list'][0]['main']['pressure'];
        let windValue = data['list'][0]['wind']['speed'];
        let descValue = data['list'][0]['weather'][0]['description'];
        let iconUrl = "http://openweathermap.org/img/w/"+iconValue+".png"; 

        name.innerHTML = nameValue;
        icon.innerHTML = '<img src="' + iconUrl +' ">';
        temp.innerHTML = tempValue;
        feels.innerHTML = feelsValue;
        pres.innerHTML = presValue;
        wind.innerHTML = windValue;
        desc.innerHTML = descValue;

    })
    
.catch(err => alert("Wrong city name!"))
})

button.addEventListener('click',function(){
    let city = document.getElementById('inputVal').value
			
		    console.log(city);
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=4030ac742b531a108804ed9c3c7be4ba')
		    .then(response => response.json())
		    // .then(data => console.log(response))
		    .then(data => {
                let nameValue = data['name'];
                let iconValue = data['weather'][0]['icon'];
                let tempValue = data['main']['temp'];
                let feelsValue = data['main']['feels_like'];
                let presValue = data['main']['pressure'];
		        let windValue = data['wind']['speed'];
                let descValue = data['weather'][0]['description'];
                let iconUrl = "http://openweathermap.org/img/w/"+iconValue+".png";

                name.innerHTML = nameValue;
                icon.innerHTML = '<img src="' + iconUrl +' ">';
                temp.innerHTML = tempValue;
                feels.innerHTML = feelsValue;
                pres.innerHTML = presValue;
		        wind.innerHTML = windValue;
		        desc.innerHTML = descValue;
		    })
    
.catch(err => alert("Wrong city name!"))
})

let input = document.getElementById('inputVal');
    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("myBtn").click();
        }
    });

function showTime(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();

    if (h == 0) {
        h = 24;
    }
    if (h > 24) {
        h = h - 24;
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;

    let time = h + ":" + m;
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;

    setTimeout(showTime, 1000);
}
showTime();