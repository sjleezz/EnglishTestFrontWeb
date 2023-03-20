import { useEffect, useRef, useCallback, useMemo } from "react";
import {
  fetchGetRequest,
  fetchPostRequest,
  fetchPatchRequest,
  fetchDeleteRequest,
  Response,
} from "./DebugMswFetchUtil";

export const ListSentences = () => {
  const ListSentencesRef = useRef(null);
  const url = "/sentences?pageSize=10&pageToken=1";

  const testListSentences = useCallback(() => {
    fetchGetRequest(url, ListSentencesRef);
  }, [ListSentencesRef]);

  useEffect(testListSentences);
  return <Response name="ListSentences" ref={ListSentencesRef} />;
};

export const ListSentenceTexts = () => {
  const ListSentenceTextsRef = useRef(null);
  const url = "/sentences/texts?pageSize=10&pageToken=1";

  const testListSentenceTexts = useCallback(() => {
    fetchGetRequest(url, ListSentenceTextsRef);
  }, [ListSentenceTextsRef]);

  useEffect(testListSentenceTexts);
  return <Response name="ListSentenceTexts" ref={ListSentenceTextsRef} />;
};

export const ListSentencesByChapter = () => {
  const ListSentencesByChapterRef = useRef(null);
  const url = "/chapters/5/sentences?pageSize=10&pageToken=1";

  const testListSentencesByChapter = useCallback(() => {
    fetchGetRequest(url, ListSentencesByChapterRef);
  }, [ListSentencesByChapterRef]);

  useEffect(testListSentencesByChapter);
  return (
    <Response name="ListSentencesByChapter" ref={ListSentencesByChapterRef} />
  );
};

export const ListSentenceTextsByChapter = () => {
  const ListSentenceTextsByChapterRef = useRef(null);
  const url = "/chapters/5/sentences/texts?pageSize=10&pageToken=1";

  const testListSentenceTextsByChapter = useCallback(() => {
    fetchGetRequest(url, ListSentenceTextsByChapterRef);
  }, [ListSentenceTextsByChapterRef]);

  useEffect(testListSentenceTextsByChapter);
  return (
    <Response
      name="ListSentenceTextsByChapter"
      ref={ListSentenceTextsByChapterRef}
    />
  );
};

export const GetSentence = () => {
  const GetSentenceRef = useRef(null);
  const url = "/sentences/5";

  const testGetSentence = useCallback(() => {
    fetchGetRequest(url, GetSentenceRef);
  }, [GetSentenceRef]);

  useEffect(testGetSentence);
  return <Response name="GetSentence" ref={GetSentenceRef} />;
};

export const GetSentenceText = () => {
  const GetSentenceTextRef = useRef(null);
  const url = "/sentences/5/texts";

  const testGetSentenceText = useCallback(() => {
    fetchGetRequest(url, GetSentenceTextRef);
  }, [GetSentenceTextRef]);

  useEffect(testGetSentenceText);
  return <Response name="GetSentenceText" ref={GetSentenceTextRef} />;
};

export const GetSentenceLm = () => {
  const GetSentenceLmRef = useRef(null);
  const url = "/sentences/5/lms";

  const testGetSentenceLm = useCallback(() => {
    fetchGetRequest(url, GetSentenceLmRef);
  }, [GetSentenceLmRef]);

  useEffect(testGetSentenceLm);
  return <Response name="GetSentenceLm" ref={GetSentenceLmRef} />;
};

export const GetSentenceWave = () => {
  const GetSentenceWaveRef = useRef(null);
  const url = "/sentences/5/waves";

  const testGetSentenceWave = useCallback(() => {
    fetchGetRequest(url, GetSentenceWaveRef);
  }, [GetSentenceWaveRef]);

  useEffect(testGetSentenceWave);
  return <Response name="GetSentenceWave" ref={GetSentenceWaveRef} />;
};

export const CreateSentence = () => {
  const CreateSentenceRef = useRef(null);
  const url = "/sentences";
  const body = useMemo(() => {
    return {
      chapterId: 1,
      text: "Create Test Text of Sentence",
      textOrig: "Create Test Text of Sentence",
      lm: "Create Test lm of Sentence",
      wave: "Create Test wave of Sentence",
    };
  }, []);

  const testCreateSentence = useCallback(() => {
    fetchPostRequest(url, body, CreateSentenceRef);
  }, [body, CreateSentenceRef]);

  useEffect(testCreateSentence);
  return <Response name="CreateSentence" ref={CreateSentenceRef} />;
};

export const UpdateSentence = () => {
  const UpdateSentenceRef = useRef(null);
  const url = "/sentences/1";
  const body = useMemo(() => {
    return {
      chapterId: 1,
      text: "Update Test Text of Sentence",
      textOrig: "Update Test Text of Sentence",
      // lm: "Update Test lm of Sentence",
      // wave: "Update Test wave of Sentence",
    };
  }, []);

  const testUpdateSentence = useCallback(() => {
    fetchPatchRequest(url, body, UpdateSentenceRef);
  }, [body, UpdateSentenceRef]);

  useEffect(testUpdateSentence);
  return <Response name="UpdateSentence" ref={UpdateSentenceRef} />;
};

export const DeleteSentence = () => {
  const DeleteSentenceRef = useRef(null);
  const url = "/sentences/2";

  const testDeleteSentence = useCallback(() => {
    fetchDeleteRequest(url, DeleteSentenceRef);
  }, [DeleteSentenceRef]);

  useEffect(testDeleteSentence);
  return <Response name="DeleteSentence" ref={DeleteSentenceRef} />;
};

export const CreateSentenceTranscription = () => {
  const CreateSentenceTranscriptionRef = useRef(null);
  const url = "/sentences/1/transcription";

  const testCreateSentenceTranscription = useCallback(() => {
    fetchPostRequest(url, "", CreateSentenceTranscriptionRef);
  }, [CreateSentenceTranscriptionRef]);

  useEffect(testCreateSentenceTranscription);
  return (
    <Response
      name="CreateSentenceTranscription"
      ref={CreateSentenceTranscriptionRef}
    />
  );
};

export const MakeAvailable = () => {
  const MakeAvailableRef = useRef(null);
  const url = "/sentences/1/make-available";

  const testMakeAvailable = useCallback(() => {
    fetchPostRequest(url, "", MakeAvailableRef);
  }, [MakeAvailableRef]);

  useEffect(testMakeAvailable);
  return <Response name="MakeAvailable" ref={MakeAvailableRef} />;
};

export const UpdateSentenceWave = () => {
  const UpdateSentenceWaveRef = useRef(null);
  const url = "/sentences/1/wave";
  const body = useMemo(() => {
    return {
      // chapterId: 1,
      // text: "Update Test Text of Sentence",
      // textOrig: "Update Test Text of Sentence",
      // lm: "Update Test lm of Sentence",
      wave: "Update Test wave of Sentence",
    };
  }, []);

  const testUpdateSentenceWave = useCallback(() => {
    fetchPatchRequest(url, body, UpdateSentenceWaveRef);
  }, [body, UpdateSentenceWaveRef]);

  useEffect(testUpdateSentenceWave);
  return <Response name="UpdateSentenceWave" ref={UpdateSentenceWaveRef} />;
};
