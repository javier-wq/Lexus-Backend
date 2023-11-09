import { Response } from "express";
import { AnyExpression } from "mongoose";

const handlerHttp = (res: Response, error: string, errorRaw?: any) => {
  console.log(errorRaw);
  res.status(500);
  res.send({ error });
};

export { handlerHttp };
