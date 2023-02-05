let featchURL = "https://api.openweathermap.org/data/2.5/weather?q="

let cityName = '';
let apiKey = "a953ea1bb2aa05e480ed6c2a544d9ecc"

document.querySelector('.box').addEventListener('keyup', event => {

  let {keyCode, target: input }  = event

  if (keyCode === 13) {
    console.log(input.value)
    cityName = input.value
    weatherData(cityName)

    document.querySelector('.box').value = '' 
  } 
})

function weatherData(cityName){

    console.log('weather data function')
    fetch(`${featchURL}${cityName}&appid=${apiKey}`)
    .then(res => res.json())
    .then(cityData =>{
        console.log(cityData)

        document.querySelector('.city').innerHTML = `${cityData.name}, ${cityData.sys.country}`
        document.querySelector('.tem').innerHTML = `${Math.floor(cityData.main.temp - 273.15)}°c`
        document.querySelector('.weat').innerHTML = `${cityData.weather[0].main}`
        document.querySelector('.min-max').innerHTML = `Min ${Math.floor(cityData.main.temp_min - 273.15)}°c / Max ${Math.floor(cityData.main.temp_max - 273.15)}°c`
       
        let weaterStatus = `${cityData.weather[0].main}`
        // console.log('status', weaterStatus)

        document.querySelector('body').className = ''

        if(weaterStatus === 'Mist'){
            document.querySelector('body').classList.add('mist')
        }else if(weaterStatus === 'Clear'){
            document.querySelector('body').classList.add('clear')
        }else if(weaterStatus === 'Clouds'){
            document.querySelector('body').classList.add('clouds')
        }else{
            document.querySelector('body').className = ''
        }

    })
        
    
    .catch(err => alert('City not found')) 
}

weatherData('Bengaluru')