import * as type from "../../Redux/Types";
import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "react-query";
import { universalFetchData, AXIOS_CONFIG } from "../../Service/FetchData";
import { UniversalFetchDataResolveType, TErrorType } from "../../index.d";
import { setAuthTokenForSpeechPro } from "../../Redux/Actions/actionsForData";
import { RootState } from "../../Redux/Reducer/rootReducer";
import SpeechProView from "../../Page/SpeechPro/View";
import {
  setChapters,
  setSentences,
} from "../../Redux/Actions/actionsForSpeechPro";

const signInData = {
  loginId: "admin",
  password: "mediazen1!",
};

export const SpeechPro = () => {
  const storedChapters = useSelector(
    (state: RootState) =>
      state.speechProChapterReducer.speechproChapter.chapters
  );

  const authTokenForSpeechPro = useSelector(
    (state: RootState) => state.dataReducer.authTokenForSpeechPro
  );

  console.log("[SpeechPro] storedChapters :", storedChapters);
  console.log("[SpeechPro] authTokenForSpeechPro :", authTokenForSpeechPro);

  const mounted = useRef<boolean>(false);
  const tempStorage = useRef<any>([]);
  const [chapterLoading, setChapterLoading] = useState<boolean>(true);
  const [sentenceLoading, setSentenceLoading] = useState<boolean>(true);

  console.log("[SpeechPro] authTokenForSpeechPro :", authTokenForSpeechPro);

  // Dispatcher
  const dispatch = useDispatch();

  // useQuery
  const { isLoading, isError, data, error } = useQuery<
    UniversalFetchDataResolveType<any>,
    TErrorType<string>
  >(
    "get_auth",
    async () =>
      universalFetchData({
        method: "post",
        url: "/auth",
        data: signInData,
        headers: {
          Accept: "application/json, text/plain, */*",
        },
      }),
    {
      refetchOnWindowFocus: false, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
      retry: 1, // 실패시 재호출 몇번 할지
      onSuccess: (result) => {
        // data : { message : ReturnMessageType, data : any }
        // 성공시 호출
        console.log(
          `[SpeechPro] result.data.data.accessToken : ${result.data.data.accessToken}`
        );
        // save the auth token in store
        dispatch(setAuthTokenForSpeechPro(result.data.data.accessToken));
        // setSpeechproToken(result.data.accessToken)
      },
      onError: (e) => {
        // 실패시 호출 (401, 404 같은 error가 아니라 정말 api 호출이 실패한 경우만 호출됩니다.)
        // 강제로 에러 발생시키려면 api단에서 throw Error 날립니다. (참조: https://react-query.tanstack.com/guides/query-functions#usage-with-fetch-and-other-clients-that-do-not-throw-by-default)
        console.log(`[SpeechPro] e.message : ${e.message}`);
      },
    }
  );

  // Get Chapters
  const getListChapters = (nextPageTok: number) => {
    setChapterLoading(true);
    const getChapters = async () => {
      const response = await universalFetchData({
        method: "get",
        url: `/chapters?pageSize=10&pageToken=${nextPageTok}`,
        data: null,
        headers: AXIOS_CONFIG(authTokenForSpeechPro),
      });

      return response.data;
    };
    getChapters()
      .then((result) => {
        console.log("[getListChapters] result :", result);
        const data = result.data;
        data.chapters.forEach((el: any) => tempStorage.current.push(el));
        if (data.nextPageToken === "") {
          //   setListChaptersData(tempStorage.current);
          dispatch(setChapters({ chapters: tempStorage.current }));
          tempStorage.current = [];
          setChapterLoading(false);
          return;
        }
        getListChapters(data.nextPageToken);
      })
      .catch((error) => {
        alert(error.message);
        console.debug(error);
        setChapterLoading(false);
      })
      .finally(() => {
        // setIsLoading(false);
      });
  };

  // Get Sentences
  const getListSentences = (selectedChapId: number, nextPageTok: number) => {
    const getTestAxios = async () => {
      setSentenceLoading(true);
      const response = await universalFetchData({
        method: "get",
        url: `/chapters/${selectedChapId}/texts?pageSize=1000&pageToken=${nextPageTok}`,
        data: null,
        headers: AXIOS_CONFIG(authTokenForSpeechPro),
      });

      return response.data;
    };

    getTestAxios()
      .then((result) => {
        console.log("[getListSentences] result :", result);
        const data = result.data;
        data.sentences.forEach((el: any) => tempStorage.current.push(el));
        if (data.nextPageToken === "") {
          //   setListSentencesData(tempStorage.current);
          dispatch(setSentences({ sentences: tempStorage.current }));
          tempStorage.current = [];
          setSentenceLoading(false);
          return;
        }
        getListSentences(selectedChapId, data.nextPageToken);
      })
      .catch((error) => {
        alert(error.message);
        setSentenceLoading(false);
      });
  };

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      if (authTokenForSpeechPro) {
        if (!(storedChapters.length > 0)) {
          // if chapters are not stored in redux store, do request getting chapters
          getListChapters(1);
        } else {
          setChapterLoading(false);
        }
      }
    }
  }, [authTokenForSpeechPro]);

  return (
    <SpeechProView
      chapters={storedChapters}
      chapterLoading={chapterLoading}
      sentenceLoading={sentenceLoading}
      getListSentences={getListSentences}
    />
  );
};
export default SpeechPro;
