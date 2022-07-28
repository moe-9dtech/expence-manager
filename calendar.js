eventExpense = JSON.parse(localStorage.getItem( "tableResults" ));

let categoryArray = {'Health': 0, 'Food': 0, 'Loan': 0, 'entertainment': 0, 'transportation': 0};

eventExpense.forEach(function(d){
    if(Object.keys(categoryArray).indexOf(d.inputType) != -1)
    categoryArray[`${d.inputType}`] += Number(d.inputAmount); 
    });
let category_key = Object.keys(categoryArray);
let category_val = Object.values(categoryArray);

let totalExpenses = {}; //datewise;

eventExpense.forEach(function(ex){
if(totalExpenses[ex.inputDate])
{
   totalExpenses[ex.inputDate] += Number(ex.inputAmount);
}

else
	totalExpenses[ex.inputDate] = Number(ex.inputAmount);
});

let buildData = [];

Object.keys(totalExpenses).forEach(key => {
let someObj = {start: key, title: totalExpenses[key]};
buildData.push(someObj);
})

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      events: buildData

    });
    calendar.render();
  });



















// draw(eventExpense.map(obj => {
//         return {
//             title: exp_val,
//             start: exp_key,
//             display: 'list-item'
//         }
        
    
//     })  
// )















function draw (data) {


    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      eventSources: [
        {

        events: data

        }
      ]
        
    });
    calendar.render();
}
    


