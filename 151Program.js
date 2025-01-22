function handle(user) {
    try {
        return JSON.parse(user);
    } catch (error) {
        console.log(error);
        return null;
    }
}

let user = '{"name":"Sonu","age":30,"isStudent":false}';
console.log(handle(user));