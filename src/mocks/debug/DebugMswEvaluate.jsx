import { useEffect, useRef, useCallback, useMemo } from "react";
import { fetchPostRequest, Response } from "./DebugMswFetchUtil";

export const Evaluate = () => {
  const EvaluateRef = useRef(null);
  const url = "/sentences/1-evaluate";
  const body = useMemo(() => {
    return { audio: "Test Audio" };
  }, []);

  const testEvaluate = useCallback(() => {
    fetchPostRequest(url, body, EvaluateRef);
  }, [body, EvaluateRef]);

  useEffect(testEvaluate);
  return <Response name="Evaluate" ref={EvaluateRef} />;
};
