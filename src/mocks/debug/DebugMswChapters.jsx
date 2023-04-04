import { useEffect, useRef, useCallback, useMemo } from "react";
import {
  fetchGetRequest,
  fetchPostRequest,
  fetchPatchRequest,
  fetchDeleteRequest,
  Response,
} from "./DebugMswFetchUtil";

export const ListChapters = () => {
  const ListChaptersRef = useRef(null);
  const url = "/chapters?pageSize=10&pageToken=1";

  const testListChapters = useCallback(() => {
    fetchGetRequest(url, ListChaptersRef);
  }, [ListChaptersRef]);

  useEffect(testListChapters);
  return <Response name="ListChapters" ref={ListChaptersRef} />;
};

export const GetChapter = () => {
  const GetChapterRef = useRef(null);
  const url = "/chapters/5";

  const testGetChapter = useCallback(() => {
    fetchGetRequest(url, GetChapterRef);
  }, [GetChapterRef]);

  useEffect(testGetChapter);
  return <Response name="GetChapter" ref={GetChapterRef} />;
};

export const CreateChapter = () => {
  const CreateChapterRef = useRef(null);
  const url = "/chapters";
  const body = useMemo(() => {
    return { name: "Chapter 123" };
  }, []);

  const testCreateChapter = useCallback(() => {
    fetchPostRequest(url, body, CreateChapterRef);
  }, [body, CreateChapterRef]);

  useEffect(testCreateChapter);
  return <Response name="CreateChapter" ref={CreateChapterRef} />;
};

export const UpdateChapter = () => {
  const UpdateChapterRef = useRef(null);
  const url = "/chapters/1";
  const body = useMemo(() => {
    return { name: "Chapter 123" };
  }, []);

  const testUpdateChapter = useCallback(() => {
    fetchPatchRequest(url, body, UpdateChapterRef);
  }, [body, UpdateChapterRef]);

  useEffect(testUpdateChapter);
  return <Response name="UpdateChapter" ref={UpdateChapterRef} />;
};

export const DeleteChapter = () => {
  const DeleteChapterRef = useRef(null);
  const url = "/chapters/2";

  const testDeleteChapter = useCallback(() => {
    fetchDeleteRequest(url, DeleteChapterRef);
  }, [DeleteChapterRef]);

  useEffect(testDeleteChapter);
  return <Response name="DeleteChapter" ref={DeleteChapterRef} />;
};
