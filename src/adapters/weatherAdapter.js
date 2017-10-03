class weatherAdapter {
  constructor(zipCode) {
    this.zipCode = zipCode
    this.baseUrl = `http://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&APPID=0a216dd04aa19249c4ab195fd5925bab`
  }

  getItem() {
    return fetch(`${this.baseUrl}`)
    .then(res => res.json())
  }

}

//cityName = res.city.name
//
