export default (text = "How are You today?") => {
    const element = document.createElement("h2");


    element.innerHTML = text;

    return element;
  };