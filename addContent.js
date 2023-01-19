console.log("RUNNING JS")

function addElement() {
  // create a new div element
    const newDivStyle = {
        color: "white",
        "background-color": "red",
        "font-size": "40px",
        "position": "fixed",
        "top": "0px",
        "right": "0px"
    }
    const newDiv = document.createElement("div");
    newDiv.style = newDivStyle;
    // and give it some content
    const newContent = document.createTextNode("Hi there and greetings!");

    // add the text node to the newly created div
    newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
}
document.body.onload = addElement;

console.log("DONE")