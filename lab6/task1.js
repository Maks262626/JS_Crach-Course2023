class CssClass {
    constructor(name) {
      this.name = name;
      this.styles = {};
    }
  
    setStyle(property, value) {
      this.styles[property] = value;
    }
  
    removeStyle(property) {
      delete this.styles[property];
    }
  
    getCSS() {
      let css = `.${this.name} {\n`;
      for (const property in this.styles) {
        css += `  ${property}: ${this.styles[property]};\n`;
      }
      css += '}';
      return css;
    }
  }
  
  const myClass = new CssClass('className');
  myClass.setStyle('color', 'red');
  myClass.setStyle('font-size', '16px');
  console.log(myClass.getCSS()); 
  