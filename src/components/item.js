class Item {
  constructor() {
    this.name = name
    this.brand = brand
    this.type = type
    this.url = url
    this.image = image
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
      <li>Type: ${this.type}</li>
      <li>URL: ${this.url}</li>
      <li>Image: ${this.image}</li>
    </ul>`
  }



}
