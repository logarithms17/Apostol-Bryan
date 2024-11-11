//Object Literals

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["reading", "hiking", "coding"],
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};