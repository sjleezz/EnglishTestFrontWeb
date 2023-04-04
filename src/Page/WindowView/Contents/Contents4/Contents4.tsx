import React, { useState } from "react";
import { AxiosResponse } from 'axios'
import { Empty, Skeleton } from "antd";
import { RootState } from "../../../../Redux/Reducer/rootReducer";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "react-query";
import { universalFetchData } from "../../../../Service/FetchData";
import { UniversalFetchDataResolveType, TErrorType, ContentsType4 } from "../../../../index.d";
import { setContents4 } from "../../../../Redux/Actions/actionsForContents";

export const Contents4 = () => {
  //state
  const contents4 = useSelector(
    (state: RootState) => state.contentsReducer.contents4
  );

  // Dispatcher
  const dispatch = useDispatch();

  // useQuery
  const { isLoading, isError, data, error } = useQuery<
    UniversalFetchDataResolveType<AxiosResponse<ContentsType4[], any>>,
    TErrorType<string>
  >(
    "get_contents_4",
    async () =>
      universalFetchData({
        method: "get",
        url: `/api/content/${4}`,
        data: null,
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
        console.log(`[Contents] result.data.data : ${result.data.data}`);
        // save the auth token in store
        dispatch(setContents4(result.data.data));
      },
      onError: (e) => {
        // 실패시 호출 (401, 404 같은 error가 아니라 정말 api 호출이 실패한 경우만 호출됩니다.)
        // 강제로 에러 발생시키려면 api단에서 throw Error 날립니다. (참조: https://react-query.tanstack.com/guides/query-functions#usage-with-fetch-and-other-clients-that-do-not-throw-by-default)
        console.log(`[Contents] e.message : ${e.message}`);
      },
    }
  );

  return null
};

export default Contents4;
