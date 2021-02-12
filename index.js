const tableRow = document.getElementById("tableRow");

const opAddBtn = document.querySelector(".optionAddBtn"),
    opDelBtn = document.querySelector(".optionDelBtn");

const itemRow = tableRow.querySelector("tr td:nth-child(1)"),
    itemContent = itemRow.getElementsByTagName("input");

// const itAddBtn = document.querySelector(".itemAddBtn");

const showBtn = document.querySelector(".showBtn"),
    hideBtn = document.querySelector(".hideBtn"),
    toggleBtn = document.querySelector(".toggleBtn"),
    section = document.querySelector(".section");

function addRow() {
    opAddBtn.addEventListener('click', function () {
        var rowCount = tableRow.rows.length;
        if (rowCount < 10) {
            var row = tableRow.insertRow(rowCount);
            var colCount = tableRow.rows[0].cells.length;
            row.id = rowCount;
            for (var i = 0; i < colCount; i++) {
                var newCell = row.insertCell(i);
                newCell.outerHTML = tableRow.rows[0].cells[i].outerHTML;
            }
        } else {
            alert("더이상 추가할 수 없습니다.");
        }
    });
}

function delRow() {
    opDelBtn.addEventListener('click', function () {
        var rowCount = tableRow.rows.length;
        for (var i = 0; i < rowCount; i++) {
            var row = tableRow.rows[i];
            var chkbox = row.cells[5].childNodes[1];
            if (chkbox !== null && chkbox.checked === true) {
                if (rowCount <= 1) {
                    alert("더이상 삭제할 수 없습니다.");
                } else {
                    tableRow.deleteRow(i);
                    rowCount--;
                    i--;
                }
            }
        }
    });
}

// function addItem() {
//     itAddBtn.addEventListener('click', function () {
//         var div = itemRow.createElement("div");
//         div.appendChild(itemContent);
//     });
// }

function show() {
    showBtn.addEventListener('click', function () {
        section.style.display = "block"
    });
}

function hide() {
    hideBtn.addEventListener('click', function () {
        section.style.display = "none"
    });
}

function toggle() {
    toggleBtn.addEventListener('click', function () {
        if (section.style.display === "none") {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    });
}

function init() {
    addRow();
    delRow();
    // addItem();
    show();
    hide();
    toggle();
}
init();