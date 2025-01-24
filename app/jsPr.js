let person = {
  name: "Alice",
  age: 25,
  job: "Engineer",
};

Object.keys(person).forEach(function (key) {
  console.log(key, ":", person[key]);
});
// Output:
// name : Alice
// age : 25
// job : Engineer
