document.getElementById('weather').addEventListener('submit', function(){
let city = document.getElementById('city').value;

fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&APPID=252eb4943a5d6d36e7cc46e119f906d2',
{mode: 'cors'})
.then(response => response.json())
.then(data => {
  document.getElementById('city-name').innerText = data.name + ', ' + data.sys.country;
  document.getElementById('temp').innerText = data.main.temp + ' C';
  document.getElementById('wind').innerText = data.wind.speed;
  document.getElementById('icon').src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
  document.getElementById('city').value = '';
})

.catch(function(err){

})
})
