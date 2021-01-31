export default function myFunction1() {
  const element = document.createElement('div');
  element.className = 'text1';
  element.innerHTML = subObject1.say();
  return element;
  }

function mainObject1(name){
  this.name = name;
  this.say = function(){return "Hello, I'm " + this.name + ' :)';}
}

let subObject1 = new mainObject1('Funky Cow');



// export default (text = "Hello my friend :D") => {
//     const element = document.createElement("h1");
//     element.innerHTML = text;
//     return element;
//   };





