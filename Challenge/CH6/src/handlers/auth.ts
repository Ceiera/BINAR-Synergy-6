import AuthService from "../services/auth";
import { AuthRequest } from "../models/dto/auth";
import { Request, Response } from "express";
import { isErrorType } from "../utils/checker";
import { DefaultResponse } from "../models/dto/default";
import { UserRequest } from "../models/dto/user";
import jwt from "jsonwebtoken";
import UserService from "../services/users";
import { User } from "../models/entity/user";

class AuthHandler {
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      if (!(email && password)) {
        return res.status(400).send({
          status: "ERROR",
          message: "Email and password are required",
          data: [],
        });
      }
      const payload: AuthRequest = {
        email: email,
        password: password,
      };
      const token = await AuthService.login(payload);
      return res.status(200).send({
        status: "SUCCESS",
        message: "Login success",
        data: {
          token: "Bearer "+token,
        },
      });
    } catch (error: any) {
      return res.status(500).send({
        status: "ERROR",
        message: error.message,
        data: [],
      });
    }
  }
  async currentUser(req: Request, res: Response) {
    try {
      const user:User = await UserService.getUserById(req.user.id||0);
      return res.status(200).send({
        status: "SUCCESS",
        message: "Current user",
        data: {
          current_user: user
        }
      })
    } catch (error:any) {
      return res.status(500).send({
        status: "ERROR",
        message: error.message,
        data: []
      })
    }
  }
}

export default AuthHandler;