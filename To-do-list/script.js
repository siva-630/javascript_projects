const input = document.getElementById("addtask");

const addon = document.getElementById("add");

const tasklist = document.getElementById("list");




addon.addEventListener("click", () => {
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Enter a task");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    const delet = document.createElement("button");
    delet.textContent = "❌";

    delet.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(delet);

    tasklist.appendChild(li);

    input.value = "";
});
