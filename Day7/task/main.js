// let input = document.getElementById("input").value;
// let node = document.createElement("LI");
// let textnode = document.createTextNode(input);
// node.appendChild(textnode);
// document.getElementById("ol").appendChild(node);
// document.getElementById("input").value = "";
// let chec = Math.floor(Math.random() * 10);

// function hello() {

//     var input = document.getElementById('input').value;
//     document.getElementById('ol').innerHTML += "<input type='checkbox' id='+" + chec.toString() + "+' onclick='if(this.checked){myFunction()}' /> " + "<p id='+" + chec.toString() + "+'>" + input + "</p>" + "<br>";
//     document.getElementById('input').value = '';



// }

// function myFunction() {
//     document.getElementById(chec.toString()).innerText = "<s>" + input + "</s>"
// }
let DATA = [];

function hello() {
    let input = document.getElementById('input').value;
    DATA.push(input);
    document.getElementById('ol').innerHTML = '';

    for (let i = 0; i < DATA.length; i++) {
        document.getElementById('ol').innerHTML +=
            "<div id=" + i + "><input type='checkbox' onclick='if(this.checked){lining(this.id)}else{lininh1(this.id)}' id=" + i + "><span>" + DATA[i] + "</span> <button onclick='edit(this.id)' id=" + i + ">edit</button><button onclick='add(this.id)' id=" + i + ">change</button><button onclick='del(this.id)' id=" + i + ">del</button><br></div>";
    }

    document.getElementById('input').value = '';
}

function lining(id) {
    document.getElementById(id).nextSibling.innerHTML = "<s>" + DATA[id] + "</s>";
}

function lininh1(id) {
    document.getElementById(id).nextSibling.innerHTML = DATA[id];
}

function edit(id) {
    document.getElementById(id).nextSibling.innerHTML = "<input type='text' id='hello2' value='" + DATA[id] + "'>";
}

function add(id) {
    var val = document.getElementById('hello2').value;
    DATA[id] = val;
    document.getElementById(id).nextSibling.innerHTML = DATA[id];
}

function del(id) {
    document.getElementById(id).innerHTML = '';
    DATA.splice(1, id);
}

function remove() {
    document.getElementById("ol").innerHTML = "";
    DATA = [];
}