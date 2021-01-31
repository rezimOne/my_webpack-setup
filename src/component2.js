export default function myFunction2() {
  const element = document.createElement('div');
  element.className = 'text2';
  element.innerHTML = subObject2.say();
  return element;
  }

function mainObject2(name){
  this.name = name;
  this.say = function(){return "Hello, I'm " + this.name + ' :)';}
}

let subObject2 = new mainObject2('Michał');

