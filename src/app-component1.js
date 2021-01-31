export default (text = "Hello my friend :D") => {
    const element = document.createElement("h1");


    element.innerHTML = text;

    return element;
  };


