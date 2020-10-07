// Fizz Buzz
function FizzBuzz(fizz, buzz, upperLimit) {

    const table = document.getElementById("fizz-buzz-table");

    for (let i = 1; i <= upperLimit; i++) {
        // new table row
        let row = table.insertRow();
        row.setAttribute("scope", "row");

        // # table data
        let cell = row.insertCell();
        let text = document.createTextNode(i.toString());
        cell.appendChild(text);

        // fizz table data
        if (i % fizz == 0) {
            console.log('Fizz');
            // fizz data
            cell = row.insertCell();
            text = document.createTextNode("Fizz");
            cell.appendChild(text);
        } else {
            // fizz data
            cell = row.insertCell();
            text = document.createTextNode("x");
            cell.appendChild(text);
        }
        if (i % buzz == 0) {
            console.log('Buzz');
            // buzz data
            cell = row.insertCell();
            text = document.createTextNode("buzz");
            cell.appendChild(text);
        } else {
            // buzz data
            cell = row.insertCell();
            text = document.createTextNode("x");
            cell.appendChild(text);
        }
        if ((i % fizz == 0) && (i % buzz == 0)) {
            console.log('Fizz Buzz');
            // fizz buzz data
            cell = row.insertCell();
            text = document.createTextNode("Fizz Buzz");
            cell.appendChild(text);
        } else {
            // fizz buzz data
            cell = row.insertCell();
            text = document.createTextNode("x");
            cell.appendChild(text);
        }
    }
}

function ClearFizzBuzz() {
    document.getElementById("fizz-num").value = '';
    document.getElementById("buzz-num").value = '';
    document.getElementById("upper-limit").value = '';
    document.getElementById("fizz-buzz-table").remove();
    document.getElementById("fizz-num").focus();
}

(function BuildTable() {
    const table = document.getElementById("fizz-buzz-table");
    BuildTableHead(table);
})();

function BuildTableHead(table) {
    let thead = table.createTHead();
    let row = thead.insertRow();

    let th1 = document.createElement("th");
    let text1 = document.createTextNode("#");
    th1.appendChild(text1);
    row.appendChild(th1);

    let th2 = document.createElement("th");
    let text2 = document.createTextNode("Fizz");
    th2.appendChild(text2);
    row.appendChild(th2);

    let th3 = document.createElement("th");
    let text3 = document.createTextNode("Buzz");
    th3.appendChild(text3);
    row.appendChild(th3);

    let th4 = document.createElement("th");
    let text4 = document.createTextNode("Fizz Buzz");
    th4.appendChild(text4);
    row.appendChild(th4);

    document.getElementsByTagName("TH")[0].setAttribute("scope", "col");
    document.getElementsByTagName("TH")[1].setAttribute("scope", "col");
    document.getElementsByTagName("TH")[2].setAttribute("scope", "col");
    document.getElementsByTagName("TH")[3].setAttribute("scope", "col");
}