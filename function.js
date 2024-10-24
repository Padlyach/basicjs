
function hello(name){
    console.log("hello"+name);
}
hello("John")

// Get Data Form Api
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(respon => respon.json())
.then(json => console.log(json));