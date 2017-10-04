

class itemAdapter {
  constructor(data) {
    this.name  = data.name
    this.brand = data.brand
    this.category = data.category
    this.temp_start = data.temp_start
    this.temp_end = data.temp_end
    this.url = data.url
    this.image = data.image
    this.baseUrl = `http://localhost:3000/api/v1/items/`
    // ${this.id}` //???
  }

  // getItem() {
  //   return fetch(this.baseUrl).then(res => res.json())
  // }
  //
  // createItem(body) {
  //   const itemCreateParams = {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type':'application/json'
  //     },
  //     body: JSON.stringify({body})
  //   }
  //   return fetch(this.baseUrl, itemCreateParams).then(res => res.json())
  // }

}



// fetch("http://192.168.3.129:3000/posts", {
// method: "POST",
// headers: {'Accept': 'application/json',
//     'Content-Type': 'application/json'},
// body: JSON.stringify({title: "YOOO Shishkabob"})
// }).then(res => res.json()).then(res => console.log(res))
