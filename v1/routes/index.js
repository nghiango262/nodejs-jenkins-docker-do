import express from "express";
import { refreshToken, signIn, signUp } from "../controllers/auth.controller";
import {
  signAccessToken,
  signRefreshToken,
  verifyToken,
} from "../middleware/jwt";

const router = express.Router();

/**
 * router: test
 */
router.get("/checkhealth", async (req, res) => {
  const payload = {
    id: 2,
    email: "ksdjf",
  };
  res.status(200).json({
    status: "success",
    msg: "OK",
    tokens: {
      accessToken: await signAccessToken(payload),
      refreshToken: await signRefreshToken(payload),
    },
  });
});

/**
 *  Router: auth
 */
router.post("/auth/signup", signUp);
router.post("/auth/signin", signIn);
router.get("/auth/refreshtoken", refreshToken);

/**
 * Router: user
 */
router.get("/me", verifyToken, (req, res) => {
  res.json({
    status: "success",
    msg: "OK",
    data: req.user,
  });
});

export default router;
