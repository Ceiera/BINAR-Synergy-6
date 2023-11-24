import jwt from "jsonwebtoken";
import { TokenPayload } from "../models/entity/auth";
import { NextFunction, Request, Response } from "express";

class AuthMiddleWare {
  static async authenticateSuperAdmin(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
        const token = req.headers.authorization;
        
    } catch (error) {
      return res.status(401).send({
        status: "UNAUTHORIZED",
        message: "Session expired, please login again",
        data: null,
      });
    }
  }
}
