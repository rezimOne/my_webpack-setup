class mainObject1 {
    constructor(name) {
        this.name = name;
        this.say = function () {
            return `Hi, my name is ${this.name}.</br> I'm an ${typeof myObject1} from component1.js`;
        };
    }
}

let myObject1 = new mainObject1('Yoshi');
console.log(myObject1);
console.log(typeof myObject1);


export function launchComponent1(){
    let parent = document.createElement('div');
    parent.className = "box-component1";
    let child = document.createElement('p');
    child.id = "text-component1";
    child.innerHTML = myObject1.say();
    parent.appendChild(child);
    return parent;
    }

export function imgCreate1() {
    let img = document.createElement('img');
    img.className = 'img-component1'
    img.src = "https://lh3.googleusercontent.com/proxy/0pU-9rhDAffkmZTrokVIm5KfIDwLnqr7pK5Q-KTR8KSJ539JYt-qAyO3Zb0pYck39A33-B1CmiAe7UHW0pmCRY0qoTWfFTHGIg";
    return img;
}