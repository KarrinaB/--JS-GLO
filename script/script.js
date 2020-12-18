'use strict';

function DomElement( selector = '.selector', height = '300px', width = '300px', bg = 'tomato', fontSize = '20px', text = 'Hello!'){
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.text = text;
};
  
  DomElement.prototype.getElems = function () {
    const elemTag = this.selector.slice(0,1) == '.' ? 'div' : 'p';
    const elem = document.createElement(elemTag);
    this.selector.slice(0,1) == '.' ? elem.className = this.selector.slice(1) : elem.id = this.selector.slice(1);
    elem.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize}`; 
    elem.textContent = this.text;
    document.body.append(elem);
  };
  
  let dom = new DomElement('.my-box', '400px', '400px', ' #ffc0cb', '36px', 'Привет, мир!');
dom.getElems();




 




