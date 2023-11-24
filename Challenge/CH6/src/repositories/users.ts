import { UserRequest } from "../models/dto/user";
import { User, UserEntity } from "../models/entity/user";

class UserRepository {
  static async getAllUsers(): Promise<User[]> {
    try {
      const userQuery: User[] = await UserEntity.query().where(
        "deleted_at",
        ""
      );
      return userQuery;
    } catch (error) {
      throw error;
    }
  }
  static async getUserById(id: number): Promise<User> {
    try {
      const userQuery: User[] = await UserEntity.query()
        .where("id", id)
        .andWhere("deleted_at", "");
      const selectedUser: User = userQuery[0];
      return selectedUser;
    } catch (error) {
      throw error;
    }
  }
  static async getUserByUsername(username: string): Promise<User> {
    try {
      const userQuery: User[] = await UserEntity.query()
        .where("username", username)
        .andWhere("deleted_at", "");
      const selectedUser: User = userQuery[0];
      return selectedUser;
    } catch (error) {
      throw error;
    }
  }
  static async createUser(user: UserRequest): Promise<User> {
    try {
      const newUser = await UserEntity.query().insert({
        username: user.username,
        email: user.email,
        password: user.password,
        role: user.role,
      });
      return newUser;
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(id: number, user: UserRequest): Promise<User> {
    try {
      const userQuery = await UserEntity.query()
        .where("id", id)
        .update({
          username: user.username,
          email: user.email,
          password: user.password,
          role: user.role,
        })
        .returning("*");
      const updatedUser = userQuery[0];
      return updatedUser;
    } catch (error) {
      throw error;
    }
  }
  static async deleteUser(id: number): Promise<string> {
    try {
      const userQuery = await UserEntity.query().where("id", id).del();
      return "Success";
    } catch (error) {
      throw error;
    }
  }
}

export default UserRepository;
