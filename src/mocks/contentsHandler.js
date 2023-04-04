import { rest } from "msw";
import { initMockDb } from "./mockDb";

const mockDb = initMockDb();
console.log("contents mockdb: ", mockDb);

export const contentsHandlers = [
  // ListContents
  // GET /contents
  rest.get("/api/contents", async (req, res, ctx) => {
    const pageSize = req.url.searchParams.getAll("pageSize");
    const pageToken = req.url.searchParams.getAll("pageToken");

    const lowerBound = Number(pageSize) * (Number(pageToken) - 1) + 1;
    const upperBound = Number(pageSize) * Number(pageToken);

    // request one more item to check there exist next page
    const response = await queryContents(lowerBound, upperBound + 1);

    let nextPageToken;
    let contents;
    if (response.length <= pageSize) {
      nextPageToken = 0;
      contents = response;
    } else {
      nextPageToken = Number(pageToken) + 1;
      contents = response.slice(0, -1);
    }

    const result = {
      contents: contents,
      nextPageToken: nextPageToken,
    };

    return res(ctx.status(200), ctx.json(result));
  }),

  // ListContents
  // GET /api/contents/1
  rest.get("/api/content/:contentsId", async (req, res, ctx) => {
    const { contentsId } = req.params;
    const result = await queryContent(contentsId);
    return res(ctx.status(200), ctx.json(result));
  }),
];

async function queryContents(lowerBound, upperBound) {
  const includeLower = true;
  const includeUpper = true;
  return await mockDb.contents
    .where("id")
    .between(lowerBound, upperBound, includeLower, includeUpper)
    .toArray();
}

async function queryContent(contentsId) {
  const result = await mockDb.contents
    .where("contentsId")
    .equals(Number(contentsId))
    .toArray();
  return result;
}
