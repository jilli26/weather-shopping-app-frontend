
const app = new App()

let form
let list
let show
let adapter

document.addEventListener("DOMContentLoaded", function(){
  form = document.querySelector('.ui-form')
  list = document.querySelector('#weather-list')
  show = document.querySelector('#show')
  form.addEventListener('submit', searchCities)
})


function searchCities(ev) {
  ev.preventDefault()
  const term = ev.target.querySelector('input').value
  ev.target.querySelector('input').value = ""

  list.innerText = ""
  show.innerText = ""
  let clothingArea = document.querySelector('#show-clothing')
  clothingArea.innerText = ""
  document.getElementById('place-image').src = ""

  // Article.all = []

  adapter = new weatherAdapter(term)
  adapter.getWeather().then(res => appendWeather(res))
}


function appendWeather(data) {
  highestTemps(data)
  lowestTemps(data)
  getDescriptions(data)
  // today
  document.querySelector(".city").innerHTML = data.city.name
  document.querySelector(".high-temp").innerText = convertedHighTemps[0]
  document.querySelector(".low-temp").innerText = convertedLowTemps[0]
  document.querySelector("#today-description").innerText = descriptions[0]
  //day 1
  document.getElementById("day-1-high").innerText = convertedHighTemps[1]
  document.getElementById("day-1-low").innerText = convertedLowTemps[1]
  document.getElementById("day-1-des").innerText = descriptions[1]
  //day 2
  document.getElementById("day-2-high").innerText = convertedHighTemps[2]
  document.getElementById("day-2-low").innerText = convertedLowTemps[2]
  document.getElementById("day-2-des").innerText = descriptions[2]
  //day 3
  document.getElementById("day-3-high").innerText = convertedHighTemps[3]
  document.getElementById("day-3-low").innerText = convertedLowTemps[3]
  document.getElementById("day-3-des").innerText = descriptions[3]
  //day 4
  document.getElementById("day-4-high").innerText = convertedHighTemps[4]
  document.getElementById("day-4-low").innerText = convertedLowTemps[4]
  document.getElementById("day-4-des").innerText = descriptions[4]
  }

  function appendArticle(headline){
    show.html('')
    article = Article.findArticle(headline)
    html = article.render()
    show.append(html)
  }

  function highestTemps(data) {
    //temp is highest at 12 pm; push in array all the 12pm temps
    highTemps = []
    data.list.forEach(function(weather){
      if (weather.dt_txt.slice(11, 13) === "15") {
        highTemps.push(weather.main.temp)
      }
    })
     convertHighTemp(highTemps)
  }

  function convertHighTemp(highTemps){
    convertedHighTemps = []
    highTemps.forEach(function(temp){
      let newTemp = Math.round(((temp - 273.15) * 1.8) + 32)
      convertedHighTemps.push(newTemp)
      return convertedHighTemps
    })
  }

  function lowestTemps(data) {
    //temp is lowest at 3 am; push in array all the 12pm temps
    lowTemps = []
    data.list.forEach(function(weather){
      if (weather.dt_txt.slice(11, 13) === "06") {
        lowTemps.push(weather.main.temp)
      }
    })
     convertLowTemp(lowTemps)
  }

  function convertLowTemp (){
    convertedLowTemps = []
    lowTemps.forEach(function(temp){
      let newTemp = Math.round(((temp - 273.15) * 1.8) + 32)
      convertedLowTemps.push(newTemp)
      return convertedLowTemps
    })
  }

  function getDescriptions(data){
    descriptions = []
    data.list.forEach(function(weather){
      descriptions.push(weather.weather[0].description)
    })
  }

  function showItems(day){
    show.innerHTML = ''
    article = Article.findArticle(headline)
    html = article.render()
    show.append(html)
  }



    let clickable = document.querySelectorAll(".day")
      clickable.forEach(function(button){
        button.addEventListener('click', function getItem() {
           fetch(`http://localhost:3000/api/v1/items/2`)
           .then(res => res.json())
           .then(json => adapter = new itemAdapter(json))
           .then(json => createItem(json))
         })

         function createItem(json){
           let newItem = new Item(json)
           appendItem(newItem)
         }

         function itemRender(newItem){
           var image = newItem.image
           document.getElementById('place-image').src = image
          //  debugger;
           return `
           <p>
            <b>${newItem.brand}</b></br>
              ${newItem.name}</br>
              ${newItem.category}</br>
              <a href="${newItem.url}">Find me online</a></br>
          </p>
                `
         }

         function appendItem(newItem){
           let clothingArea = document.querySelector('#show-clothing')
           clothingArea.innerHTML = itemRender(newItem)
         }

    })
