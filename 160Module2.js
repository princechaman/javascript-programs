export function toUpperCase(str) {
    if (typeof str !== "string") {
        throw new Error("Input must be a string.");
    }
    return str.toUpperCase();
}

export function toLowerCase(str) {
    if (typeof str !== "string") {
        throw new Error("Input must be a string.");
    }
    return str.toLowerCase();
}