let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

const form = document.getElementById("expenseForm");
const table = document.getElementById("expenseTable");

displayExpenses();

form.addEventListener("submit", function(e){

e.preventDefault();

const expense={

date:document.getElementById("date").value,

vehicle:document.getElementById("vehicle").value,

fuel:parseFloat(document.getElementById("fuel").value),

fuelCost:parseFloat(document.getElementById("fuelCost").value),

toll:parseFloat(document.getElementById("toll").value)||0,

maintenance:parseFloat(document.getElementById("maintenance").value)||0

};

expenses.push(expense);

saveExpenses();

form.reset();

displayExpenses();

});

function saveExpenses(){

localStorage.setItem("expenses",JSON.stringify(expenses));

}

function displayExpenses(){

table.innerHTML=`

<tr>

<th>Date</th>

<th>Vehicle</th>

<th>Fuel</th>

<th>Fuel Cost</th>

<th>Toll</th>

<th>Maintenance</th>

<th>Total</th>

<th>Action</th>

</tr>

`;

let fuelTotal=0;
let tollTotal=0;
let maintenanceTotal=0;

expenses.forEach((e,index)=>{

const total=e.fuelCost+e.toll+e.maintenance;

fuelTotal+=e.fuelCost;
tollTotal+=e.toll;
maintenanceTotal+=e.maintenance;

table.innerHTML+=`

<tr>

<td>${e.date}</td>

<td>${e.vehicle}</td>

<td>${e.fuel}</td>

<td>₹${e.fuelCost}</td>

<td>₹${e.toll}</td>

<td>₹${e.maintenance}</td>

<td>₹${total}</td>

<td>

<button onclick="deleteExpense(${index})">

Delete

</button>

</td>

</tr>

`;

});

document.getElementById("fuelTotal").innerText="₹"+fuelTotal;

document.getElementById("tollTotal").innerText="₹"+tollTotal;

document.getElementById("maintenanceTotal").innerText="₹"+maintenanceTotal;

document.getElementById("overallTotal").innerText="₹"+(fuelTotal+tollTotal+maintenanceTotal);

}

function deleteExpense(index){

expenses.splice(index,1);

saveExpenses();

displayExpenses();

}