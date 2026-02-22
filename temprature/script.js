

const tempInput = document.getElementById("tempInput");
const unit = document.getElementById("unit");
const result = document.getElementById("result");

const convertBtn = document.getElementById("convert");

// addeventListener

convertBtn.addEventListener("click", () => {
    

    const value = Number(tempInput.value);

    if (tempInput.value == "") {
        result.textContent = "Please enter a value";
        return;
    }

    let converted;

    if (unit.value === 'c') {
        converted = (value * 9 / 5) + 32;
        result.textContent = `${converted.toFixed(2)} °F`;
    }
    else if (unit.value === 'f') {
        converted = (value - 32) * 5 / 9;
        result.textContent = `${converted.toFixed(2)} °C `
    }
    else {
        converted = value - 273.15;
        result.textContent = `${converted.toFixed(2)} °C`
    }

    // ° -->0176 
})