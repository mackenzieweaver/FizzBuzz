// Fizz Buzz
function FizzBuzz(fizz, buzz, upperLimit) {
    if (isNaN(upperLimit)) {
        swal("Your Fizz is not Buzzin", "Because you didn't enter an upper limit", "error");
    }
    removeAllChildNodes(document.getElementById("fizz-buzz-table-body"));
    const table = document.getElementById("fizz-buzz-table-body");
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
            // insert fizz
            cell = row.insertCell();
            text = document.createTextNode("Fizz");
            cell.style.color = '#66d9cd';
            cell.appendChild(text);
        } else {
            // insert x
            cell = row.insertCell();
            text = document.createTextNode("x");
            cell.appendChild(text);
        }
        // buzz table data
        if (i % buzz == 0) {
            // insert buzz
            cell = row.insertCell();
            text = document.createTextNode("Buzz");
            cell.style.color = '#c22722';
            cell.appendChild(text);
        } else {
            // insert x
            cell = row.insertCell();
            text = document.createTextNode("x");
            cell.appendChild(text);
        }
        // fizz buzz table data
        if ((i % fizz == 0) && (i % buzz == 0)) {
            // insert fizz buzz
            cell = row.insertCell();
            text = document.createTextNode("Fizz Buzz");
            cell.style.color = '#c68a21';
            cell.appendChild(text);
        } else {
            // insert x
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
    removeAllChildNodes(document.getElementById("fizz-buzz-table-body"));
    document.getElementById("fizz-num").focus();
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// Export Table
function exportReportToExcel() {
    if (document.getElementById("fizz-buzz-table-body").childElementCount == 0) {
        swal("Table is empty", "Why would you want to download that?", "error");
        return;
    }
    let table = document.getElementById("fizz-buzz-table"); // you can use document.getElementById('tableId') as well by providing id to the table tag
    TableToExcel.convert(table, { // html code may contain multiple tables so here we are refering to 1st table tag
        name: `fizzbuzz.xlsx`, // fileName you could use any name
        sheet: {
            name: 'Sheet 1' // sheetName
        }
    });
}