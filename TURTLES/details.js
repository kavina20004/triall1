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

  
    const fullnameInput = document.getElementById("fullname");
    const emailInput = document.getElementById("email");
    const emailconfirmInput = document.getElementById("emailconfirm");
    const genderInput = document.getElementById("gender");
    const numberInput = document.getElementById("number");


    const fullname = fullnameInput.value.trim();
    const email = emailInput.value.trim();
    const emailconfirm = emailconfirmInput.value.trim();
    const gender = genderInput.value;
    const phonenumber = numberInput.value.trim();

    // Regular expression pattern for email validationx
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Clearing previous error messages
    document.querySelectorAll(".formSlot .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());

    // Performing validation checks
    if (fullname === "") {
        showError(fullnameInput, "Enter your full name");
    }
    else if(!/^[A-Za-z\s]+$/.test(fullname)) {
        showError(fullnameInput, "Name can not contain numerical digit/s");
    }
 
    if (!emailPattern.test(email)) {
        showError(emailInput, "Enter a valid email address");
    }

    if (email !== emailconfirm) {
        showError(emailconfirmInput, "Email addresses do not match");
    }
    
    if (gender === "") {
        showError(genderInput, "Select your gender");
    }

    // PHONE NUMBER VALIDATION NOT ADDED SINCE ITS THERE IN INTERNATIONAL-TELEPHONE-INPUT.JS


    // if (phonenumber.length !== 10 || isNaN(cvvnumber) ) {
    //     showError(numberInput, "Phone number must be a 10 digit numerical value");
    // }
    


    
    // Checking for any remaining errors before form submission
    const errorInputs = document.querySelectorAll(".formSlot .error");
    if (errorInputs.length > 0) return;

    localStorage.setItem("fullname" , fullname);
    localStorage.setItem("number" , phonenumber);
    localStorage.setItem("email" , email);
    localStorage.setItem("gender" , gender);


window.location.href = "payment.html";

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
