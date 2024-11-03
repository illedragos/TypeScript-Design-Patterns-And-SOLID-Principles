//normal dunction, not a closure
function pureFun(a: number) {
  return a + b;
}

//THIS IS A CLOSURE
// Closures are functions that can access values outside of their own curly braces.
let b: number = 3;

function impureFun(a: number) {
  return a + b;
}
///////////////////////

//Data contain here will not leak out
//
function outer() {
  let state = "rabbit"

  function inner() {
    return `Hello${state}`
  }

  return inner;
}

/////////////////
function alertFun(message: string) {
  return () => {
    alert(`ALERT${message}`)
  }
}

const alertMom = alertFun('hi mom');
