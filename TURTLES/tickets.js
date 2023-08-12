 function calculationOfAll() {

   //VISITING DATE IS STORED
   let dateSelected = document.getElementById("visitDate").value;


   // HOW THE TIME SECTION IS STORED AND CALCULATED
   // ARRAY PART FOR THE NUMBER OF HOURS
   const hoursSelected = document.getElementById("HourlySlot");
   let totalHoursArray = []; 
   for (let option of hoursSelected.options) {
     if (option.selected) {
       totalHoursArray.push(option.value);
     }
     }
 
 //ARRAY OF HOURS SAVED TO LOCAL STORAGE
 localStorage.setItem("totalHoursArray", JSON.stringify(totalHoursArray));

//NORMAL AND PEAK HOURS SEPERATED AND DECLARED
 const normalHourSlots = [7,8, 9, 1, 2];
 const peakHourSlots = [10, 11, 12, 3, 4, 5];

 let totalNormalHours = 0;
 let totalPeakHours = 0;
 let totalHours =[];

 for (let slot of totalHoursArray) {
  const hour = parseInt(slot.split("-")[0]);
  totalHours.push(hour);
  if (normalHourSlots.includes(hour)) {
    totalNormalHours++;
  } else if (peakHourSlots.includes(hour)) {
    totalPeakHours++;
  }
}

totalHours.sort((a, b) => a - b);
let startingHour = totalHours[0];
let finishingHour = totalHours[0]+totalHours[totalHours.length-1]-(totalHours[0]-1);
let sumofHours = totalNormalHours+totalPeakHours;


//PRICES DECALRED FOR ALL TICKET TYPES

//LN - LOCAL NORMAL  LP - LOCAL PEAK
//FN - FOREIGN NORMAL FP - FOREGIN PEAK

const LN_AdultPrice = 4;
const LP_AdultPrice = 6; 

const LN_ChildPrice = 2;
const LP_ChildPrice = 3;

const FN_AdultPrice = 10;
const FP_AdultPrice = 13;

const FN_ChildPrice = 5;
const FP_ChildPrice = 8;

//TICKETS SECTION
const slAdultTickets = parseInt(document.getElementById('slAdult').value);
const slChildTickets = parseInt(document.getElementById('slChild').value);
const foreignAdultTickets = parseInt(document.getElementById('foreignerAdult').value);
const foreignChildTickets= parseInt(document.getElementById('foreignerChild').value);
const infantsTickets = parseInt(document.getElementById('infants').value);

//STORING THE NUMBER OF TICKETS IN LOCAL STORAGE
localStorage.setItem('slAdultTickets', slAdultTickets);
localStorage.setItem('slChildTickets', slChildTickets);
localStorage.setItem('foreignAdultTickets', foreignAdultTickets);
localStorage.setItem('foreignChildTickets', foreignChildTickets);
localStorage.setItem('infantsTickets', infantsTickets);

//CALCULATING THE TOTAL COSTS
const totalLocalAdultCost = (totalNormalHours * LN_AdultPrice
    + totalPeakHours * LP_AdultPrice)*slAdultTickets;

const totalLocalChildCost = (totalNormalHours * LN_ChildPrice
     + totalPeakHours* LP_ChildPrice)*slChildTickets;

const totalForeignAdultCost = (totalNormalHours* FN_AdultPrice 
    + totalPeakHours * FP_AdultPrice)*foreignAdultTickets;

const totalForeignChildCost = (totalNormalHours *  FN_ChildPrice 
     + totalPeakHours * FP_ChildPrice)*foreignChildTickets;

const totalInfantCost = 0 * infantsTickets;

const totalAmount = totalLocalAdultCost + totalLocalChildCost + totalForeignAdultCost + totalForeignChildCost +  totalInfantCost ;

//IF STATMENTS TO COLLAPSE  AND SHOW THE DATA ENTERED BY USER THE TABLE
     if(slAdultTickets > 0) {
      document.getElementById('slAdultRow').style.display = 'table-row';
      document.getElementById('slAdultdata').innerHTML = " Sri Lankan Adult - x" + slAdultTickets;
      document.getElementById('slAdultSummary').innerHTML = "$"+ totalLocalAdultCost;
  } else {
      document.getElementById('slAdultRow').style.display = 'none';
  }
  
  if(slChildTickets > 0) {
    document.getElementById('slChildRow').style.display = 'table-row';
    document.getElementById('slChilddata').innerHTML = " Sri Lankan Child - x" +slChildTickets;
    document.getElementById('slChildSummary').innerHTML = "$"+ totalLocalChildCost;
  } else {
    document.getElementById('slChildRow').style.display = 'none';
  }
  
  if(foreignAdultTickets > 0) {
    document.getElementById('foreignerAdultRow').style.display = 'table-row';
    document.getElementById('foreignerAdultdata').innerHTML = "Foreign Adult - x" +foreignAdultTickets;
    document.getElementById('foreignerAdultSummary').innerHTML = "$"+ totalForeignAdultCost;
  } else {
    document.getElementById('foreignerAdultRow').style.display = 'none';
  }
  
  if(foreignChildTickets > 0) {
    document.getElementById('foreignerChildRow').style.display = 'table-row';
    document.getElementById('foreignerChilddata').innerHTML = " Foreign Child - x" +foreignChildTickets;
    document.getElementById('foreignerChildSummary').innerHTML = "$"+ totalForeignChildCost;
  } else {
    document.getElementById('foreignerChildRow').style.display = 'none';
  }
  
  if(infantsTickets > 0) {
    document.getElementById('infantsRow').style.display = 'table-row';
    document.getElementById('infantsdata').innerHTML = "Infant - x" + infantsTickets;
    document.getElementById('infantsSummary').innerHTML = "$"+ totalInfantCost;
  } else {
    document.getElementById('infantsRow').style.display = 'none';
  }

document.getElementById("totalAmount").textContent = "$" + totalAmount;

  
const selectedDate = dateSelected;
document.getElementById('selectedDate').innerHTML = selectedDate; 

const timePeriod = startingHour + " to " + finishingHour;
document.getElementById('timePeriod').innerHTML = timePeriod;

const timeduration = sumofHours + " hours (" + totalNormalHours + " Normal : " + totalPeakHours + " Peak ) ";
document.getElementById('timeduration').innerHTML = timeduration;

localStorage.setItem('selectedDate', selectedDate);
localStorage.setItem('timePeriod', timePeriod);
localStorage.setItem('timeduration', timeduration);

//STORING THE CALCULATED VALUES IN LOCAL STORAGE
localStorage.setItem('totalLocalAdultCost', totalLocalAdultCost);
localStorage.setItem('totalLocalChildCost', totalLocalChildCost);
localStorage.setItem('totalForeignAdultCost', totalForeignAdultCost);
localStorage.setItem('totalForeignChildCost', totalForeignChildCost);
localStorage.setItem('totalInfantCost', totalInfantCost);
localStorage.setItem('totalAmount', totalAmount);

//STORING THE VALUES IN THE SUMMARY TABLE TO LOCAL STORAGE
  const summarytable = {
    selectedDate :dateSelected,
    timePeriod : startingHour + " to " + finishingHour,
    timeduration : totalNormalHours + " Normal hrs " + totalPeakHours + " Peak hrs",
    slAdultdata: slAdultTickets,
    slChilddata: slChildTickets,
    foreignerAdultdata: foreignAdultTickets,
    foreignerChilddata: foreignChildTickets,
    infantsdata:infantsTickets + " infant",
    slAdultSummary: totalLocalAdultCost,
    slChildSummaryPrice: totalLocalChildCost,
    foreignerAdultSummary: totalForeignAdultCost,
    foreignerChildSummary: totalForeignChildCost,
    infantsSummary: totalInfantCost,
    totalAmount: totalAmount,
  };
    
  // Convert the summaryTable object into a JSON string and store it
  localStorage.setItem('summarytable', JSON.stringify(summarytable));


  if ((foreignAdultTickets > 0 || foreignChildTickets > 0 || slAdultTickets > 0 || slChildTickets > 0 || infantsTickets > 0)
   && dateSelected && sumofHours > 0) {
    document.querySelector('.btn').style.display = 'block';
  }
}


document.getElementById("UserInputForm").addEventListener("submit", function(event) {
  event.preventDefault();
  calculationOfAll();
});

document.getElementById("HourlySlot").addEventListener("change", function() {
  document.getElementById("UserInputForm").dispatchEvent(new Event('submit'));
});

[ "foreignerAdult", "foreignerChild","slAdult", "slChild", "infants" ,"HourlySlot" ].forEach(function(id) {
  document.getElementById(id).addEventListener("change", function() {
      document.getElementById("UserInputForm").dispatchEvent(new Event('submit'));
  });
});

window.onload = function() {
 
  const currentDate = new Date();
  const dateCurrent = currentDate.toDateString();
  document.getElementById('selectedDate').innerHTML=dateCurrent;
  
  document.getElementById('timePeriod').innerHTML="7.00am to 8.00am";
  document.getElementById('timeduration').innerHTML=" 1 hrs (1 Normal , 0 Peak)";
  document.getElementById('slAdultRow').style.display = 'none';
  document.getElementById('slChildRow').style.display = 'none';
  document.getElementById('foreignerChildRow').style.display = 'none';
  document.getElementById('infantsRow').style.display = 'none';

  document.getElementById('foreignerAdultdata').innerHTML = "Foreign Adult - x1";
  document.getElementById('foreignerAdultSummary').innerHTML="$10 ";
  document.getElementById('totalAmount').innerHTML="$10 ";
};