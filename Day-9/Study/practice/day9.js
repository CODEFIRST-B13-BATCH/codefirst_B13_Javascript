
function outer() {
  let counter = 0;
  // console.log(count);
  function inner() {
    let result = ++counter;
    // const count = 0;
    console.log(result);
  }
  // inner();
}