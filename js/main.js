let usersDB = [];

document.getElementById("add").addEventListener("click", (event) => {
  event.preventDefault();
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const user = [firstName.value, lastName.value, email.value, password.value];

  addNewUser(user);
  clearInput();
});

document.getElementById("delete").addEventListener("click", (event) => {
  event.preventDefault();
  const userInput = document.getElementById("id");
  const id = Number(userInput.value);

  deleteUser(id);
  clearInput();
});

const addNewUser = (user) => {
  const [firstName, lastName, email, password] = user;
  const id = usersDB.length === 0 ? 1 : usersDB[usersDB.length - 1].id + 1;

  usersDB.push({
    id: id,
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  });

  display(usersDB);
  return usersDB;
};

const deleteUser = (id) => {
  const newUsersDB = usersDB.filter((user) => user.id !== id);
  usersDB = newUsersDB;

  display(usersDB);
  //   return usersDB;
};

const clearInput = () => {
  id.value = "";
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  password.value = "";
};

const list = (users) => {
  let userItem = "";
  users.forEach((user) => {
    userItem +=
      "<li>Name: " +
      user.firstName +
      " " +
      user.lastName +
      " ID: " +
      user.id +
      "</li>";
    document.getElementById("item").innerHTML = userItem;
  });
};

const count = (users) => {
  document.getElementById(
    "item-count"
  ).innerHTML = `You have ${users.length} items in the list`;
};

const display = (usersDB) => {
  /* if (!usersDB.length) {
  } */

  list(usersDB);
  count(usersDB);
};
