function emailValidation(emailValue) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/;

    if (!emailPattern.test(emailValue)) {
        throw new Error("Invalid Email!");
    }

    return `Email: ${emailValue}`;
}

let emailValue = "prince@gmail.com";

try {
    console.log(emailValidation(emailValue));
} catch (error) {
    console.error(error.message);
}
