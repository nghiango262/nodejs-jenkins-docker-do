import fs from "fs";
import path from "path";
import { promisify } from "util";
import JWT from "jsonwebtoken";

export const signAccessToken = async (payload) => {
  /*
  // create payload
  const payload = {
    userId: 1,
    name: "Nghia",
  };
  */

  const cert = await readPrivateKey();
  //create Token
  return await JWT.sign(payload, cert, { expiresIn: "1m", algorithm: "RS256" });
};

export const signRefreshToken = async (payload) => {
  // get payload

  const cert = await readPrivateKey();
  //create Token
  return await JWT.sign(payload, cert, { expiresIn: "1d", algorithm: "RS256" });
};

export const verifyToken = async (req, res, next) => {
  try {
    if (req.headers["x-token"]) {
      const token = req.headers["x-token"];
      const cert = await readPublicKey();
      const payload = await JWT.verify(token, cert);
      req.user = payload;
      return next();
    }
    return res.status(401).json({
      code: 401,
      msg: "Khong co token",
    });
    //    next("khong co token");
  } catch (error) {
    return res.status(401).json({
      code: 401,
      msg: "Invalid Token!",
      error,
    });
  }
};

/**
 *
 * @returns string
 */
export const readPublicKey = () => {
  return promisify(fs.readFile)(
    path.join(process.cwd(), "config/keys/public.pem"),
    "utf8"
  );
};
/**
 *
 * @returns string
 */
export const readPrivateKey = () => {
  return promisify(fs.readFile)(
    path.join(process.cwd(), "config/keys/private.pem"),
    "utf8"
  );
};
