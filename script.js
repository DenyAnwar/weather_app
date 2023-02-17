const weather = document.querySelector('.weather');
const searchButton = document.querySelector('button[role="search"]');
const cityField = document.querySelector('input[type="search"]');
const forecastRow = document.querySelector('.forecast > .row');
const dateElement = document.querySelector('.header__date');
const geolocateIcones = document.querySelector('.header__geolocate');

const icons = {
	'01d': 'wi-day-sunny',
  '02d': 'wi-day-cloudy',
  '03d': 'wi-cloud',
  '04d': 'wi-cloudy',
  '09d': 'wi-showers',
  '10d': 'wi-rain',
  '11d': 'wi-thunderstorm',
  '13d': 'wi-snow',
  '50d': 'wi-fog',
  '01n': 'wi-night-clear',
  '02n': 'wi-night-alt-cloudy',
  '03n': 'wi-cloud',
  '04n': 'wi-night-cloudy',
  '09n': 'wi-night-showers',
  '10n': 'wi-night-rain',
  '11n': 'wi-night-thunderstorm',
  '13n': 'wi-night-alt-snow',
  '50n': 'wi-night-fog',
};

function printTodayDate() {
	const today = new Date();
	const options = {
		weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
	};
	dateElement.insertAdjacentText('afterbegin', today.toLocaleString('en-us', options));
}


printTodayDate();