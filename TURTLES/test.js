// Helper function to calculate the total charges for ticket categories
function calculateTotalCharges() {
  
  const slAdult = Number(document.getElementById("sl-adult").value);
  const slChild = Number(document.getElementById("sl-child").value);
  const foreignerAdult = Number(document.getElementById("foreigner-adult").value);
  const foreignerChild = Number(document.getElementById("foreigner-child").value);
  const infant=Number(document.getElementById("infant").value);

  const slAdultNormalCharge = 4;
  const slAdultPeakCharge = 6;
  const slChildNormalCharge = 2;
  const slChildPeakCharge = 3;
  const foreignerAdultNormalCharge = 10;
  const foreignerAdultPeakCharge = 13;
  const foreignerChildNormalCharge = 5;
  const foreignerChildPeakCharge = 8;
  const infantNormalCharge=0;
  const infantPeakCharge=0;

  const slAdultTotal = slAdult * (slAdultNormalCharge||slAdultPeakCharge);
  const slChildTotal = slChild * (slChildNormalCharge || slChildPeakCharge);
  const foreignerAdultTotal = foreignerAdult * (foreignerAdultNormalCharge||foreignerAdultPeakCharge);
  const foreignerChildTotal = foreignerChild * (foreignerChildNormalCharge||foreignerChildPeakCharge);
  const infantTotal=infant*(infantNormalCharge||infantPeakCharge);

  return slAdultTotal + slChildTotal + foreignerAdultTotal + foreignerChildTotal+infantTotal;
}

// Helper function to calculate the duration and peak hours count
function calculateDuration(startTime, endTime) {
  const peakStart1 = 10;
  const peakEnd1 = 13;
  const peakStart2 = 15;
  const peakEnd2 = 18;


  //"Number" is a JS function that's built-in and it converts a value into a number. It determines the time duration.
  const startHour = Number(startTime.split(":")[0]);
  const endHour = Number(endTime.split(":")[0]);

  const durationInHours = endHour - startHour;

  let peakHours = 0;
  if (
    (startHour >= peakStart1 && startHour < peakEnd1) ||
    (endHour > peakStart1 && endHour <= peakEnd1) ||
    (startHour >= peakStart2 && startHour < peakEnd2) ||
    (endHour > peakStart2 && endHour <= peakEnd2)
  ) {
    peakHours = durationInHours;
  }

  const normalHours = durationInHours - peakHours;
  return { normal: normalHours, peak: peakHours };
}

// Helper function to update the summary table
 

function updateSummaryTable() {
  const date = document.getElementById("visit-date").value;
  const timeSlot = document.getElementById("time-slot").value;
  const [startTime, endTime] = timeSlot.split("-");

  const duration = calculateDuration(startTime, endTime);
  const totalCharges = calculateTotalCharges();
  const slAdult = Number(document.getElementById("sl-adult").value);
  const slChild = Number(document.getElementById("sl-child").value);
  const foreignerAdult = Number(document.getElementById("foreigner-adult").value);
  const foreignerChild = Number(document.getElementById("foreigner-child").value);
  const infant = Number(document.getElementById("infant").value);
  

  const summaryTableHTML = document.getElementById("summary").innerHTML;
  localStorage.setItem("summaryTableHTML", summaryTableHTML);
  
  const purchaseButton = document.getElementById("purchase-button");

  if (date && timeSlot && (slAdult || slChild || foreignerAdult || foreignerChild || infant)) {
    purchaseButton.removeAttribute("disabled");
  } else {
    purchaseButton.setAttribute("disabled", "true");
  }

  document.getElementById("summary-date").innerText = date;
  document.getElementById("summary-time").innerText = timeSlot;
 

  const normalHours = duration.normal;
  const peakHours = duration.peak;
  const durationText = `${normalHours + peakHours} hrs (${normalHours.toString().padStart(2, "0")} Normal : ${peakHours.toString().padStart(2, "0")} Peak)`;
  document.getElementById("summary-duration").innerText = durationText;


  const ticketCategories = [
    { category: "SL Adult", normalCharge: 4, peakCharge: 6 },
    { category: "SL Child", normalCharge: 2, peakCharge: 3 },
    { category: "Foreigner Adult", normalCharge: 10, peakCharge: 13 },
    { category: "Foreigner Child", normalCharge: 5, peakCharge: 8 },
    { category: "infant", normalCharge: 0, peakCharge: 0 },
  ];

  const summaryTickets = document.getElementById("summary-tickets");
  summaryTickets.innerHTML = "";
  const summaryPrice=document.getElementById("summary-price");
  summaryPrice.innerHTML="";

  for (const categoryData of ticketCategories) {
    const { category, normalCharge, peakCharge } = categoryData;
    const quantity = Number(document.getElementById(category.toLowerCase().replace(" ", "-")).value);

    let charge;
    if (duration.peak > 0) {
      charge = peakCharge;
    } else {
      charge = normalCharge;
    }

    const total = quantity * charge;
    if (quantity > 0) {
      summaryTickets.innerHTML += `<li>${quantity} ${category}</li>`;
      summaryPrice.innerHTML+=`<li>$${total}</li>`;
    }
  }

  

  document.getElementById("summary-total").innerText = `$${totalCharges}`;
}



// Event listeners to trigger the update of the summary table
document.getElementById("visit-date").addEventListener("change", updateSummaryTable);
document.getElementById("time-slot").addEventListener("change", updateSummaryTable);
document.getElementById("sl-adult").addEventListener("change", updateSummaryTable);
document.getElementById("sl-child").addEventListener("change", updateSummaryTable);
document.getElementById("foreigner-adult").addEventListener("change", updateSummaryTable);
document.getElementById("foreigner-child").addEventListener("change", updateSummaryTable);
document.getElementById("infant").addEventListener("change", updateSummaryTable);



document.getElementById("purchase-button").addEventListener("click", function () {
  const purchaseLink = document.getElementById("purchase-link").getAttribute("href");
  window.open(purchaseLink, "_blank"); // Open the link in a new tab
});




// Function to store the selected date, time, tickets, and their prices in local storage
function storeSelectedData() {
  const selectedDate = document.getElementById("visit-date").value;
  const selectedTime = document.getElementById("time-slot").value;
  const slAdultTickets = parseInt(document.getElementById("sl-adult").value);
  const slChildTickets = parseInt(document.getElementById("sl-child").value);
  const foreignAdultTickets = parseInt(document.getElementById("foreigner-adult").value);
  const foreignChildTickets = parseInt(document.getElementById("foreigner-child").value);
  const infantTickets = parseInt(document.getElementById("infant").value);
  const totalCharges = calculateTotalCharges();
  localStorage.setItem("totalCharges",totalCharges);


  localStorage.setItem('selectedDate', document.getElementById('selectedDate').innerHTML);
  localStorage.setItem("selectedTime", selectedTime);
  localStorage.setItem("slAdultTickets", slAdultTickets);
  localStorage.setItem("slChildTickets", slChildTickets);
  localStorage.setItem("foreignAdultTickets", foreignAdultTickets);
  localStorage.setItem("foreignChildTickets", foreignChildTickets);
  localStorage.setItem("infantTickets",infantTickets);
  localStorage.setItem("totalCharges", totalCharges);
}
// Attach an event listener to the "Continue with Purchase" button
document.getElementById("purchase-button").addEventListener("click", storeSelectedData);





function getCurrentDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function updateSummaryDate() {
  const currentDate = getCurrentDate();
  document.getElementById("summary-date").innerText = currentDate;
}

window.onload = updateSummaryDate;



// const visitDateInput = document.getElementById('visitDate');
// const slAdultInput = document.getElementById('slAdult');
// const slChildInput = document.getElementById('slChild');
// const foreignerAdultInput = document.getElementById('foreignerAdult');
// const foreignerChildInput = document.getElementById('foreignerChild');
// const infantsInput = document.getElementById('infants');

// const summaryTable = document.getElementById('summaryTable');

// visitDateInput.addEventListener('change', function() {
//   localStorage.setItem('selectedDate', visitDateInput.value);
// });

// function updateSummary() {
//   const slAdultSummary = parseInt(slAdultInput.value);
//   const slChildSummary = parseInt(slChildInput.value);
//   const foreignerAdultSummary = parseInt(foreignerAdultInput.value);
//   const foreignerChildSummary = parseInt(foreignerChildInput.value);
//   const infantsSummary = parseInt(infantsInput.value);

//   const totalPayable = (slAdultSummary * 4) + (slChildSummary * 2) + (foreignerAdultSummary * 10) + (foreignerChildSummary * 5);
//   summaryTable.rows[1].cells[1].innerText = slAdultSummary;
//   summaryTable.rows[2].cells[1].innerText = slChildSummary;
//   summaryTable.rows[3].cells[1].innerText = foreignerAdultSummary;
//   summaryTable.rows[4].cells[1].innerText = foreignerChildSummary;
//   summaryTable.rows[5].cells[1].innerText = infantsSummary;
//   summaryTable.rows[6].cells[1].innerText = `$${totalPayable}`;

//   localStorage.setItem('slAdultSummary', slAdultSummary);
//   localStorage.setItem('slChildSummary', slChildSummary);
//   localStorage.setItem('foreignerAdultSummary', foreignerAdultSummary);
//   localStorage.setItem('foreignerChildSummary', foreignerChildSummary);
//   localStorage.setItem('infantsSummary', infantsSummary);
//   localStorage.setItem('totalPayable', totalPayable);
// }

// slAdultInput.addEventListener('change', updateSummary);
// slChildInput.addEventListener('change', updateSummary);
// foreignerAdultInput.addEventListener('change', updateSummary);
// foreignerChildInput.addEventListener('change', updateSummary);
// infantsInput.addEventListener('change', updateSummary);

// window.onload = function() {
//   const storedDate = localStorage.getItem('selectedDate');
//   if (storedDate) {
//     visitDateInput.value = storedDate;
//   }

//   const storedSLAdultSummary = localStorage.getItem('slAdultSummary');
//   const storedSLChildSummary = localStorage.getItem('slChildSummary');
//   const storedForeignerAdultSummary = localStorage.getItem('foreignerAdultSummary');
//   const storedForeignerChildSummary = localStorage.getItem('foreignerChildSummary');
//   const storedInfantsSummary = localStorage.getItem('infantsSummary');
//   const storedTotalPayable = localStorage.getItem('totalPayable');

//   if (storedSLAdultSummary && storedSLChildSummary && storedForeignerAdultSummary &&
//     storedForeignerChildSummary && storedInfantsSummary && storedTotalPayable) {
//     slAdultInput.value = storedSLAdultSummary;
//     slChildInput.value = storedSLChildSummary;
//     foreignerAdultInput.value = storedForeignerAdultSummary;
//     foreignerChildInput.value = storedForeignerChildSummary;
//     infantsInput.value = storedInfantsSummary;

//     summaryTable.rows[1].cells[1].innerText = storedSLAdultSummary;
//     summaryTable.rows[2].cells[1].innerText = storedSLChildSummary;
//     summaryTable.rows[3].cells[1].innerText = storedForeignerAdultSummary;
//     summaryTable.rows[4].cells[1].innerText = storedForeignerChildSummary;
//     summaryTable.rows[5].cells[1].innerText = storedInfantsSummary;
//     summaryTable.rows[6].cells[1].innerText = `$${storedTotalPayable}`;
//   }

//   updateSummary();
// };