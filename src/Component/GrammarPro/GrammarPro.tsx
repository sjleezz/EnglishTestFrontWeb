import { useQuery } from "react-query";
import {
  GRAMMAR_PRO_API_URL,
  universalFetchData,
  AXIOS_CONFIG
} from "../../Service/FetchData";
import { UniversalFetchDataResolveType, TErrorType } from "../../index.d";
import { useSelector } from 'react-redux'
import { RootState } from '../../Redux/Reducer/rootReducer'

const bodyData = {
  sentences:
    "Happy families is all alike. Every unhappy family unhappy in its own ways.",
  model: "gt",
};

export const GrammarPro = () => {
    const authToken = useSelector(
        (state: RootState) => state.dataReducer.authToken
      );

      console.log(
        `[GrammarPro] authToken : ${authToken}`
      );

  const { isLoading, isError, data, error } = useQuery(
    "get_grammarpro",
    async () =>
      universalFetchData({
        method: "post",
        url: GRAMMAR_PRO_API_URL + "/api/edu/grammarpro",
        // url: GRAMMAR_PRO_API_URL + "/grammarpro",
        data: bodyData,
        headers: AXIOS_CONFIG(authToken),
      }),
    {
      refetchOnWindowFocus: false, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
      retry: 1, // 실패시 재호출 몇번 할지
      onSuccess: (result) => {
        // data : { message : ReturnMessageType, data : any }
        // 성공시 호출
        console.log(`[GrammarPro] result.data : ${result.data}`);
      },
      onError: (e) => {
        // 실패시 호출 (401, 404 같은 error가 아니라 정말 api 호출이 실패한 경우만 호출됩니다.)
        // 강제로 에러 발생시키려면 api단에서 throw Error 날립니다. (참조: https://react-query.tanstack.com/guides/query-functions#usage-with-fetch-and-other-clients-that-do-not-throw-by-default)
        console.log(`[GrammarPro] e : ${e}`);
      },
    }
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error</span>;
  }

  return (
    <>
      <div>{`GrammarPro`}</div>
      <div>{data?.message === "success" && data.message}</div>
    </>
  );
};
export default GrammarPro;
