class weatherAdapter {
  constructor(zipCode) {
    this.zipCode = zipCode
    this.baseUrl = `http://api.weatherunlocked.com/api/forecast/us.${zipCode}?app_id=d0698538&app_key=9277c20d36663b4500768db4cba4a647`
  }


  getWeather() {
    return fetch(`${this.baseUrl}`)
    .then(res => res.json())
  }
}
