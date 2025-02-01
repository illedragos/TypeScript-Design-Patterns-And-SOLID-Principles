console.log("start-Index-2025");
let original = {
  name: "Marin",
  addres: {
    street: "Tudor Vladimirescu 45",
    city: "Oradea",
  },
};

let shallowCopy = { ...original };
shallowCopy.addres.city = "Stei";
shallowCopy.name = "Dragos";
console.log(shallowCopy.addres.city);
console.log(original.addres.city);
console.log(shallowCopy.name);
console.log(original.name);
console.log("--------------------");

let originalObj = {
  name: "Raluca",
  addres: {
    street: "Maresal Ion 6",
    city: "Timisoara",
  },
};

//Using Json.stringify is a simple but a limited approach because it works only with Json compatible data.
//It won't correctly copy complex objects that contain funcions as well

let deepCopy = JSON.parse(JSON.stringify(originalObj));
deepCopy.addres.city = "Ghighiseni";

console.log(deepCopy.addres.city);
console.log(originalObj.addres.city);
