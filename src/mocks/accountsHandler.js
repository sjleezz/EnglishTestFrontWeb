import { rest } from "msw";
import { initMockDb } from "../mocks/mockDb";

const mockDb = initMockDb();
console.log("accounts mockdb: ", mockDb);

export const accountsHandlers = [
  // ListAccounts
  // GET /accounts
  rest.get("localhost/accounts", async (req, res, ctx) => {
    const pageSize = req.url.searchParams.getAll("pageSize");
    const pageToken = req.url.searchParams.getAll("pageToken");
    const lowerBound = Number(pageSize) * (Number(pageToken) - 1) + 1;
    const upperBound = Number(pageSize) * Number(pageToken);
    const response = await queryAccounts(lowerBound, upperBound + 1);
    let nextPageToken;
    let accounts;
    if (response.length <= pageSize) {
      nextPageToken = "";
      accounts = response;
    } else {
      nextPageToken = Number(pageToken) + 1;
      accounts = response.slice(0, -1);
    }

    const result = {
      accounts: accounts,
      nextPageToken: nextPageToken,
    };
    return res(ctx.status(200), ctx.json(result));
  }),

  // GetAccount
  // GET /accounts/accountId
  rest.get("localhost/accounts/:accountId", async (req, res, ctx) => {
    const { accountId } = req.params;
    const result = await queryAccount(accountId);
    return res(ctx.status(200), ctx.json(result));
  }),

  // CreateAccount
  // POST /accounts
  rest.post("localhost/accounts", async (req, res, ctx) => {
    const result = await createAccount(req.body);
    return res(ctx.status(200), ctx.json(result));
  }),

  // UpdateAccount
  // PATCH /accounts/accountId
  rest.patch("localhost/accounts/:accountId", async (req, res, ctx) => {
    const { accountId } = req.params;
    const account = { id: accountId, account: req.body };
    const result = await updateAccount(account);
    return res(ctx.status(200), ctx.json(result));
  }),

  // DeleteAccount
  // DELETE /accounts/accountId
  rest.delete("localhost/accounts/:accountId", async (req, res, ctx) => {
    const { accountId } = req.params;
    const result = await deleteAccount(accountId);
    return res(ctx.status(200), ctx.json(result));
  }),
];

async function queryAccounts(lowerBound, upperBound) {
  const includeLower = true;
  const includeUpper = true;
  return await mockDb.account
    .where("id")
    .between(lowerBound, upperBound, includeLower, includeUpper)
    .toArray();
}

async function queryAccount(accountId) {
  const result = await mockDb.account
    .where("id")
    .equals(Number(accountId))
    .toArray();
  return result[0];
}

async function createAccount(body) {
  let response;
  let result;
  try {
    response = await mockDb.account.add(body);
    result = {
      id: response,
      roleId: body.roleId,
      //pauseDuration: body.pauseDuration,
      loginId: body.loginId,
      name: body.name,
      email: body.email,
      gender: body.gender,
      location: body.location,
      password: "speechpro" + response,
    };
    console.log("[msw dexie : createAccount] result :", result);
  } catch (err) {
    console.log("msw dexie err - createAccount(): ", err);
  }
  return result;
}

async function updateAccount(params) {
  const { id, account } = params;
  let response;
  let result;
  try {
    response = await mockDb.account.update(Number(id), account);
    console.log("updateAccount: ", response, " record updated");
    result = account;
  } catch (err) {
    console.log("msw dexie err - updateAccount(): ", err);
  }
  return result;
}

async function deleteAccount(accountId) {
  let response;
  let result;
  try {
    response = await mockDb.account
      .where("id")
      .equals(Number(accountId))
      .delete();
    console.log("deleteAccount: ", response, " record deleted");
    result = {};
  } catch (err) {
    console.log("msw dexie err - deleteAccount(): ", err);
  }
  return result;
}
