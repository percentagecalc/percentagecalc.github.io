 function calculatePercentage() {
    const totalInput = document.getElementById('total');
    const percentageInput = document.getElementById('percentage');
    const resultElement = document.getElementById('result');

    // remove commas from input values
    const percentageValue = percentageInput.value.replace(/[,%]/g, '');
    const totalValue = totalInput.value.replace(/,/g, '');

    const percentage = parseFloat(percentageValue);
    const total = parseFloat(totalValue);

    if (!isNaN(total) && !isNaN(percentage)) {
      const calculatedPercentage = (percentage / 100) * total;

      resultElement.innerHTML = `<p class="text-center mt-8 text-4xl font-semibold">${percentage}% of ${total} = ${calculatedPercentage % 1 === 0 ? calculatedPercentage : calculatedPercentage.toFixed(4)}</p>`;

      // clear inputs when submitted
      // percentageInput.value = '';
      // totalInput.value = '';
    } else {
        resultElement.innerHTML = `<p class="mt-8">Please enter valid numeric values.</p>`;
    }
}

// 
// 
// 
// 


function displayPercentageAmount() {
  const amountInput = document.getElementById('amount2');
  const totalInput = document.getElementById('total2');
  const resultElement = document.getElementById('result2');

  const amount = parseFloat(amountInput.value);
  const total = parseFloat(totalInput.value);

  if (!isNaN(total) && !isNaN(amount)) {
    const calculatedPercentage = (amount / total) * 100;
    resultElement.innerHTML = `<p class="text-center mt-8 text-4xl font-semibold">${amountInput.value} is ${calculatedPercentage % 1 === 0 ? calculatedPercentage : calculatedPercentage.toFixed(4)}% of ${totalInput.value}</p>`;
  } else {
    resultElement.innerHTML = `<p class="mt-8">Please enter valid numeric values.</p>`;
  }

  // clear inputs when submitted
  // amountInput.value = '';
  // totalInput.value = '';
}
// 
// 
// 
// 


function addPercentageToAmount() {
  const amountInput = document.getElementById('amount3');
  const percentageInput = document.getElementById('percentage3');
  const resultElement = document.getElementById('result3');

  const amount = parseFloat(amountInput.value);
  const percentage = parseFloat(percentageInput.value);

  if (!isNaN(percentage) && !isNaN(amount)) {
    const calculatedPercentage = amount + (amount * percentage / 100);
    
    resultElement.innerHTML = `<p class="text-center mt-8 text-4xl font-semibold">${amountInput.value} + ${percentageInput.value}% = ${calculatedPercentage % 1 === 0 ? calculatedPercentage : calculatedPercentage.toFixed(4)}</p>`;
  } else {
    resultElement.innerHTML = `<p class="mt-8">Please enter valid numeric values.</p>`;
  }

  // clear inputs when submitted
  // amountInput.value = '';
  // percentageInput.value = '';
}


// 
// 
// 
// 
// 


function minusPercentageToAmount() {
  const amountInput = document.getElementById('minusPercentAmount');
  const percentageInput = document.getElementById('minusPercent');
  const resultElement = document.getElementById('resultMinus');

  const amount = parseFloat(amountInput.value);
  const percentage = parseFloat(percentageInput.value);

  if (!isNaN(percentage) && !isNaN(amount)) {
    const calculatedPercentage = amount - (amount * percentage / 100);
    
    resultElement.innerHTML = `<p class="text-center mt-8 text-4xl font-semibold">${amountInput.value} - ${percentageInput.value}% = ${calculatedPercentage % 1 === 0 ? calculatedPercentage : calculatedPercentage.toFixed(4)}</p>`;
  } else {
    resultElement.innerHTML = `<p class="mt-8">Please enter valid numeric values.</p>`;
  }

  // clear inputs when submitted
  // amountInput.value = '';
  // percentageInput.value = '';
}

// 
// 
// 
// 
// 
// 


function calcPercentageChange() {
  const amountInput1 = document.getElementById('amount4a');
  const amountInput2 = document.getElementById('amount4b');
  const resultElement = document.getElementById('result4');

  const amount1 = parseFloat(amountInput1.value);
  const amount2 = parseFloat(amountInput2.value);

  if (!isNaN(amount1) && !isNaN(amount2)) {
    const percentageChange = ((amount2 - amount1) / Math.abs(amount1)) * 100;

    if (amount2 > amount1) {
      resultElement.innerHTML = `<p class="text-center mt-8 text-4xl font-semibold">+${percentageChange % 1 === 0 ? percentageChange : percentageChange.toFixed(4)}%</p>`;
    } else if (amount2 < amount1) {
      resultElement.innerHTML = `<p class="text-center mt-8 text-4xl font-semibold">${percentageChange % 1 === 0 ? percentageChange : percentageChange.toFixed(4)}%</p>`;
    } else {
      resultElement.innerHTML = `<p class="mt-8">No change in values.</p>`;
    }
  } else {
    resultElement.innerHTML = `<p class="mt-8">Please enter valid numeric values.</p>`;
  }

  // clear inputs when submitted
  // amountInput1.value = '';
  // amountInput2.value = '';
}


// 
// 
// 
// 


function addVat() {
  const amountInput = document.getElementById('vatAmount');
  const resultElement = document.getElementById('resultVat');

  const amount = parseFloat(amountInput.value);

  if (!isNaN(amount)) {
    const calculatedPercentage = amount + (amount * 20 / 100);
    
    resultElement.innerHTML = `<p class="text-center mt-8 text-4xl font-semibold">£${amountInput.value} + 20% VAT = £${calculatedPercentage.toFixed(2)}</p>`;
  } else {
    resultElement.innerHTML = `<p class="mt-8">Please enter valid numeric values.</p>`;
  }

  // clear input when submitted
  // amountInput.value = '';
}



// 
// 
// 
// 

const resultElement = document.getElementById('result5');
let taxBtn = document.getElementById('taxBtn');
let checkBox = document.getElementById('studentLoan');

function checkedOut(){
  if(checkBox.checked === true){
    resultElement.innerHTML = ``;
    taxBtn.classList.add("studentLoadChecked");
  } else{
    taxBtn.classList.remove("studentLoadChecked");
    resultElement.innerHTML = ``;
  }
}

function calculateWagesUnder50K() {
  let totalInput = document.getElementById('total5');
  
  // remove commas, percent signs, or dots
  const totalInputCleaned = totalInput.value.replace(/[,%.£]/g, '');

  const totalInputParsed = parseFloat(totalInputCleaned);

  // TAX @ 20%
  let twentyPercentOfRemainder;
  if(totalInputParsed >= 12570){
    let remainderAfter12570 = totalInputParsed - 12570;
    twentyPercentOfRemainder = 0.2 * remainderAfter12570;
  } else{
    twentyPercentOfRemainder = 0;
  }

  // NATIONAL INSURANCE @ 10%
  let tenPercentOfRemainder;
  if(totalInputParsed >= 12584){
    let remainderAfter12584 = totalInputParsed - 12584;
    tenPercentOfRemainder = 0.1 * remainderAfter12584;
  } else{
    tenPercentOfRemainder = 0;
  }
  
  // checkBox.addEventListener("change", function() {});
  // STUDENT LOAN @ 9%
  let ninePercentOfRemainder;
  let ni;

  // April 2024 Threshold
  if(totalInputParsed >= 24990 && checkBox.checked){
    let remainderAfter24990 = totalInputParsed - 24990;
    ninePercentOfRemainder = 0.09 * remainderAfter24990;
    ni = `<br/>and 9% Student Loan (Plan 1)`
  } else {
    ninePercentOfRemainder = 0;
    ni = "";
  }
  

  let deductions = twentyPercentOfRemainder + tenPercentOfRemainder + ninePercentOfRemainder;

  let result = totalInputParsed - deductions;

  // Format result with commas
  const formattedResult = result.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const monthly = result / 12
  const formattedMonthly = monthly.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  if (!isNaN(totalInputParsed)) {
    resultElement.innerHTML = `<p class="text-center mt-8 text-4xl font-semibold">£${formattedResult}</p><p class="text-center text-[18px] text-gray-600">£${formattedMonthly} P/M</p><p class="text-center text-sm text-gray-700 mt-2 w-[90%] mx-auto">Automatically deducts 20% Tax, <br/>10% National Insurance ${ni}</p>`;
  } else {
    resultElement.innerHTML = `<p class="mt-8">Please enter valid numeric values.</p>`;
  }

  // clear input when submitted
  // totalInput.value = '';
}

// clear data and results when user clicks inside input
function clearInput(inputElement) {
  inputElement.value = '';
  checkBox.checked = false;
  taxBtn.classList.remove("studentLoadChecked");

  const parentDiv = inputElement.closest('form');

  const paragraphElement = parentDiv.querySelector('[id*=result]');

  if (paragraphElement) {
    paragraphElement.innerHTML = '';
  }
}


// clear input function for onload event
function clearAllInputs() {

  let inputElements = document.querySelectorAll('input');
  
  inputElements.forEach(function (inputElement) {

    if (inputElement.type === 'text') {

      inputElement.value = '';
    } else if (inputElement.type === 'checkbox') {

      inputElement.checked = false;
    }
  });
}

function onPageLoad() {
  clearAllInputs();
}

window.onload = onPageLoad;



// bg-white mt-8