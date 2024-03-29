import Dexie from "dexie";
import { random } from "lodash";

var instance;

export const initMockDb = () => {
  const dbName = "DevicePro";

  console.log("initMockDb: singleton outside");
  if (!instance) {
    console.log("initMockDb: singleton inside");

    Dexie.delete(dbName);
    const db = new Dexie(dbName);

    db.version(1).stores({
      chapter: "++id",
      sentence: "++id, chapterId, text, textOrig, lm, wave",
      account:
        "++id, roleId, pauseDuration, loginId, name, email, gender, location",
      password:
        "++id, accountId, password, passwordHash, passwordQuestion, passwordAnswer",
      contents: "++id, contentsId, title, type, src",
    });

    // CreateChapters(db);
    // CreateSentences(db);
    CreateAccounts(db);
    CreatePasswords(db);
    CreateContents(db);

    instance = db;
  }

  return instance;
};

async function CreateChapters(db) {
  const numChapters = 100;

  const chapters = Array(numChapters)
    .fill()
    .map((c, i) => (c = { name: "Chapter " + (i + 1).toString() }));

  await db.chapter.bulkAdd(chapters);
}

async function CreateSentences(db) {
  const numSentences = 2000;
  const numSentencesPerChapter = 20;

  const sentences = Array(numSentences)
    .fill()
    .map(
      (s, i) =>
        (s = {
          chapterId:
            parseInt(i / Number(numSentencesPerChapter)) !== 1
              ? parseInt(i / Number(numSentencesPerChapter)) + 1
              : 1,
          text: "Test Text of Sentence " + (i + 1).toString(),
          textOrig: "Test Text orig of Sentence " + (i + 1).toString(),
          lm: "Test lm of Sentence " + (i + 1).toString(),
          wave: "Test wave of Sentence " + (i + 1).toString(),
        })
    );
  await db.sentence.bulkAdd(sentences);
}

async function CreateAccounts(db) {
  const numAccounts = 10000;
  const roleIdRandom = () => {
    return Math.floor(Math.random() + 0.5) + 2;
  };

  const accounts = Array(numAccounts)
    .fill()
    .map(
      (c, i) =>
        (c = {
          loginId: "id_" + i.toString(),
          name: "name_" + i.toString(),
          email: i.toString() + "@example.com",
          roleId: i === 0 ? 1 : roleIdRandom(),
        })
    );

  await db.account.bulkAdd(accounts);
}

// TO DO : connection with 'account table' and 'password table' by using 'accountId' is not realized.
// password table is just created in this manner => Array(100).fill().map()...
async function CreatePasswords(db) {
  const numPasswords = 100;

  const passwords = Array(numPasswords)
    .fill()
    .map(
      (c, i) =>
        (c = {
          accountId: i.toString(),
          password: "pw" + i.toString(),
          passwordHash: "passwordHash" + i.toString(),
          passwordQuestion: "passwordQuestion" + i.toString(),
          passwordAnswer: "passwordAnswer" + i.toString(),
        })
    );

  await db.password.bulkAdd(passwords);
}

function makeImagUrl() {
  return `https://picsum.photos/seed/${random(1, 2000)}/500/300`;
}

function checkIdForContents(contentsId) {
  switch (contentsId) {
    case 1:
      return {
        type: "speech",
        src: makeImagUrl(),
        title: "Explain below picture",
      };
    case 2:
      return {
        type: "speech",
        src: makeImagUrl(),
        title: "Explain below picture",
      };
    case 3:
      return {
        type: "voca",
        src: "VocaPro Question",
        title: "Read below questions and write your opinions",
      };
    case 4:
      return {
        type: "voca",
        src: "VocaPro Question",
        title: "Read below questions and write your opinions",
      };
    case 5:
      return {
        type: "grammar",
        src: "GrammarPro Question",
        title: "Read below questions and write your opinions",
      };
    case 6:
      return {
        type: "grammar",
        src: "GrammarPro Question",
        title: "Read below questions and write your opinions",
      };
    default:
      return {
        type: "error",
        src: "error",
        title: "Error has been occurred",
      };
  }
}

async function CreateContents(db) {
  const numContents = 12;
  const numContentsRatio = 2;
  const contents = Array(numContents)
    .fill()
    .map(
      (c, i) =>
        (c = {
          contentsId: parseInt(i / Number(numContentsRatio)) + 1,
          type: checkIdForContents(parseInt(i / Number(numContentsRatio)) + 1)
            .type,
          src: checkIdForContents(parseInt(i / Number(numContentsRatio)) + 1)
            .src,
          title:
            checkIdForContents(parseInt(i / Number(numContentsRatio)) + 1)
              .title +
            " " +
            (i + 1).toString(),
        })
    );
  await db.contents.bulkAdd(contents);
}
