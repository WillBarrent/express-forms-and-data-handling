// storages/usersStorage.js
// This class lets us simulate interacting with a database.
class UsersStorage {
  constructor() {
    this.storage = {};
    this.id = 0;
  }

  addUser({ firstName, lastName, email, age = 18, bio = ""}) {
    const id = this.id;
    this.storage[id] = { id, firstName, lastName, email, age, bio };
    this.id++;
  }

  getUsers() {
    return Object.values(this.storage);
  }

  getUser(id) {
    return this.storage[id];
  }

  updateUser(id, { firstName, lastName, email, age, bio }) {
    this.storage[id] = { id, firstName, lastName, email, age, bio };
  }

  deleteUser(id) {
    delete this.storage[id];
  }

  getUsersByEmailOrName(emailOrName) {
    const users = this.getUsers();

    const usersByName = users.filter(user => {
      const fullName = user.firstName + user.lastName;

      return fullName === emailOrName.split(" ").join("") || user.email === emailOrName;
    });
  
    return usersByName;
  }
}

module.exports = new UsersStorage();
