import React, { useState } from "react";
import { AxiosResponse } from 'axios'
import { Empty, Skeleton } from "antd";
import { RootState } from "../../Redux/Reducer/rootReducer";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "react-query";
import { universalFetchData } from "../../Service/FetchData";
import { UniversalFetchDataResolveType, TErrorType, ContentsType6 } from "../../index.d";

export const ContentsAPI = ({contentsOrder, setContentsAction}
  : {
    contentsOrder : number, 
    setContentsAction : (payload : any) => {
      type : any,
      payload: any
    }
  }
  ) => {
  //state
  const contentsState = useSelector(
    (state: RootState) => state.contentsReducer
  );

  // Dispatcher
  const dispatch = useDispatch();

  // useQuery
  const { isLoading, isError, data, error } = useQuery<
    UniversalFetchDataResolveType<AxiosResponse<ContentsType6[], any>>,
    TErrorType<string>
  >(
    `get_contents_${contentsOrder}`,
    async () =>
      universalFetchData({
        method: "get",
        url: `/api/content/${contentsOrder}`,
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
        console.log(`[Contents${contentsOrder}] result.data.data : ${result.data.data}`);
        // save the auth token in store
        dispatch(setContentsAction(result.data.data));
      },
      onError: (e) => {
        // 실패시 호출 (401, 404 같은 error가 아니라 정말 api 호출이 실패한 경우만 호출됩니다.)
        // 강제로 에러 발생시키려면 api단에서 throw Error 날립니다. (참조: https://react-query.tanstack.com/guides/query-functions#usage-with-fetch-and-other-clients-that-do-not-throw-by-default)
        console.log(`[Contents${contentsOrder}] e.message : ${e.message}`);
      },
    }
  );

  return null
};

export default ContentsAPI;
