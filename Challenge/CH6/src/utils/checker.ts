import { ErrorResponse } from "../models/dto/default";

const isErrorType = (object: any): object is ErrorResponse => {
  return "httpCode" in object && "message" in object;
};

export { isErrorType };
