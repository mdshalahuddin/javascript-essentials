// 4. Using this Keyword Inside Methods

const person = {
    firstName: "Md Al",
    lastName: "Mamun",
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    introduce: function () {
        console.log(`Hi, I am ${this.fullName()}.`)
    }
}

console.log(person.fullName());
person.introduce()

