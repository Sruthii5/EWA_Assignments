function addToList() {
    var input = document.getElementById('input').value;
    if (input == null || input == "") {
        alert("Please provide the valid input ");
    } else {
        var node = document.createElement("LI");
        var textNode = document.createTextNode(input);
        node.appendChild(textNode);
        document.getElementById("list").appendChild(node);
        document.getElementById("input").value = "";
    }
}        
