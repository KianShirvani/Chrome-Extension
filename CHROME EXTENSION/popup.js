function calculateTip() {
    let bill = parseFloat(document.getElementById("bill").value);
    let tipPercent = parseFloat(document.getElementById("tipPercent").value) / 100;
    let people = parseFloat(document.getElementById("people").value);

    if (isNaN(bill) || isNaN(tipPercent) || isNaN(people)) {
        alert("Please ensure all fields are filled correctly.");
        return;
    }

    let totalTip = bill * tipPercent;
    let perPersonBill = (bill + totalTip) / people;
    let totalBill = bill + totalTip;

    // Creating the result string
    let resultContent = `
Total Tip: $${totalTip.toFixed(2)}
Per Person Bill: $${perPersonBill.toFixed(2)}
Total Bill: $${totalBill.toFixed(2)}
`;

    // Displaying the results using an alert
    alert(resultContent);
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calculateButton").addEventListener("click", calculateTip);
});
