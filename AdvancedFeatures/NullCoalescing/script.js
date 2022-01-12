//used to compare null and undefined values, not empty strings or 0 as default parameters work
function greet(firstName, lastName) {
    lastName = lastName ?? "Smith";
    console.log(`${firstName} ${lastName}`);
}

greet("Chris", "");
