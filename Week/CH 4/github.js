class userRepository {
  getAll() {
    throw new Error("USER_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  addUser(user) {
    throw new Error("USER_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  getById(id) {
    throw new Error("USER_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  deleteById(id) {
    throw new Error("USER_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }
}

users = [
  {
    id: 1,
    name: "Agus",
  },
  {
    id: 2,
    name: "NHK",
  },
];

class userRepositoryPostgres extends userRepository {
  constructor(something) {
    super();
    this.array = something;
  }

  getAll() {
    return this.array
  }

  addUser(user) {
    this.array.push(user);
    return this.array
  }

  getById(id) {
    let find = this.array.find((element) => {
      if (element.id == id) {
        return element
      }
    })
    return find
  }
  
  deleteById(id) {
    this.array = this.array.filter((element) => {
      return element.id != id;
    });
    return this.array
  }
}

let cobalah = new userRepositoryPostgres(users);

console.log(cobalah.getById(1))