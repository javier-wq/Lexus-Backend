import { Response } from "express";

const handlerHttp = (res: Response, error: string) => {
  res.status(500);
  res.send({ error });
};

export { handlerHttp };
