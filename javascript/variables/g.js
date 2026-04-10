let globalVar = "Global";

function test() {
  let localVar = "Local";
  console.log(localVar);
}

test();
console.log(globalVar);