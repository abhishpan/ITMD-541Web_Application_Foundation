document.addEventListener('DOMContentLoaded', () => {
    const billTotalInput = document.getElementById('billTotal');
    const tipPercentageInput = document.getElementById('tipPercentage');
    const tipPercentageValue = document.getElementById('tipPercentageValue');
    const tipAmountInput = document.getElementById('tipAmount');
    const totalBillWithTipInput = document.getElementById('totalBillWithTip');

    function calculateTip() {
        const billTotal = parseFloat(billTotalInput.value);
        const tipPercentage = parseInt(tipPercentageInput.value, 10);

        if (!isNaN(billTotal)) {
            const tipAmount = billTotal * (tipPercentage / 100);
            const totalBillWithTip = billTotal + tipAmount;

            tipPercentageValue.textContent = `${tipPercentage}%`;
            tipAmountInput.value = tipAmount.toFixed(2);
            totalBillWithTipInput.value = totalBillWithTip.toFixed(2);
        } else {
            alert('Please enter a valid number for the bill total.');
        }
    }

    billTotalInput.addEventListener('input', calculateTip);
    tipPercentageInput.addEventListener('input', calculateTip);
});
