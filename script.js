/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log

  arr.filter(person => person.profession === "developer")
  .map(dev => console.log(dev.name));
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log

  arr.forEach(person => {
    if (person.profession === "developer") {
      console.log(person.name);
    }
  });

}

function addData() {
  //Write your code here, just console.log

  let newEmployee = { id: 4, name: "Pintu", age: "24", profession: "Developer 2" };
  arr.push(newEmployee);
  console.log(arr);

}

function removeAdmin() {
  //Write your code here, just console.log

  arr = arr.filter(person => person.profession !== "admin");
  console.log(arr);

}

function concatenateArray() {
  //Write your code here, just console.log

  let newArray = [
    { id: 5, name: "Nitin", age: "21", profession: "DBA" },
    { id: 6, name: "Atul", age: "22", profession: "SDE1" },
    { id: 7, name: "Akansha", age: "23", profession: "developer" }
  ];

  let concatenatedArray = arr.concat(newArray);
  console.log(concatenatedArray);

}
