/**
 * =============================
 *     Expences Management JS    
 * =============================
*/
 
  /* SAVING DATA */
 
  var tableData = [];
  let table = document.querySelector('table');
  let btn = document.getElementById('submit-btn');
  
  btn.addEventListener('click', function (e) {
    e.preventDefault();
  
  
    var i = 0;
      
    var inputDate = document.getElementById("date").value;
    var inputType = document.getElementById("dropdown").value;
    var inputAmount = document.getElementById("amount").value;
    var inputDescription = document.getElementById("description").value;
  
    const jsonOBJ = { "inputDate" : inputDate, "inputType" : inputType, "inputAmount" : inputAmount, "inputDescription" : inputDescription};
    var store = JSON.parse ( window.localStorage.getItem("result") );
    //for (i in jsonOBJ) {
  
    tableData.push(jsonOBJ);
      
      var inputDate = document.getElementById("date").value;
      var inputType = document.getElementById("dropdown").value;
      var inputAmount = document.getElementById("amount").value;
      var inputDescription = document.getElementById("description").value;
      
      window.localStorage.setItem( "tableResults", JSON.stringify(tableData ));
      //document.getElementById("data").innerHTML = localStorage.getItem( "tableResults");
  
    /* CLONING BUTTONS */
    // var editButton = document.getElementById("buttons");
    // var buttonsCopy = editButton.cloneNode(true);
    console.log("separate data:    " + inputDate, inputType, inputAmount, inputDescription);
    console.log ( "array:     " + tableData + "array length:     " + tableData.length);
    console.log( "tableData[i]    " + tableData);
    /* APPENDING ROWS */
  
    var editButton = document.getElementById("buttons");
    //var buttonsCopy = editButton.cloneNode(true);
      
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
    //td5.insertAdjacentElement("afterbegin", buttonsCopy); 
  
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    //row.appendChild(td5);
  
    table.querySelector('tbody').appendChild(row);
  }); 
  
  /* DELET FUNCTIONALITY */
  
  function deleteRow(r) {
      var i = r.parentNode.parentNode.rowIndex;
      
  
  
      document.getElementsByName("table").deleteRow(i);
    }
    
  //   function deleteRow(btn) {
  //     var row = btn.parentNode.parentNode;
  //     row.parentNode.removeChild(row);
  //   }
  