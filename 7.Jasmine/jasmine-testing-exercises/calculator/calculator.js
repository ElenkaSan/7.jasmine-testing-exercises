window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});


function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = {amount: 5000, years: 3, rate: 5};
  let amountIn = document.getElementById("loan-amount");
  let yearsIn = document.getElementById("loan-years");
  let rateIn = document.getElementById("loan-rate");
  amountIn.value = values.amount;
  yearsIn.value = values.years;
  rateIn.value = values.rate;
     update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentValues));

}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let p = values.amount;
  let i = (values.rate / 100) / 12;
  let n = Math.floor(values.years * 12);
  return ((p*i)/(1-Math.pow((1+i), -n))).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyPaymentValue = document.querySelector("#monthly-payment");
  monthlyPaymentValue.innerHTML = "$" + monthly;
}
