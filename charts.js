
// let somedata = [{inputDate: '2022-07-26', inputType: 'Health', inputAmount: '2252', inputDescription: 'null 1'},
// {inputDate: '2022-07-28', inputType: 'Health', inputAmount: '2252', inputDescription: 'ALJHDF'},
// {inputDate: '2022-07-25', inputType: 'Food', inputAmount: '2500', inputDescription: 'null 1'},
// {inputDate: '2022-07-29', inputType: 'Loan', inputAmount: '1000', inputDescription: 'null 1'},
// {inputDate: '2022-07-24', inputType: 'entertainment', inputAmount: '750', inputDescription: 'null 1'},
// {inputDate: '2022-07-28', inputType: 'transportation', inputAmount: '1750', inputDescription: 'null 1'}];

// let finalArray = {'Health': 0, 'Food': 0, 'Loan': 0, 'entertainment': 0, 'transportation': 0};


// somedata.forEach(function(d){
// if(Object.keys(finalArray).indexOf(d.inputType) != -1)
// finalArray[`${d.inputType}`] += Number(d.inputAmount); 

// });

// labels = Object.keys(finalArray)//.filter((v,i,arr) => { return arr.indexOf(v) === i});

// let data = [];

// labels.forEach( key => {
// labels.push(key);
// data.push(finalArray[key]);
// });

// console.log(labels)
// console.log(data);


const budget = localStorage.getItem("budgetVal");
console.log("budget: " + budget);

const Expences = localStorage.getItem("tableResults");
var Expence = Expences.jsonarray.map(function(e) {
    return e.name;
 });


console.log("expences: " + Expences);
const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Budget',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: budget,
    },
    {
        label: 'Expences',
        backgroundColor: 'rgb(157, 104, 241)',
        borderColor: 'rgb(157, 104, 241)',
        data: Expences,
    }
    
]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {}
  };

/************************************
 *      Rendering the Chart
 * **********************************
 */

const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
