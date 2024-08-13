// script.js
function calculateBill() {
    const units = document.getElementById('units').value;
    const rate = document.getElementById('rate').value;
    
    if (units && rate) {
        const total = units * rate;
        document.getElementById('result').innerHTML = `Total Electricity Bill: ${total.toFixed(2)} (BDT)`;
    } else {
        document.getElementById('result').innerHTML = 'Please enter valid inputs.';
    }
}
