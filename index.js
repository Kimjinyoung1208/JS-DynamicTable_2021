var tableRow = document.getElementById("tableRow");
// 해당 아이디의 요소 선택

var addBtn = document.querySelector(".optionAddBtn"),
    delBtn = document.querySelector(".optionDelBtn");

function addRow() {
    addBtn.addEventListener('click', function () {
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
    delBtn.addEventListener('click', function () {
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

function init() {
    addRow();
    delRow();
}
init();