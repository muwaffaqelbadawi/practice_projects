let usersDB = [];

document.getElementById("put").addEventListener("click", (event) => {
  event.preventDefault();
  const params = getUserInput();
  const user = createUser(params);
  put(user);
});

document.getElementById("update").addEventListener("click", (event) => {
  event.preventDefault();
  /* const params = getUserInput();
  const user = createUser(params);
  update(user); */
});

document.getElementById("remove").addEventListener("click", (event) => {
  event.preventDefault();
  const id = getRemoveId();
  remove(id);
});

const put = (user) => {
  const id = usersDB.length === 0 ? 1 : usersDB[usersDB.length - 1].id + 1;
  user.id = id;

  display(usersDB);
  return usersDB;
};

const update = (userObj) => {
  // const index = usersDB.findIndex((user) => user.id === userObj.id);

  display(usersDB);
  return usersDB;
};

const remove = (id) => {
  const idExist = usersDB.some((user) => user.id === id);
  !idExist
    ? console.log(`Id ${id} does not exist`)
    : (usersDB = usersDB.filter((user) => user.id !== id));

  display(usersDB);
  return usersDB;
};

const list = (users) => {
  let userItem = "";
  !users.length
    ? (userItem = "")
    : users.forEach((user) => {
        userItem += `<li>Name: ${user.firstName} ${user.lastName} ID: ${user.id}</li>`;
      });
  document.getElementById("item").innerHTML = userItem;
};

const count = (users) => {
  document.getElementById("user-count").innerText = `${users.length} ${
    users.length <= 1 ? "user" : "users"
  } registered`;
};

const createUser = (params) => {
  const [firstName, lastName, email, password] = params;
  const userObj = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  };
  return userObj;
};

const getUserInput = () => {
  const firstNameField = document.getElementById("firstName");
  const lastNameField = document.getElementById("lastName");
  const emailField = document.getElementById("email");
  const passwordField = document.getElementById("password");
  const userParams = [
    firstName.value,
    lastName.value,
    email.value,
    password.value,
  ];

  clear([firstNameField, lastNameField, emailField, passwordField]);
  return userParams;
};

const getRemoveId = () => {
  const idField = document.getElementById("remove-id");
  const id = Number(idField.value);

  clear(idField);
  return id;
};

const display = (users) => {
  list(users);
  count(users);
};

const clear = (field) => {
  Array.isArray(field)
    ? field.forEach((input) => {
        input.value = "";
      })
    : (field.value = "");
};
