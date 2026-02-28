const weight = document.getElementById("weight");

const height = document.getElementById("height");


const result = document.getElementById("result");

const cal = document.getElementById("cal");


cal.addEventListener("click", function () {
    const w = Number(weight.value);

    const nh = Number(height.value);


    if (w <= 0 || nh <= 0) {
        result.textContent = "please enter  valid value";
        return;
    }
    const bmi = w / (nh * nh)
    

    let category;

    if (bmi < 18.5) {
        category="underWeight"
    }
    else if (bmi < 24.9) {
        category="normal weight"
    }
    else if (bmi < 29.9) {
        category = "overweight";
    }
    else {
        category="obese"
    }

    result.textContent = `BMI: ${bmi.toFixed(2) }  (${category})`
})