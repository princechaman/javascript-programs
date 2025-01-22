function validateInput(input) {
    if (!input || input.trim() === "") {
        throw new Error("Input cannot be empty!");
    }
    return `Valid input: ${input}`;  
}

let input = prompt("Enter a value:");
try {
    let result = validateInput(input);
    console.log(result);
} catch (error) {
    console.error(error.message);
}