import { verifyToken } from "../utils/jwt.utils.js";

function authMiddleware(req, res, next) {
  
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = verifyToken(token);

    if (!payload) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    req.payload = payload;

    next();
    
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}

export default authMiddleware;