function greet(firstName, lastName, { salutation = "Hi", suffix = "Mr" } = {}) {
    console.log(`${salutation} ${suffix} ${firstName} ${lastName}`);
}

greet("Chris", "Davis");
greet("Chris", "Davis", { salutation: "Hello", suffix: "Lord" });
