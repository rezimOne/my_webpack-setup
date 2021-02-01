export function launchComponent1(){
    let parent = document.createElement('div');
    parent.className = "box-component1";
    let child = document.createElement('p');
    child.id = "text-component1";
    child.innerHTML = myObject1.say();
    parent.appendChild(child);
    return parent;
    }
    
    class mainObject1 {
        constructor(name) {
            this.name = name;
            this.say = function () {
            return "Hi, my name is " + this.name + ".</br> I'am an object from component1.";
            };
        }
    }

let myObject1 = new mainObject1('Sigma');
console.log(myObject1);
console.log(typeof myObject1);