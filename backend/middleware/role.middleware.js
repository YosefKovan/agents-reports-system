import HttpError from "../errors/HttpError.js";

function roleMiddleware(role) {
  
  return (req, res, next) => {
    if (req.payload.role.toUpperCase() !== role.toUpperCase()) {
      throw new HttpError(401, "unauthorized - not valid role");
    }

    next();
  };
}

export default roleMiddleware;
