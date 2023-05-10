
export default class Section {
  constructor({items, renderer}, containerSelector) {
    this._arrayCards = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  
//рендер создает из каждого элемента массива (name link) карточку 
// модифиц функция creatCard будет по сути рендером
render() {
    this._arrayCards.forEach(element => {
    this.addItem(this._renderer(element))   
  })
}

addItem(domElement) {
  this._container.append(domElement) 
}
}