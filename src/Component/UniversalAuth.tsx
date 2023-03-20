import { useCallback } from "react";
import { useQuery } from "react-query";
import { VOCA_PRO_API_URL, universalFetchData } from "../Service/FetchData";
import { UniversalFetchDataResolveType, TErrorType } from "../index.d";
import { useDispatch } from "react-redux";
import { setAuthToken } from "../Redux/Actions/actionsForData";

// const _URL = "https://edutech-speechpro.mediazenaicloud.com:37205";
// const _URL = process.env.REACT_APP_SPEECH_PRO_API_URL;
// const signInData = {
//     loginId: 'admin',
//     password: 'mediazen1!',
// }
const signInData = {
  username: "admin",
  password: "admin1111",
};

export const UniversalAuth = () => {

  console.log('[UniversalAuth]')

  // Dispatcher
  const dispatch = useDispatch();

  // useQuery
  const { isLoading, isError, data, error } = useQuery<
    UniversalFetchDataResolveType,
    TErrorType<string>
  >(
    "get_universal_auth",
    async () =>
      universalFetchData({
        method: "post",
        url: VOCA_PRO_API_URL + "/auth/signIn",
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
          `[Auth] result.data.token : ${result.data.token}`
        );
        // save the auth token in store
        dispatch(setAuthToken(result.data.token));
      },
      onError: (e) => {
        // 실패시 호출 (401, 404 같은 error가 아니라 정말 api 호출이 실패한 경우만 호출됩니다.)
        // 강제로 에러 발생시키려면 api단에서 throw Error 날립니다. (참조: https://react-query.tanstack.com/guides/query-functions#usage-with-fetch-and-other-clients-that-do-not-throw-by-default)
        console.log(`[Auth] e.message : ${e.message}`);
      },
    }
  );

  return null
};

export default UniversalAuth;
