import { useQuery } from "react-query";
import { universalFetchData, AXIOS_CONFIG } from "../../Service/FetchData";
import { UniversalFetchDataResolveType, TErrorType } from "../../index.d";
import { useSelector } from 'react-redux'
import { RootState } from '../../Redux/Reducer/rootReducer'
import VocaProView from '../../Page/VocaPro/View'

const bodyData = {
  text: "I once misquoted the fees for a particular type of membership to the club where I worked. I explained my mistake to my supervisor, who appreciated my coming to him, and my honesty.",
  model: "model1",
};

export const VocaPro = () => {
    const authToken = useSelector(
        (state: RootState) => state.dataReducer.authToken
      );

      console.log(
        `[VocaPro] authToken : ${authToken}`
      );

  const { isLoading, isError, data, error } = useQuery<
    UniversalFetchDataResolveType,
    TErrorType<string>
  >(
    "get_vocapro",
    async () =>
      universalFetchData({
        method: "post",
        url: "/api/edu/vocapro",
        // url: VOCA_PRO_API_URL + "/vocapro",
        data: bodyData,
        headers: AXIOS_CONFIG(authToken),
      }),
    {
      refetchOnWindowFocus: false, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
      retry: 1, // 실패시 재호출 몇번 할지
      onSuccess: (result) => {
        // data : { message : ReturnMessageType, data : any }
        // 성공시 호출
        console.log(`[VocaPro] result.data : ${result.data}`);
      },
      onError: (e) => {
        // 실패시 호출 (401, 404 같은 error가 아니라 정말 api 호출이 실패한 경우만 호출됩니다.)
        // 강제로 에러 발생시키려면 api단에서 throw Error 날립니다. (참조: https://react-query.tanstack.com/guides/query-functions#usage-with-fetch-and-other-clients-that-do-not-throw-by-default)
        console.log(`[VocaPro] e.message : ${e.message}`);
      },
    }
  );

  return (
    <VocaProView data={data?.data.data} isLoading={isLoading} />
  );
};
export default VocaPro;
