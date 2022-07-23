var budgetData = JSON.parse(localStorage.getItem("budgetVal")) || {};
let btn = document.getElementById( "submit-btn" );

btn.addEventListener('click', function (e) {
  e.preventDefault();

  var _health = document.getElementById("health").value;
  var _food = document.getElementById("food").value;
  var _loan = document.getElementById("loan").value;
  var _entertainment = document.getElementById("entertainment").value;
  var _transportation = document.getElementById("transportation").value;

  const budgetData = { "inputHealth" : _health, "inputFood" : _food, "inputLoan" : _loan, "inputEntertainment" : _entertainment, "inputTransportation" : _transportation};

  var _health = document.getElementById("health").value;
  var _food = document.getElementById("food").value;
  var _loan = document.getElementById("loan").value;
  var _entertainment = document.getElementById("entertainment").value;
  var _transportation = document.getElementById("transportation").value;

  localStorage.setItem( "budgetVal", JSON.stringify( budgetData ));
  
  /*
  document.getElementById("health").innerHTML = budgetOBJ._amount;
  document.getElementById("food").innerHTML = budgetOBJ._food;
  document.getElementById("loan").innerHTML = budgetOBJ._loan;
  document.getElementById("entertainment").innerHTML = budgetOBJ._entertainment;
  document.getElementById("transportation").innerHTML = budgetOBJ._transportation;*/

});
window.onload = function() {  
    const _budgetData = localStorage.getItem("budgetVal") ? JSON.parse(localStorage.getItem("budgetVal")) : null;
console.log(_budgetData);
        document.getElementById("health").value = _budgetData ? _budgetData.inputHealth : 0;
        document.getElementById("food").value = _budgetData? _budgetData.inputFood : 0;
        document.getElementById("loan").value = _budgetData? _budgetData.inputLoan : 0;
        document.getElementById("entertainment").value = _budgetData? _budgetData.inputEntertainment : 0;
        document.getElementById("transportation").value = _budgetData? _budgetData.inputTransportation : 0;
}