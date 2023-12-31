let usersDB = [];

document.getElementById("put").addEventListener("click", (event) => {
  event.preventDefault();
  const data = getUserData();
  const user = createUser(data);
  put(user);
});

document.getElementById("update").addEventListener("click", (event) => {
  event.preventDefault();
  const currentUser = 0;
  const user = usersDB[currentUser];
  update(user);
});

document.getElementById("remove").addEventListener("click", (event) => {
  event.preventDefault();
  const id = getId();
  remove(id);
});

const put = (user) => {
  usersDB.push(user);
  display(usersDB);
};

const update = (user) => {
  const updatedUserIndex = usersDB.findIndex(
    (updatedUser) => updatedUser.id === user.id
  );
  usersDB.splice(updatedUserIndex, 1, user);

  display(usersDB);
};

const remove = (id) => {
  const idExist = usersDB.some((user) => user.id === id);
  !idExist
    ? console.log(`Id ${id} does not exist`)
    : (usersDB = usersDB.filter((user) => user.id !== id));

  display(usersDB);
};

const createUser = (data) => {
  const [firstName, lastName, email, password] = data;
  const id = createId();
  const userObj = {
    id: id,
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  };
  return userObj;
};

const createId = () => {
  const id = usersDB.length === 0 ? 1 : usersDB[usersDB.length - 1].id + 1;
  return id;
};

const getUserData = () => {
  const firstNameField = document.getElementById("firstName");
  const lastNameField = document.getElementById("lastName");
  const emailField = document.getElementById("email");
  const passwordField = document.getElementById("password");
  const userdata = [
    firstName.value,
    lastName.value,
    email.value,
    password.value,
  ];
  const inputFields = [
    firstNameField,
    lastNameField,
    emailField,
    passwordField,
  ];

  clear(inputFields);
  return userdata;
};

const getId = () => {
  const idField = document.getElementById("remove-id");
  const id = Number(idField.value);

  clear(idField);
  return id;
};

const display = (users) => {
  list(users);
  count(users);
};

const list = (users) => {
  let userItem = "";
  !users.length
    ? (userItem = "")
    : users.forEach((user) => {
        userItem += `<li>Name: ${user.firstName} ${user.lastName} ID: ${user.id}`;
      });
  document.getElementById("item").innerHTML = userItem;
};

/* const createUserItem = (users) => {
  const parentElement = document.getElementById("itemList");
  const originalUserItem = document.getElementById("item");
  const newList = document.createElement("li");
  let userItem = "";

  !users.length
    ? (userItem = "")
    : users.forEach((user) => {
        userItem = document.createTextNode(
          `Name: ${user.firstName} ${user.lastName} ID: ${user.id}`
        );
      });
  newList.appendChild(userItem);
  parentElement.insertBefore(newList, originalUserItem);
}; */

const count = (users) => {
  document.getElementById("user-count").innerText = `${users.length} ${
    users.length <= 1 ? "user" : "users"
  } registered`;
};

const clear = (field) => {
  Array.isArray(field)
    ? field.forEach((input) => {
        input.value = "";
      })
    : (field.value = "");
};
