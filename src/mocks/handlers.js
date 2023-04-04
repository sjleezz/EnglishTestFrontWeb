import { rest } from "msw";
import { TEST_LOGIN } from "./data/dummy";

export const handlers = [
  rest.post("/:URL/auth", (req, res, ctx) => {
    const loginId = req.body.loginId;
    const password = req.body.password;

    console.log("[server] loginId: ", loginId);
    console.log("[server] password: ", password);

    const result = TEST_LOGIN.filter(
      (el) => el.loginId === loginId && el.password === password
    )[0];
    console.log("result: ", result);

    if (result) {
      const token = genJwtToken(result.id);
      const roleId = getRoleId();
      return res(
        ctx.status(200),
        ctx.json({ accessToken: token, roleId: roleId })
      );
    } else {
      return res(ctx.status(599), ctx.json());
    }
  }),
];

const getRoleId = () => {
  return 1;
};
const genJwtToken = (userId) => {
  return `1uhioh98c1h91asfjt_${userId}`;
};

// TODO: not implemented yet
// priority: low
// ListUserdicts
// GetUserdicts
// CreateUserdicts
// UpdateUserdicts
// DeleteUserdicts

// TODO: not implemented yet
// priority: low
// GetRole
// CreateRole
// UpdateRole
// DeleteRole

// TODO: not implemented yet
// priority: low
// GetAccount
// CreateAccount
// UpdateAccount
// DeleteAccount

// TODO: not implemented yet
// priority: low
// GetPassword
// CreatePassword
// UpdatePassword
// DeletePassword

// NOTE: not implemented yet
// perhaps no need to use these
// priority: very low
// GetLoginAttempt
// CreateLoginAttempt
// UpdateLoginAttempt
// DeleteLoginAttempt

// NOTE: not implemented yet
// perhaps no need to use these
// priority: very low
// ListCmubases
// GetCmubases
// CreateCmubases
// UpdateCmubases
// DeleteCmubases
