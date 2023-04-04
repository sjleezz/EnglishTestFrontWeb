import { rest } from "msw";
import { initMockDb } from "../mocks/mockDb";

const mockDb = initMockDb();
console.log("chapters mockdb: ", mockDb);

export const chaptersHandlers = [
  // ListChapters
  // GET /chapters?pageSize=10&pageToken=1
  rest.get("localhost/chapters", async (req, res, ctx) => {
    const pageSize = req.url.searchParams.getAll("pageSize");
    const pageToken = req.url.searchParams.getAll("pageToken");

    const lowerBound = Number(pageSize) * (Number(pageToken) - 1) + 1;
    const upperBound = Number(pageSize) * Number(pageToken);

    // request one more item to check there exist next page
    const response = await queryChapters(lowerBound, upperBound + 1);

    let nextPageToken;
    let chapters;
    if (response.length <= pageSize) {
      nextPageToken = "";
      chapters = response;
    } else {
      nextPageToken = Number(pageToken) + 1;
      chapters = response.slice(0, -1);
    }

    const result = {
      chapters: chapters,
      nextPageToken: nextPageToken,
    };
    return res(ctx.status(200), ctx.json(result));
  }),

  // GetChapter
  // GET /chapters/1
  rest.get("localhost/chapters/:chapterId", async (req, res, ctx) => {
    const { chapterId } = req.params;
    const result = await queryChapter(chapterId);
    return res(ctx.status(200), ctx.json(result));
  }),

  // CreateChapter
  // POST /chapters
  rest.post("localhost/chapters", async (req, res, ctx) => {
    const result = await createChapter(req.body);
    return res(ctx.status(200), ctx.json(result));
  }),

  // UpdateChapter
  // PATCH /chapters
  rest.patch("localhost/chapters/:chapterId", async (req, res, ctx) => {
    const { chapterId } = req.params;
    const chapter = { id: chapterId, name: req.body.name };
    const result = await updateChapter(chapter);
    return res(ctx.status(200), ctx.json(result));
  }),

  // DeleteChapter
  // DELETE /chapters
  rest.delete("localhost/chapters/:chapterId", async (req, res, ctx) => {
    const { chapterId } = req.params;
    const result = await deleteChapter(chapterId);
    return res(ctx.status(200), ctx.json(result));
  }),
];

async function queryChapters(lowerBound, upperBound) {
  const includeLower = true;
  const includeUpper = true;
  return await mockDb.chapter
    .where("id")
    .between(lowerBound, upperBound, includeLower, includeUpper)
    .toArray();
}

async function queryChapter(chapterId) {
  const result = await mockDb.chapter
    .where("id")
    .equals(Number(chapterId))
    .toArray();
  return result[0];
}

async function createChapter(body) {
  let response;
  let result;
  try {
    response = await mockDb.chapter.add(body);
    result = { id: response, name: body.name };
  } catch (err) {
    console.log("msw dexie err - createChapter(): ", err);
  }
  return result;
}

async function updateChapter(body) {
  const id = body.id;
  const chapter = { name: body.name };
  let response;
  let result;
  try {
    response = await mockDb.chapter.update(Number(id), chapter);
    console.log("updateChapter: ", response, " record updated");
    result = chapter;
  } catch (err) {
    console.log("msw dexie err - updateChapter(): ", err);
  }
  return result;
}

async function deleteChapter(chapterId) {
  let response;
  let result;
  try {
    response = await mockDb.chapter
      .where("id")
      .equals(Number(chapterId))
      .delete();
    console.log("deleteChapter: ", response, " record deleted");
    result = {};
  } catch (err) {
    console.log("msw dexie err - deleteChapter(): ", err);
  }
  return result;
}
