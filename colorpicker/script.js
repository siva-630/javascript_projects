const colorInput = document.getElementById("colorInput");

const colorBox = document.getElementById("colorBox");

const colorCode = document.getElementById("colorCode");


colorInput.addEventListener("input", function () {
    

    const selected = colorInput.value;


    colorBox.style.backgroundColor = selected;
  

    colorCode.textContent = selected;


})