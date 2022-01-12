// function createUser(email, password, language) {
//     return {
//         email,
//         password,
//         language,
//         printPassword() {
//             console.log(this.password);
//         },
//     };
// }

// function User(email, password, language) {
//     this.email = email;
//     this.password = password;
//     this.language = language;
// }

// User.prototype.printPassword = function () {
//     console.log(this.password);
// };

// const user = new User("chris@email.com", "12345678", "English");
// console.log(user);

class User {
    constructor(email, password, language) {
        this.email = email;
        this.password = password;
        this.language = language;
    }

    get name() {
        return this.email.split("@")[0];
    }

    set name(value) {
        const [, suffix] = this.email.split("@");
        this.email = value + "@" + suffix;
    }

    printPassword() {
        console.log(this.password);
    }
}

const user = new User("chris@email.com", "12345678", "English");
user.name = "newName";
console.log(user.name);
console.log(user.email);
