const tableRow = document.getElementById("tableRow");

const opAddBtn = document.querySelector(".optionAddBtn"),
    opDelBtn = document.querySelector(".optionDelBtn"),
    itAddBtn = document.querySelector(".itemAddBtn");

const itemRow = document.getElementById("itemSection"),
    itemContent = document.getElementById("items"),
    items = document.getElementsByClassName("items");;

const showBtn = document.querySelector(".showBtn"),
    hideBtn = document.querySelector(".hideBtn"),
    toggleBtn = document.querySelector(".toggleBtn"),
    section = document.querySelector(".section");

function addRow() {
    opAddBtn.addEventListener('click', function () {
        var rowCount = tableRow.rows.length;
        if (rowCount < 10) {
            var row = tableRow.insertRow(rowCount);
            // insertRow(index) = 새로 생성될 행이 테이블에 들어갈 위치인 index값(입력하지 않으면 default -1이며 테이블의 가장 마지막 행에 새로운 행 추가됨)
            var colCount = tableRow.rows[0].cells.length;
            row.id = rowCount;
            for (var i = 0; i < colCount; i++) {
                var cell = row.insertCell(i);
                cell.outerHTML = tableRow.rows[0].cells[i].outerHTML; // rows는 tr, cells는 td
            }
        } else {
            alert("더이상 추가할 수 없습니다.");
        }
    });
}
// innerHTML은 지정 요소 태그를 제외한 안쪽 태그값만 가져옴(자기자신 미포함)
// outerHTML은 지정 요소 태그를 포함하여 값을 가져옴(자기자신 포함)

function delRow() {
    opDelBtn.addEventListener('click', function () {
        var rowCount = tableRow.rows.length;
        for (var i = 0; i < rowCount; i++) {
            var row = tableRow.rows[i];
            var checkBtn = row.cells[5].childNodes[1];
            if (checkBtn !== null && checkBtn.checked === true) {
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

function addItem() {
    itAddBtn.addEventListener('click', function () {
        var itemCount = items.length;
        if (itemCount < 5) {
            var newItem = itemContent.cloneNode(true);
            itemRow.appendChild(newItem);
            newItem.id = itemCount;
            // append() vs appendChild() vs innerHTML
            // apppendChild는 추가, innerHTML은 교체
            // append는 자바스크립트 메소드, appendChild는 DOM 메소드
        } else {
            alert("더이상 추가할 수 없습니다.");
        }
    });
}

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
// 'visibility = hidden'은 영역을 차지한 채로 안보이는 속성
// 'display = none'은 영역을 차지하지 않고 안보임
// 'display = block'은 가로영역을 모두 채움

function init() {
    addRow();
    delRow();
    addItem();
    show();
    hide();
    toggle();
}
init();