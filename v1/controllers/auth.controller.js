import { signAccessToken, signRefreshToken } from "../middleware/jwt";

export async function signUp(req, res) {
  const { email, password } = req.body;

  // validation

  // create new user
  const user = { email, password };

  //return new user info come back client
  res.status(201).json({
    status: "success",
    msg: "OK",
    user,
  });
}

export async function signIn(req, res) {}

export async function refreshToken(req, res) {
  const { user } = req;
  console.log({ user });
  const payload = {
    userId: 4,
    email: "hsfhkl",
  };
  res.status(200).json({
    code: 200,
    msg: "OK",
    tokens: {
      accessToken: await signAccessToken(payload),
      refreshToken: await signRefreshToken(payload),
    },
  });
}
