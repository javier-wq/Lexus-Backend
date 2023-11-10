import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handler";

// Validate that the route being visited has a valid JWT session
const checkJWT = (req: Request, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";
    const jwt = jwtByUser.split(" ").pop();
    const isUser = verifyToken(`${jwt}`);

    // Validate that the user has a valid session
    if (!isUser) {
      res.status(401);
      res.send("INVALID_JWT");
    } else {
      next();
    }
  } catch (e) {
    res.status(400);
    res.send("INVALID_SESSION");
  }
};

export { checkJWT };
