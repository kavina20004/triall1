// Selecting form and input elements
const form = document.querySelector("form");

// Function to display error messages
const showError = (field, errorText) => {
    field.classList.add("error");
    const errorElement = document.createElement("small");
    errorElement.classList.add("error-text");
    errorElement.innerText = errorText;
    field.closest(".formSlot").appendChild(errorElement);
}

// Function to handle form submission
const handleFormData = (e) => {
    e.preventDefault();

    // Retrieving input elements
    const cardnumberInput = document.getElementById("cardnumber");
    const cvvnumberInput = document.getElementById("cvvnumber");
    const nameoncardInput = document.getElementById("nameoncard");

    var expirydateInput = document.getElementById("expirydate");
    var chosenDate = new Date(expirydateInput.value);
    var todaysDate = new Date();    
   
    
    // Getting trimmed values from input fields
    const cardnumber = cardnumberInput.value.trim();
    const cvvnumber = cvvnumberInput.value.trim();
    const nameoncard = nameoncardInput.value.trim();
    const expirydate = expirydateInput.value.trim();

    // Clearing previous error messages
    document.querySelectorAll(".formSlot .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());

    // Performing validation checks
    if (cardnumber.length !== 16  || isNaN(cardnumber)) {
        showError(cardnumberInput, "Cardnumber must be a 16 digit numerical value");
    }
    if (cvvnumber.length !== 3 && cvvnumber.length !== 4|| isNaN(cvvnumber) ) {
        showError(cvvnumberInput, "CVV / CVC must be a 3/4 digit numerical value");
    }

    if (nameoncard === "") {
        showError(nameoncardInput, "Enter your name");
    }
    else if(!/^[A-Za-z\s]+$/.test(nameoncard)) {
        showError(nameoncardInput, "Name cant contain numerical digit/s");
    }
    
    if (expirydate === "") {
        showError(expirydateInput, "Enter expiry date");
    }
    if (chosenDate <= todaysDate) {
        showError(expirydateInput, "Enter valid expiry date");
    }
   
    // Checking for any remaining errors before form submission
    const errorInputs = document.querySelectorAll(".formSlot .error");
    if (errorInputs.length > 0) return;

    localStorage.setItem("cardnumber", cardnumber);
    localStorage.setItem("expirydate", expirydate);
    localStorage.setItem("cvvnumber", cvvnumber);
    localStorage.setItem("nameoncard", nameoncard);
   
window.location.href = "confirmation.html";


}


// Handling form submission event
form.addEventListener("submit", handleFormData);


const selectedDate = localStorage.getItem('selectedDate');
document.getElementById('selectedDate').textContent = selectedDate;

const timePeriod = localStorage.getItem('timePeriod');
document.getElementById('timePeriod').textContent = timePeriod;

const timeduration = localStorage.getItem('timeduration');
document.getElementById('timeduration').textContent = timeduration;


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
  const totalAmount2 = localStorage.getItem('totalAmount');
  const total = "Pay $"+  totalAmount2 ;
  document.getElementById('total').value =  total ;