// TODO
import { rest } from "msw";
import { initMockDb } from "../mocks/mockDb";
import { TEST_PATCH_PASSWORD } from "./data/dummy";

const mockDb = initMockDb();
console.log("password mockdb: ", mockDb);

export const passwordsHandlers = [
  // UpdatePassword
  // PATCH /passwords
  rest.patch("localhost/passwords", async (req, res, ctx) => {
    const token = req.headers.get("token");
    const { newPw } = req.body;
    const param = { token, newPw };
    const response = await updatePassword(param);
    console.log("[PUT /passwords] response: ", response);
    if (response === 200) {
      return res(ctx.status(200), ctx.json());
    } else {
      return res(ctx.status(598), ctx.json());
    }
  }),

  // UpdatePassword
  // PUT /passwords?passwordId=999
  rest.put("/passwords", async (req, res, ctx) => {
    const token = req.headers.get("token");
    const { newPw } = req.body;
    const param = { token, newPw };
    const response = await updatePassword(param);
    console.log("[PUT /passwords] response: ", response);
    if (response === 200) {
      return res(ctx.status(200), ctx.json());
    } else {
      return res(ctx.status(598), ctx.json());
    }
  }),

  // TO DO
  // CreatePassword
  // POST /passwords
  rest.post("localhost/passwords", async (req, res, ctx) => {
    const result = await createPassword(req.body);
    return res(ctx.status(200), ctx.json(result));
  }),

  // DeletePassword
  // DELETE /accounts/accountId
  rest.delete("localhost/passwords", async (req, res, ctx) => {
    const { accountId } = req.params;
    const result = await deletePassword(accountId);
    return res(ctx.status(200), ctx.json(result));
  }),
];

// TO DO
async function createPassword(body) {
  let response;
  let result;
  try {
    response = await mockDb.account.add(body);
    result = {
      id: response,
      accountId: response.accountId,
      password: body.password,
      passwordHash: response.passwordHash,
      passwordQuestion: response.passwordQuestion,
      passwordAnswer: response.passwordAnswer,
    };
    console.log("[msw dexie : createPassword] result :", result);
  } catch (err) {
    console.log("msw dexie err - createPassword(): ", err);
    result = { err: err };
  }
  return result;
}

// TO DO
async function updatePassword(param) {
  const isValid = checkValidity(param);
  if (isValid) {
    const password = { password: param.newPw };
    let response;
    let result;
    try {
      // TO DO
      // response = await mockDb.password.update(accountId, password);
      // console.log("updatePassword: ", response, " record updated");
      result = 200;
    } catch (err) {
      console.log("msw dexie err - updatePassword(): ", err);
      result = { err: err };
    }
    return result;
  } else {
    return null;
  }
}

// TO DO
async function deletePassword(passwordId) {
  let response;
  let result;
  try {
    response = await mockDb.password
      .where("id")
      .equals(Number(passwordId))
      .delete();
    console.log("deletePassword: ", response, " record deleted");
    result = {};
  } catch (err) {
    console.log("msw dexie err - deletePassword(): ", err);
    result = { err: err };
  }
  return result;
}

// TO DO
// check user has valid accessToken and has been send new PW successfully.
// It is just an example.
function checkValidity(param) {
  const { token, newPw } = param;
  if (token && newPw) {
    return true;
  } else {
    return false;
  }
}
