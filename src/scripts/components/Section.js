
export default class Section {
  constructor(renderer, containerSelector) {
    // this._arrayCards = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  //рендер создает из каждого элемента массива (name link) карточку 
  // модифиц функция creatCard будет по сути рендером
  render(items) {
    items.forEach(element => {
      this.addItem(this._renderer(element))
    })
  }

  addNewItem(domElement) {
    this._container.prepend(domElement)
  }

  addItem(domElement) {
    this._container.append(domElement)
  }

}