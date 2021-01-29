import './style.scss';

function masterObject(name){
    this.name = name;
    this.say = function(){return 'Hello '+this.name +', how are You today?';}
}

let newObject = new masterObject('Michał');
console.log(newObject.say());