interface userInterface {
  id?: number;
  name: string;
}

class UserRepository {
  getAll() {
    throw new Error("USER_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  addUser(user: userInterface) {
    throw new Error("USER_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  getById(id:number) {
    throw new Error("USER_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  deleteById(id:number) {
    throw new Error("USER_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }
}

class UserRepositoryPostgres extends UserRepository {
  users: userInterface[];
  constructor(something: userInterface[]) {
    super();
    this.users = something;
  }

  _generateId = (): number => {
    return this.users.length + 1;
  };

  getAll() {
    return this.users;
  }

  addUser(user: userInterface) {
    const newUser: userInterface = { id: this._generateId(), ...user };
    this.users.push(newUser);
    return newUser;
  }

  getById(id: number): userInterface | undefined {
    return this.users.find((user) => {
      return user.id === id;
    });
  }

  deleteById(id: number): String {
    this.users = this.users.filter((user) => {
      return user.id != id;
    });
    return `ID ${id} successfully deleted`;
  }
}

const users:userInterface[] = [
    {
      id: 1,
      name: "Agus",
    },
    {
      id: 2,
      name: "NHK",
    },
  ];

let test:UserRepositoryPostgres = new UserRepositoryPostgres(users);

console.log(test.getAll());
console.log(test.deleteById(1));
console.log(test.getAll());
