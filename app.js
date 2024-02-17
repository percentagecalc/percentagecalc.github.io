 function calculatePercentage() {
    const totalInput = document.getElementById('total');
    const percentageInput = document.getElementById('percentage');
    const resultElement = document.getElementById('result');

    // remove commas from input values
    const percentageValue = percentageInput.value.replace(/[,%.]/g, '');
    const totalValue = totalInput.value.replace(/,/g, '');

    const percentage = parseFloat(percentageValue);
    const total = parseFloat(totalValue);

    if (!isNaN(total) && !isNaN(percentage)) {
        const calculatedPercentage = (percentage / 100) * total;

        // format result with commas
        // const formattedCalculatedPercentage = calculatedPercentage.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

        resultElement.textContent = `${percentage}% of ${total} = ${calculatedPercentage}`;

        percentageInput.value = '';
        totalInput.value = '';
    } else {
        resultElement.textContent = 'Please enter valid numeric values.';
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
    resultElement.textContent = `${amountInput.value} is ${calculatedPercentage}% of ${totalInput.value}`;
  } else {
    resultElement.textContent = 'Please enter valid numeric values.';
  }

  amountInput.value = '';
  totalInput.value = '';
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
    
    resultElement.textContent = `${amountInput.value} + ${percentageInput.value}% = ${calculatedPercentage}`;
  } else {
    resultElement.textContent = 'Please enter valid numeric values.';
  }

  amountInput.value = '';
  percentageInput.value = '';
}


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
      resultElement.textContent = `+${percentageChange.toFixed(0)}%`;
    } else if (amount2 < amount1) {
      resultElement.textContent = `${percentageChange.toFixed(0)}%`;
    } else {
      resultElement.textContent = 'No change in values.';
    }
  } else {
    resultElement.textContent = 'Please enter valid numeric values.';
  }

  amountInput1.value = '';
  amountInput2.value = '';
}


// 
// 
// 
// 


function addVat() {
  const amountInput = document.getElementById('vatAmount');
  const resultElement = document.getElementById('vatResult');

  const amount = parseFloat(amountInput.value);

  if (!isNaN(amount)) {
    const calculatedPercentage = amount + (amount * 20 / 100);
    
    resultElement.textContent = `£${amountInput.value} + 20% VAT = £${calculatedPercentage}`;
  } else {
    resultElement.textContent = 'Please enter valid numeric values.';
  }

  amountInput.value = '';
}



// 
// 
// 
// 

function calculateWagesUnder50K() {
  const totalInput = document.getElementById('total5');
  const resultElement = document.getElementById('result5');
  const result4Info = document.getElementById('result5-info');

  // remove commas, percent signs, or dots
  const totalInputCleaned = totalInput.value.replace(/[,%.£]/g, '');
  
  const totalInputParsed = parseFloat(totalInputCleaned);

  let twentyPercentOfRemainder;
  if(totalInputParsed >= 12570){
    let remainderAfter12570 = totalInputParsed - 12570;
    twentyPercentOfRemainder = 0.2 * remainderAfter12570;
  } else{
    twentyPercentOfRemainder = 0;
  }

  let tenPercentOfRemainder;
  if(totalInputParsed >= 12584){
    let remainderAfter12584 = totalInputParsed - 12584;
    tenPercentOfRemainder = 0.1 * remainderAfter12584;
  } else{
    tenPercentOfRemainder = 0;
  }

  let ninePercentOfRemainder;
  if(totalInputParsed >= 24990){
    let remainderAfter24990 = totalInputParsed - 24990;
    ninePercentOfRemainder = 0.09 * remainderAfter24990;
  } else {
    ninePercentOfRemainder = 0;
  }
  
  let deductions = twentyPercentOfRemainder + tenPercentOfRemainder + ninePercentOfRemainder;

  let result = totalInputParsed - deductions;

  // Format result with commas
  const formattedResult = result.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const monthly = result / 12
  const formattedMonthly = monthly.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  if (!isNaN(totalInputParsed)) {
    resultElement.innerHTML = `<p>£${formattedResult} <span class="text-right text-[16px] text-gray-600">£${formattedMonthly} P/M</span></p>`;
    result4Info.innerHTML = `Automatically deducts 20% Tax, 10% <br/>National Insurance, and 9% Student Loan (Plan 1)`;
  } else {
    resultElement.textContent = 'Please enter valid numeric values.';
    result4Info.textContent = "";
  }

  // totalInput.value = '';
}

function clearInput() {
  const totalInput = document.getElementById('total4');

  totalInput.value = '';
}

