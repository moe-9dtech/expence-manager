//#07FEAB #00E7F0
let vals = JSON.parse(localStorage.getItem("tableResults"));
let initVals = {inputHealth: '0', inputFood: '0', inputLoan: '0', inputEntertainment: '0', inputTransportation: '0'};
let budget = JSON.parse(localStorage.getItem("budgetVal"));
let initBudget = {inputHealth: '0', inputFood: '0', inputLoan: '0', inputEntertainment: '0', inputTransportation: '0'};

let finalArray = {'Health': 0, 'Food': 0, 'Loan': 0, 'entertainment': 0, 'transportation': 0};
console.log(budget);
// get the sum of separate categories
  if ( vals == null || "" ){
    initVals.forEach(function(d){
      if(Object.keys(finalArray).indexOf(d.inputType) != -1)
      finalArray[`${d.inputType}`] += Number(d.inputAmount); 
      });

  } else {

    vals.forEach(function(d){
    if(Object.keys(finalArray).indexOf(d.inputType) != -1)
    finalArray[`${d.inputType}`] += Number(d.inputAmount); 
    });

    let exp_key = Object.keys(finalArray);
    let exp_val = Object.values(finalArray);
    let bud_val = Object.values(budget);
  }

  



const labels = exp_key;

const bar_data = {
  labels: labels,
  datasets: [{
    label: 'expense',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: exp_val,
  },
  {
    label: 'budget',
    backgroundColor: 'rgb(16, 66, 90)',
    borderColor: 'rgb(255, 99, 132)',
    data: bud_val,
  
  }
]
};

const line_data = {
  labels: labels,
  datasets: [{
    label: 'expense',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: exp_val,
  },
  {
    label: 'budget',
    backgroundColor: 'rgb(16, 66, 90)',
    borderColor: 'rgb(16, 66, 90)',
    data: bud_val,
  
  }
]
};

const bar_config = {
  type: 'bar',
  data: bar_data,
  options: {}
};

const line_config = {
  type: 'line',
  data: line_data,
  options: {}
};


/************************************
 *      Rendering the Chart
 * **********************************
 */

 const barChart = new Chart(
  document.getElementById('barChart'),
  bar_config
);
const lineChart = new Chart(
  document.getElementById('lineChart'),
  line_config
);
