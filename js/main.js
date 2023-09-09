const firstName = document.getElementById("firsName");
const lastName = document.getElementById("lasName");
const email = document.getElementById("email");
const password = document.getElementById("password");



const userDB = [];

const user = {
    firsName: "Muwaffaq",
    lasName: "Elbadawi",
    email: "muwaffaq@elbadawi.com",
    password: 123
};


const addNewUser = (user) => {
    userDB.push(user);
    return userDB;
};

// console.log(addNewUser(user));

console.log(firstName.value);
console.log(lastName.value);

