// Load saved vehicles or start with an empty array
let editIndex = -1;
let vehicles = JSON.parse(localStorage.getItem("vehicles")) || [];

// Form and table
const form = document.getElementById("vehicleForm");
const table = document.getElementById("vehicleTable");

// Display vehicles when page loads
displayVehicles();

// Add Vehicle
form.addEventListener("submit", function (e) {

    e.preventDefault();

    const vehicle = {

        registration: document.getElementById("registration").value,

        name: document.getElementById("vehicleName").value,

        type: document.getElementById("vehicleType").value,

        capacity: document.getElementById("capacity").value,

        odometer: document.getElementById("odometer").value,

        cost: document.getElementById("cost").value

    };

    if(editIndex==-1){
const duplicate = vehicles.find(v =>
v.registration === vehicle.registration
);

if(duplicate && editIndex==-1){

alert("Vehicle already exists");

return;

}
vehicles.push(vehicle);

}else{

vehicles[editIndex]=vehicle;

editIndex=-1;

}

    saveVehicles();

    form.reset();

    displayVehicles();

});

// Save to Local Storage
function saveVehicles() {

    localStorage.setItem("vehicles", JSON.stringify(vehicles));

}

// Display Table
function displayVehicles() {

    // Keep heading row
    table.innerHTML = `

<tr>
<th>Registration</th>
<th>Name</th>
<th>Type</th>
<th>Capacity</th>
<th>Action</th>
</tr>

`;

    vehicles.forEach((vehicle,index)=>{

        table.innerHTML += `

<tr>

<td>${vehicle.registration}</td>

<td>${vehicle.name}</td>

<td>${vehicle.type}</td>

<td>${vehicle.capacity}</td>

<td>

<button onclick="deleteVehicle(${index})">
<td>

<button
class="action-btn edit-btn"
onclick="editVehicle(${index})">

Edit

</button>

<button
class="action-btn delete-btn"
onclick="deleteVehicle(${index})">

Delete

</button>

</td>
Delete

</button>

</td>

</tr>

`;

    });

}

// Delete
function deleteVehicle(index){

    vehicles.splice(index,1);

    saveVehicles();

    displayVehicles();
function editVehicle(index){

const vehicle=vehicles[index];

document.getElementById("registration").value=vehicle.registration;

document.getElementById("vehicleName").value=vehicle.name;

document.getElementById("vehicleType").value=vehicle.type;

document.getElementById("capacity").value=vehicle.capacity;

document.getElementById("odometer").value=vehicle.odometer;

document.getElementById("cost").value=vehicle.cost;

editIndex=index;

}
document.getElementById("searchVehicle")
.addEventListener("keyup",function(){

const search=this.value.toLowerCase();

const rows=document.querySelectorAll("#vehicleTable tr");

rows.forEach((row,index)=>{

if(index==0) return;

const text=row.innerText.toLowerCase();

row.style.display=text.includes(search)
?"":"none";

});

});
}

