class mainObject2 {
    constructor(name) {
        this.name = name;
        this.say = function () {
            return `Hello, my name is ${this.name}.</br> I'm an ${typeof myObject2} from component2.js`;
        };
    }
}

let myObject2 = new mainObject2('Mario');
console.log(myObject2);
console.log(typeof myObject2);

export function launchComponent2(){
    let parent = document.createElement('div');
    parent.className = "box-component2";
    let child = document.createElement('p');
    child.id = "text-component2";
    child.innerHTML = myObject2.say();
    parent.appendChild(child);
    return parent;
    }

export function imgCreate2() {
    let img = document.createElement('img');
    img.className = 'img-component2'
    img.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/25247b92-6844-4fef-8ed8-5055cc35bf58/ddrcvo0-bab4d95f-0439-4867-ab96-c03fdd0da2b3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMjUyNDdiOTItNjg0NC00ZmVmLThlZDgtNTA1NWNjMzViZjU4XC9kZHJjdm8wLWJhYjRkOTVmLTA0MzktNDg2Ny1hYjk2LWMwM2ZkZDBkYTJiMy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.n3q84y9yXtid45kE2GUU_R37lRVjCZXErW_krPJqbJY";
    return img;
    }