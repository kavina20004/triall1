
const fullname = localStorage.getItem('fullname');
document.getElementById('fullname').textContent = fullname;

const selectedDate = localStorage.getItem('selectedDate');
document.getElementById('selectedDate').textContent = selectedDate;

const timePeriod = localStorage.getItem('timePeriod');
document.getElementById('timePeriod').textContent = timePeriod;

const timeduration = localStorage.getItem('timeduration');
document.getElementById('timeduration').textContent = timeduration;



const number = localStorage.getItem('number');
document.getElementById('number').textContent = number;


const email = localStorage.getItem('email');
document.getElementById('email').textContent = email;


const gender = localStorage.getItem('gender');
document.getElementById('gender').textContent = gender;

const slAdultdata = localStorage.getItem('slAdultTickets');
const slChilddata = localStorage.getItem('slChildTickets');
const foreignerAdultdata = localStorage.getItem('foreignAdultTickets');
const foreignerChilddata= localStorage.getItem('foreignChildTickets');
const infantsdata= localStorage.getItem('infantsTickets');
const slAdultSummary = localStorage.getItem('totalLocalAdultCost');
const slChildSummary = localStorage.getItem('totalLocalChildCost');
const foreignerAdultSummary = localStorage.getItem('totalForeignAdultCost');
const foreignerChildSummary = localStorage.getItem('totalForeignChildCost');
const infantsSummary = localStorage.getItem('totalInfantCost');

const totalAmount = localStorage.getItem('totalAmount');
document.getElementById('totalAmount').textContent = "$" +  totalAmount;


if(slAdultdata > 0) {
    document.getElementById('slAdultRow').style.display = 'table-row';
    document.getElementById('slAdultdata').innerHTML = " Sri Lankan Adult - x" + slAdultdata;
    document.getElementById('slAdultSummary').innerHTML = "$"+ slAdultSummary;
} else {
    document.getElementById('slAdultRow').style.display = 'none';
}

if(slChilddata > 0) {
    document.getElementById('slChildRow').style.display = 'table-row';
    document.getElementById('slChilddata').innerHTML = " Sri Lankan Child - x" +slChilddata;
    document.getElementById('slChildSummary').innerHTML = "$"+ slChildSummary;
  } else {
    document.getElementById('slChildRow').style.display = 'none';
  }
  
  if(foreignerAdultdata > 0) {
    document.getElementById('foreignerAdultRow').style.display = 'table-row';
    document.getElementById('foreignerAdultdata').innerHTML = "Foreign Adult - x" +foreignerAdultdata;
    document.getElementById('foreignerAdultSummary').innerHTML = "$"+ foreignerAdultSummary;
  } else {
    document.getElementById('foreignerAdultRow').style.display = 'none';
  }
  
  if(foreignerChilddata > 0) {
    document.getElementById('foreignerChildRow').style.display = 'table-row';
    document.getElementById('foreignerChilddata').innerHTML = " Foreign Child - x" +foreignerChilddata;
    document.getElementById('foreignerChildSummary').innerHTML = "$"+ foreignerChildSummary;
  } else {
    document.getElementById('foreignerChildRow').style.display = 'none';
  }
  
  if(infantsdata > 0) {
    document.getElementById('infantsRow').style.display = 'table-row';
    document.getElementById('infantsdata').innerHTML = "Infant - x" + infantsdata;
    document.getElementById('infantsSummary').innerHTML = "$"+ infantsSummary;
  } else {
    document.getElementById('infantsRow').style.display = 'none';
  }
