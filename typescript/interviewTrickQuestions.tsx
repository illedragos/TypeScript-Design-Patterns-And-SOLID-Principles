// This will output 0 1 2
for (let i = 0; i < 3; i++) {

  const log = () => {
    console.log(i);
  }
  setTimeout(log, 100);
}

// This will output 3 3 3
for (var i = 0; i < 3; i++) {

  const log = () => {
    console.log(i);
  }
  setTimeout(log, 100);
}

