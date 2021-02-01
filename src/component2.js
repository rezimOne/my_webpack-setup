export function launchComponent2(){
    let parent = document.createElement('div');
    parent.className = "box-component2";
    let child = document.createElement('p');
    child.id = "text-component2";
    child.innerHTML = myObject2.say();
    parent.appendChild(child);
    return parent;
    }

    class mainObject2 {
        constructor(name) {
            this.name = name;
            this.say = function () {
                return "Hello, my name is " + this.name + ".</br> I'm an object from component2.";
            };
        }
    }

let myObject2 = new mainObject2('Pi');
console.log(myObject2);
console.log(typeof myObject2);