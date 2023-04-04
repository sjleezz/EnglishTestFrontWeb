import MainWrapper from "../../components/MainWrapper";
import {
  ListChapters,
  GetChapter,
  CreateChapter,
  UpdateChapter,
  DeleteChapter,
} from "./DebugMswChapters";

import {
  ListSentences,
  ListSentenceTexts,
  ListSentencesByChapter,
  ListSentenceTextsByChapter,
  GetSentence,
  GetSentenceText,
  GetSentenceLm,
  GetSentenceWave,
  CreateSentence,
  UpdateSentence,
  DeleteSentence,
  CreateSentenceTranscription,
  MakeAvailable,
  UpdateSentenceWave,
} from "./DebugMswSentences";
import { Evaluate } from "./DebugMswEvaluate";

const DebugMsw = (props) => {
  return (
    <MainWrapper>
      <h2>Debug Msw</h2>
      <ListChapters />
      <GetChapter />
      <CreateChapter />
      <UpdateChapter />
      <DeleteChapter />
      <ListSentences />
      <ListSentenceTexts />
      <ListSentencesByChapter />
      <ListSentenceTextsByChapter />
      <GetSentence />
      <GetSentenceText />
      <GetSentenceLm />
      <GetSentenceWave />
      <CreateSentence />
      <UpdateSentence />
      <DeleteSentence />
      <CreateSentenceTranscription />
      <MakeAvailable />
      <UpdateSentenceWave />
      <Evaluate />
    </MainWrapper>
  );
};

export default DebugMsw;
