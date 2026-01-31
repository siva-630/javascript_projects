const input = document.getElementById("addtask");

const addon = document.getElementById("add");

const tasklist = document.getElementById("list");




addon.addEventListener("click", () => {
    tasklist = input.value;



    if (tasklist === ""){
        alert("enter a task");
        return;

    }
    const li = document.createElement("li");
    li.textContent = tasklist;

    const delet = document.createElement("button");
    delet.textContent = "❌";


    delet.addEventListener("click", function () {
        tasklist.removeChild(li);
    });

    li.appendChild(delet);

    tasklist.appendChild(li);

    input.value = " ";

})
