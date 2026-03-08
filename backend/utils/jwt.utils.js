import jwt from "jsonwebtoken";

const EXPIRES_IN = "1h";

//====================================
//            create token
//====================================
export function signToken(payload) {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: EXPIRES_IN,
  });

  return token;
}

//====================================
//           verify token
//====================================
export function verifyToken(token) {
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    return payload;
  } catch (error) {
    return null;
  }
}