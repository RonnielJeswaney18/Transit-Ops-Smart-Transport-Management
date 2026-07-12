const fuelChart = new Chart(document.getElementById('fuelChart'), {

type: 'bar',

data: {

labels: ['Jan','Feb','Mar','Apr','May','Jun'],

datasets: [{

label: 'Fuel (Litres)',

data: [420,380,510,460,490,530],

backgroundColor: '#2563eb'

}]

}

});

const fleetChart = new Chart(document.getElementById('fleetChart'), {

type:'doughnut',

data:{

labels:['Available','On Trip','In Shop','Retired'],

datasets:[{

data:[82,29,11,3],

backgroundColor:[
'#22c55e',
'#3b82f6',
'#f59e0b',
'#ef4444'
]

}]

}

});