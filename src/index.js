const app = new App();

let form;
let list;
let adapter;

document.addEventListener('DOMContentLoaded', function() {
	form = document.querySelector('.ui-form');
	list = document.querySelector('#weather-list');
	form.addEventListener('submit', searchCities);
});

function searchCities(ev) {
	ev.preventDefault();
	const term = ev.target.querySelector('input').value;
	ev.target.querySelector('input').value = ''

  let divs = document.querySelectorAll('.day');
  divs.forEach(day => {
    document.getElementById('place-image').src = '';
    let low = parseInt(day.querySelectorAll('p')[3].innerText = "");
    let high = parseInt(day.querySelectorAll('p')[1].innerText ="");
    });

	list.innerText = '';
	let clothingArea = document.querySelector('#show-clothing');
	clothingArea.innerText = '';
	document.getElementById('place-image').src = '';

	adapter = new weatherAdapter(term);
	adapter.getWeather().then(res => appendWeather(res))
	.then(json => getHighGetLow(json))
}



function getHighGetLow(json) {
	let divs = document.querySelectorAll('.day');
	currentDay = document.querySelector('.current');
	currentDay.addEventListener('click', function(ev) {
		ev.preventDefault();
		document.getElementById('place-image').src = ' ';
		let low = parseInt(currentDay.querySelector('.low-temp').innerText);
    let high = parseInt(currentDay.querySelector('.high-temp').innerText);
		pickOutfit(low, high);
	});
	divs.forEach(day => {
		day.addEventListener('click', function(ev) {
			ev.preventDefault();
			document.getElementById('place-image').src = '';
			let low = parseInt(day.querySelectorAll('p')[3].innerText);
			let high = parseInt(day.querySelectorAll('p')[1].innerText);
			pickOutfit(low, high);
		});
	});
}

function pickOutfit(low, high) {
  document.querySelector('#clothes').innerHTML = ""
	fetch('http://localhost:3000/api/v1/pickOutfit', {
		method: 'post',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ highTemp: high, lowTemp: low })
	})
		.then(res => res.json())
		.then(json => createItem(json));
}

// day3 .querySelectorAll("p")[3] LOW TEMP
//  day3 .querySelectorAll("p")[1] HIGH TEMP

//  clickable.forEach(function(button){
//    button.addEventListener('click', function getItem() {
//       fetch(`http://localhost:3000/api/v1/items/2`)
//       .then(res => res.json())
//       .then(json => adapter = new itemAdapter(json))
//      //  .then(json => createItem(json))
//     })

function appendWeather(data) {
	// document.querySelector('.city').innerHTML = data.city.name;
	document.querySelector('.high-temp').innerText = Math.round(
		data.Days[1].temp_max_f
	);
	document.querySelector('.low-temp').innerText = Math.round(
		data.Days[1].temp_min_f
	);
	document.querySelector('#today-description').innerText =
		data.Days[1].Timeframes[3].wx_desc;
	//day 1
	document.getElementById('day-1-high').innerText = Math.round(
		data.Days[2].temp_max_f
	);
	document.getElementById('day-1-low').innerText = Math.round(
		data.Days[2].temp_min_f
	);
	document.getElementById('day-1-des').innerText =
		data.Days[2].Timeframes[3].wx_desc;
	//day 2
	document.getElementById('day-2-high').innerText = Math.round(
		data.Days[3].temp_max_f
	);
	document.getElementById('day-2-low').innerText = Math.round(
		data.Days[3].temp_min_f
	);
	document.getElementById('day-2-des').innerText =
		data.Days[3].Timeframes[3].wx_desc;
	//day 3
	document.getElementById('day-3-high').innerText = Math.round(
		data.Days[4].temp_max_f
	);
	document.getElementById('day-3-low').innerText = Math.round(
		data.Days[4].temp_min_f
	);
	document.getElementById('day-3-des').innerText =
		data.Days[4].Timeframes[3].wx_desc;
	//day 4
	document.getElementById('day-4-high').innerText = Math.round(
		data.Days[5].temp_max_f
	);
	document.getElementById('day-4-low').innerText = Math.round(
		data.Days[4].temp_min_f
	);
	document.getElementById('day-4-des').innerText =
		data.Days[5].Timeframes[3].wx_desc;
}

function createItem(json) {
	let arrOfItems = [];
	json.forEach(function(item) {
		let newItem = new Item(item);
		arrOfItems.push(newItem);
	});
	appendItem(arrOfItems);
}


function appendItem(arrOfItems) {
	//  let clothingArea = document.querySelector('#show-clothing')

	arrOfItems.forEach(function(item) {
		var newClothingArea = document.createElement('p');
		document.querySelector('#clothes').appendChild(newClothingArea);
		var newImageSpot = document.createElement('img');
		let xx = document.querySelector('#clothes').appendChild(newImageSpot);
		xx.src = item.image;
		newClothingArea.innerHTML = `
                  <p>
                   <b>${item.brand}</b></br>
                     ${item.name}</br>
                     ${item.category}</br>
                     <a href="${item.url}">Find me online</a></br>
                 </p>`;
	});
}
