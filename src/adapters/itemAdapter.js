class itemAdapter {
  constructor(zipCode) {
    this.zipCode = zipCode
    this.baseUrl = `api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&APPID=0a216dd04aa19249c4ab195fd5925bab`
  }

  getItem() {
    return fetch(this.baseUrl).then(res => res.json())
  }

  createItem(body) {
    const itemCreateParams = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({body})
    }
    return fetch(this.baseUrl, itemCreateParams).then(res => res.json())
  }

}



// fetch("http://192.168.3.129:3000/posts", {
// method: "POST",
// headers: {'Accept': 'application/json',
//     'Content-Type': 'application/json'},
// body: JSON.stringify({title: "YOOO Shishkabob"})
// }).then(res => res.json()).then(res => console.log(res))
