import { rest } from "msw";
import { initMockDb } from "../mocks/mockDb";

const mockDb = initMockDb();

export const sentencesHandlers = [
  // ListSentences
  // GET /sentences?pageSize=10&pageToken=1
  rest.get("localhost/sentences", async (req, res, ctx) => {
    const pageSize = req.url.searchParams.getAll("pageSize");
    const pageToken = req.url.searchParams.getAll("pageToken");

    const lowerBound = Number(pageSize) * (Number(pageToken) - 1) + 1;
    const upperBound = Number(pageSize) * Number(pageToken);

    // request one more item to check there exist next page
    const response = await querySentences(lowerBound, upperBound + 1);

    let nextPageToken;
    let sentences;
    if (response.length <= pageSize) {
      nextPageToken = "";
      sentences = response;
    } else {
      nextPageToken = Number(pageToken) + 1;
      sentences = response.slice(0, -1);
    }

    const result = {
      sentences: sentences,
      nextPageToken: nextPageToken,
    };

    return res(ctx.status(200), ctx.json(result));
  }),

  // ListSentenceTexts
  // GET /sentences/texts?pageSize=10&pageToken=1
  rest.get("localhost/texts", async (req, res, ctx) => {
    const pageSize = req.url.searchParams.getAll("pageSize");
    const pageToken = req.url.searchParams.getAll("pageToken");

    const lowerBound = Number(pageSize) * (Number(pageToken) - 1) + 1;
    const upperBound = Number(pageSize) * Number(pageToken);

    // request one more item to check there exist next page
    const response = await querySentenceTexts(lowerBound, upperBound + 1);
    // console.log("ListSentenceTexts: ", response);
    let nextPageToken;
    let sentences;
    if (response.length <= pageSize) {
      nextPageToken = "";
      sentences = response;
    } else {
      nextPageToken = Number(pageToken) + 1;
      sentences = response.slice(0, -1);
    }

    const result = {
      sentences: sentences,
      nextPageToken: nextPageToken,
    };

    return res(ctx.status(200), ctx.json(result));
  }),

  // NOTE: will be deprecated
  // ListSentencesByChapter
  // GET /chapters/123/sentences?pageSize=10&pageToken=1
  rest.get("localhost/chapters/:chapterId/sentences", async (req, res, ctx) => {
    const { chapterId } = req.params;

    const pageSize = req.url.searchParams.getAll("pageSize");
    const pageToken = req.url.searchParams.getAll("pageToken");

    const lowerBound = Number(pageSize) * (Number(pageToken) - 1) + 1;
    const upperBound = Number(pageSize) * Number(pageToken);

    // request one more item to check there exist next page
    const response = await querySentencesByChapter(
      chapterId,
      lowerBound,
      upperBound + 1
    );
    let nextPageToken;
    let sentences;
    if (response.length <= pageSize) {
      nextPageToken = "";
      sentences = response;
    } else {
      nextPageToken = Number(pageToken) + 1;
      sentences = response.slice(0, -1);
    }

    const result = {
      sentences: sentences,
      nextPageToken: nextPageToken,
    };

    return res(ctx.status(200), ctx.json(result));
  }),

  // ListSentenceTextsByChapter
  // GET /chapters/123/sentences/texts?pageSize=10&pageToken=1
  rest.get("localhost/chapters/:chapterId/texts", async (req, res, ctx) => {
    const { chapterId } = req.params;

    const pageSize = req.url.searchParams.getAll("pageSize");
    const pageToken = req.url.searchParams.getAll("pageToken");

    const lowerBound = Number(pageSize) * (Number(pageToken) - 1) + 1;
    const upperBound = Number(pageSize) * Number(pageToken);

    // request one more item to check there exist next page
    const response = await querySentenceTextsByChapter(
      chapterId,
      lowerBound,
      upperBound + 1
    );
    let nextPageToken;
    let sentences;
    if (response.length <= pageSize) {
      nextPageToken = "";
      sentences = response;
    } else {
      nextPageToken = Number(pageToken) + 1;
      sentences = response.slice(0, -1);
    }

    const result = {
      sentences: sentences,
      nextPageToken: nextPageToken,
    };
    return res(ctx.status(200), ctx.json(result));
  }),

  // GetSentence
  // GET /sentences/1
  rest.get("localhost/sentences/:sentenceId", async (req, res, ctx) => {
    const { sentenceId } = req.params;
    const result = await querySentence(sentenceId);
    return res(ctx.status(200), ctx.json(result));
  }),

  // GetSentenceText
  // GET /sentences/1/texts
  rest.get("localhost/texts/:sentenceId", async (req, res, ctx) => {
    const { sentenceId } = req.params;
    const result = await querySentenceText(sentenceId);
    return res(ctx.status(200), ctx.json(result));
  }),

  // GetSentenceLM
  // GET /sentences/1/lms
  rest.get("localhost/sentences/:sentenceId/lms", async (req, res, ctx) => {
    const { sentenceId } = req.params;
    const result = await querySentenceLm(sentenceId);
    return res(ctx.status(200), ctx.json(result));
  }),

  // GetSentenceWave
  // GET /sentences/1/waves
  rest.get("localhost/waves/:sentenceId", async (req, res, ctx) => {
    const { sentenceId } = req.params;
    const result = await querySentenceWave(sentenceId);
    return res(ctx.status(200), ctx.json(result));
  }),

  // CreateSentence
  // POST /sentences
  rest.post("localhost/sentences", async (req, res, ctx) => {
    const result = await createSentence(req.body);
    return res(ctx.status(200), ctx.json(result));
  }),

  // UpdateSentence
  // PATCH /sentences
  rest.patch("localhost/sentences/:sentenceId", async (req, res, ctx) => {
    const { sentenceId } = req.params;
    const sentence = { id: sentenceId, ...req.body };
    console.log("UpdateSentence: ", sentence);
    const result = await updateSentence(sentence);
    return res(ctx.status(200), ctx.json(result));
  }),

  // DeleteSentence
  // DELETE /sentences
  rest.delete("localhost/sentences/:sentenceId", async (req, res, ctx) => {
    const { sentenceId } = req.params;
    const result = await deleteSentence(sentenceId);
    return res(ctx.status(200), ctx.json(result));
  }),

  // CreateSentenceTranscription
  // POST /sentences/1/transcription
  rest.post(
    "localhost/sentences/:sentenceId/transcription",
    async (req, res, ctx) => {
      const result = { phonemes: "Test Phonemes of Sentence" };
      return res(ctx.status(200), ctx.json(result));
    }
  ),

  // MakeAvaiable
  // POST /sentences/1/make-available
  rest.post(
    "localhost/sentences/:sentenceId/make-available",
    async (req, res, ctx) => {
      const result = { status: 2 };
      return res(ctx.status(200), ctx.json(result));
    }
  ),

  // UpdataSentenceWave
  // PUT /sentences/1/wave
  rest.put("localhost/waves/:sentenceId", async (req, res, ctx) => {
    const { sentenceId } = req.params;
    const sentence = { id: sentenceId, wave: req.body.wave };
    console.log("UpdateSentenceWave: ", sentence);
    const result = await updateSentence(sentence);
    return res(ctx.status(200), ctx.json(result));
  }),
];

const sentencesToTexts = (sentence) => {
  return {
    id: sentence.id,
    chapterId: sentence.chapterId,
    text: sentence.text,
    textOrig: sentence.textOrig,
  };
};

const sentencesToLms = (sentence) => {
  return {
    id: sentence.id,
    chapterId: sentence.chapterId,
    lm: sentence.lm,
  };
};

const sentencesToWaves = (sentence) => {
  return {
    id: sentence.id,
    chapterId: sentence.chapterId,
    wave: sentence.wave,
  };
};

async function querySentences(lowerBound, upperBound) {
  const includeLower = true;
  const includeUpper = true;
  return await mockDb.sentence
    .where("id")
    .between(lowerBound, upperBound, includeLower, includeUpper)
    .toArray();
}

async function querySentenceTexts(lowerBound, upperBound) {
  const includeLower = true;
  const includeUpper = true;

  const sentences = await mockDb.sentence
    .where("id")
    .between(lowerBound, upperBound, includeLower, includeUpper)
    .toArray();

  const result = sentences.map(sentencesToTexts);

  return result;
}

async function querySentencesByChapter(chapterId, lowerBound, upperBound) {
  const result = await mockDb.sentence
    .where("chapterId")
    .equals(Number(chapterId))
    .toArray();

  return result.slice(lowerBound - 1, upperBound);
}

async function querySentenceTextsByChapter(chapterId, lowerBound, upperBound) {
  const sentences = await mockDb.sentence
    .where("chapterId")
    .equals(Number(chapterId))
    .toArray();

  const result = sentences.map(sentencesToTexts);

  return result.slice(lowerBound - 1, upperBound);
}

async function querySentence(sentenceId) {
  const result = await mockDb.sentence
    .where("id")
    .equals(Number(sentenceId))
    .toArray();
  return result[0];
}

async function querySentenceText(sentenceId) {
  const sentence = await mockDb.sentence
    .where("id")
    .equals(Number(sentenceId))
    .toArray();

  const result = sentence.map(sentencesToTexts);

  return result[0];
}

async function querySentenceLm(sentenceId) {
  const sentence = await mockDb.sentence
    .where("id")
    .equals(Number(sentenceId))
    .toArray();

  const result = sentence.map(sentencesToLms);

  return result[0];
}

async function querySentenceWave(sentenceId) {
  const sentence = await mockDb.sentence
    .where("id")
    .equals(Number(sentenceId))
    .toArray();

  const result = sentence.map(sentencesToWaves);

  return result[0];
}

async function createSentence(body) {
  let response;
  let result;
  try {
    response = await mockDb.sentence.add(body);
    result = {
      id: response,
      chapterId: body.chapterId,
      text: body.text,
      // textOrig: body.textOrig,
      // lm: body.lm,
      // wave: body.wave,
    };
  } catch (err) {
    console.log("msw dexie err - createSentence(): ", err);
  }
  return result;
}

async function updateSentence(sentence) {
  const id = sentence.id;
  const copy = Object.assign({}, sentence);
  delete copy["id"];

  let response;
  let result;
  try {
    response = await mockDb.sentence.update(Number(id), copy);
    console.log("updateSentence: ", response, " record updated");
    result = sentence;
  } catch (err) {
    console.log("msw dexie err - updateSentence(): ", err);
  }
  return result;
}

async function deleteSentence(sentenceId) {
  let response;
  let result;
  try {
    response = await mockDb.sentence
      .where("id")
      .equals(Number(sentenceId))
      .delete();
    console.log("deleteSentence: ", response, " record deleted");
    result = {};
  } catch (err) {
    console.log("msw dexie err - deleteSentence(): ", err);
  }
  return result;
}
