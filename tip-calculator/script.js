const bill = document.getElementById("billAmount");
const tipSelect = document.getElementById("tipPercentage");
const result = document.getElementById("result");
const cal = document.getElementById("calculate");

if (cal) {
    cal.addEventListener("click", function () {
        const b = parseFloat(bill.value || 0);
        const tipPercent = parseFloat(tipSelect.value || 0);

        if (!b || b <= 0) {
            result.textContent = "Please enter a valid bill amount";
            return;
        }

        const tipAmount = (b * tipPercent) / 100;
        const total = b + tipAmount;

        result.textContent = `Tip: $${tipAmount.toFixed(2)}  |  Total: $${total.toFixed(2)}`;
    });
} else {
    // fallback: log if button not found
    console.warn("Calculate button (#calculate) not found in DOM.");
}
