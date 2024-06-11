const user = {
  firstName: "Nikhil",
  lastName: "Pandey",
  age: 25,

  getAgeYear: function () {
    return new Date().getAgeYear() - user.age;
  }
}


