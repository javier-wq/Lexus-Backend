import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "token.01010101";

// Generate the JWT
const generateToken = async (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn: "2h",
  });
  return jwt;
};

// Verify the JWT
const verifyToken = (jwt: string) => {
  const isOK = verify(jwt, JWT_SECRET);
  return isOK;
};

export { generateToken, verifyToken };
