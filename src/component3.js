export function launchComponent3(){
    let parent = document.createElement('div');
    parent.className = "box-component3";
    let child = document.createElement('p');
    child.id = "text-component3";
    parent.appendChild(child);
    return parent;
    }