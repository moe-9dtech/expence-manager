/**
 * =============================
 *     Expences Management JS    
 * =============================
*/

/** Global variables */
let _selectedIndex = null;

/* FORM Date VALIDATION */
var date = new Date();
var dateToday = date.getDate();
if ( dateToday < 10 ){
  dateToday = '0' + dateToday;
}

var dateMonth = date.getMonth() + 1;
if ( dateMonth < 10 ) {
  dateMonth = '0' + dateMonth;
}

var dateYear = date.getFullYear();
var dateMin = dateYear + "-" + dateMonth + "-" + dateToday;

document.getElementById( "date" ).setAttribute('min', dateMin);
var _maxDateToday = date.getDate() + 10;
var dateMax = dateYear + "-" + dateMonth + "-" + _maxDateToday;
document.getElementById( "date" ).setAttribute('max', dateMax); 
function dateValidation() {
if( document.getElementById( "date" ).value == "") {
  alert('Please select a valid date');    
      document.getElementById("date").focus();    
      return false;    
  }    
  return true;

}

/* Form Dropedown Validation */
function dropdownValidate() {    
  if (document.getElementById("dropdown").value == "") {    
      alert('Please select one option from the dropdown');    
      document.getElementById("dropdown").focus();    
      return false;    
  }    
  return true;    
}

/**Form Amount Validation */
function amountValidate() {
  var _amountField = document.getElementById("amount").value;
  if (_amountField == "" || isNaN(_amountField) || _amountField <250 || _amountField > 2500) {    
      alert('Amount Field accepts only numbers between 250 - 2500');    
      document.getElementById("amount").focus();    
      return false;    
  }    
  return true;    
}

/* SAVING DATA */
var tableData = JSON.parse(localStorage.getItem("tableResults")) || [];
let table = document.querySelector('table');
let btn = document.getElementById('submit-btn');
var _row = null; //for edit and update purposes
  
btn.addEventListener('click', function (e) {
  e.preventDefault();

  
  var _tableData = $('#expences').DataTable();
  //td.clear().destroy();
  

if ( document.getElementById("submit-btn").innerText == "Save" && dateValidation() && dropdownValidate() && amountValidate()){
  var inputDate = document.getElementById("date").value;
  var inputType = document.getElementById("dropdown").value;
  var inputAmount = document.getElementById("amount").value;
  var inputDescription = document.getElementById("description").value;

  const jsonOBJ = { "inputDate" : inputDate, "inputType" : inputType, "inputAmount" : inputAmount, "inputDescription" : inputDescription };
  
  tableData.push(jsonOBJ);
    
    var inputDate = document.getElementById("date").value;
    var inputType = document.getElementById("dropdown").value;
    var inputAmount = document.getElementById("amount").value;
    var inputDescription = document.getElementById("description").value;
    
    window.localStorage.setItem( "tableResults", JSON.stringify(tableData )); 

  /* APPENDING ROWS */
  var row = document.createElement('tr');
  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  var td4 = document.createElement('td');
  var td5 = document.createElement('td');

  td1.innerHTML = jsonOBJ.inputDate;
  td2.innerHTML = jsonOBJ.inputType;
  td3.innerHTML = jsonOBJ.inputAmount;
  td4.innerHTML = jsonOBJ.inputDescription;
  td5.innerHTML = `<span id="buttons"><input type="button" value="Edit" onclick="editRow(this)"> 
  <input type="button" value="Delete" onclick="deleteRow(this)"></span> `;

  row.appendChild(td1);
  row.appendChild(td2);
  row.appendChild(td3);
  row.appendChild(td4);
  row.appendChild(td5);
  //_tableData.destroy();  
  table.querySelector('tbody').appendChild(row);
  } else if (document.getElementById("submit-btn").innerText == "Update") {
    updateRow();
  } else return;

  
  //_tableData.rows.add(tableData);
  //_tableData.draw();
  
  formReset();
}); //btn.addEventListener

/* EDIT FUNCTIONALITY */
function editRow(td) {

  var rIndex, cIndex;
  for (var i = 0; i < table.rows.length; i++) {

    for (var j = 0; j < table.rows[i].cells.length; j++){
      table.rows[i].cells[j].onclick = function(){
        rIndex = this.parentElement.rowIndex;
        _selectedIndex = rIndex-1;
      };

    }

  }

  _selectedRow = td.parentElement.parentElement.parentElement;
  document.getElementById("date").value = _selectedRow.cells[0].innerHTML;
  document.getElementById("dropdown").value = _selectedRow.cells[1].innerHTML;
  document.getElementById("amount").value = _selectedRow.cells[2].innerHTML;
  document.getElementById("description").value = _selectedRow.cells[3].innerHTML;
  document.getElementById("submit-btn").innerText = "Update";
}
/* Update Row Functionality */
function updateRow() {
var inputDate = document.getElementById("date").value;
var inputType = document.getElementById("dropdown").value;
var inputAmount = document.getElementById("amount").value;
var inputDescription = document.getElementById("description").value;

let tempJson = { "inputDate" : inputDate, "inputType" : inputType, "inputAmount" : inputAmount, "inputDescription" : inputDescription };

tableData.splice(_selectedIndex,1,tempJson);
localStorage.setItem("tableResults", JSON.stringify(tableData));

_selectedRow.cells[0].innerHTML = tempJson.inputDate;
_selectedRow.cells[1].innerHTML = tempJson.inputType;
_selectedRow.cells[2].innerHTML = tempJson.inputAmount;
_selectedRow.cells[3].innerHTML = tempJson.inputDescription;

document.getElementById("submit-btn").innerText = "Save";
}
 
//   /* RESET FUNCTIONALITY */
function formReset() {
  document.getElementById("date").value = "";
  document.getElementById("dropdown").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("description").value = "";
  _selectedRow = null;
}

 /* DELETE FUNCTIONALITY */
function deleteRow(td){
  row = td.parentElement.parentElement.parentElement;
  document.getElementById("expences").deleteRow(row.rowIndex);
  let data = JSON.parse(localStorage.getItem("tableResults"))
  // Get index of object
  const index = data.indexOf(td)
  // Splice the array at the index of the object
  data.splice(index, 1)
  // Save back to localStorage
  localStorage.setItem("tableResults", JSON.stringify(data))
}

/** RETRIEVE TABLE AFTER RELOAD */
window.onload = function() {  
  const tbdata = localStorage.getItem("tableResults");
  if (tbdata !== null ){
    const store = JSON.parse(tbdata);
    
    for(let i = 0; i < store.length; i++){
      var row = document.createElement('tr');
      var td1 = document.createElement('td');
      var td2 = document.createElement('td');
      var td3 = document.createElement('td');
      var td4 = document.createElement('td');
      var td5 = document.createElement('td');
      
        td1.innerHTML = store[i].inputDate;
        td2.innerHTML = store[i].inputType;
        td3.innerHTML = store[i].inputAmount;
        td4.innerHTML = store[i].inputDescription;
        td5.innerHTML = `<span id="buttons"><input type="button" value="Edit" onclick="editRow(this)"> 
                                            <input type="button" value="Delete" onclick="deleteRow(this)">
                        </span>`;
      
      row.appendChild(td1);
      row.appendChild(td2);
      row.appendChild(td3);
      row.appendChild(td4);
      row.appendChild(td5);

      table.querySelector('tbody').appendChild(row);

      if(i == store.length - 1) {
        _tableData = $('#expences').DataTable({
          // paging: true,
          pageLength: 5
        });
      }
    }
  }
} //window.onload