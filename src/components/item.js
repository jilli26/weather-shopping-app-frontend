class Item {
  constructor(data) {
    this.name = data.name
    this.brand = data.brand
    this.category = data.category
    this.url = data.url
    this.image = data.image
    Item.all.push(this)
  }

  fetchItem() {

  }

  appendItem() {

  }

  render(){
    return
    `<ul>
      <li>Name: ${this.name}</li>
      <li>Brand: ${this.brand}</li>
      <li>Type: ${this.category}</li>
    </ul>`
  }



}

Item.all = []
