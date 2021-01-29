import './style.scss';

function masterObject(name){
    this.name = name;
    this.say = function(){return 'Hello '+this.name +', how are You today?';}
}

let newObject = new masterObject('Michał');
console.log(newObject.say());

document.getElementById("text1").innerHTML = newObject.say();

let myFun = function(){
    let a = newObject.name;
    if (a === 'Michał') {
        return 'Gooood';
    } else {
        return 'hyyy?';
    }
}

document.getElementById("text2").innerHTML = myFun();
