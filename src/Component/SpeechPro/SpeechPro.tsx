import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
// import { useQuery } from "react-query";
import {
    SPEECH_PRO_API_URL,
  universalFetchData,
  AXIOS_CONFIG,
} from "../../Service/FetchData";
// import { UniversalFetchDataResolveType, TErrorType } from "../../index.d";
import { RootState } from "../../Redux/Reducer/rootReducer";
import SpeechProView from '../../Page/SpeechPro/View'

export const SpeechPro = () => {
  const authToken = useSelector(
    (state: RootState) => state.dataReducer.authToken
  );
  const tempStorage = useRef<any>([]);
  const mounted = useRef<boolean>(false);
  const [listChaptersData, setListChaptersData] = useState<string[]>([]);
  const [loading, setIsLoading] = useState<boolean>(false);

  console.log('[SpeechPro]')

  const getListChapters = (nextPageTok: number) => {
    const getChapters = async () => {
      const response = await universalFetchData({
        method: "get",
        url: SPEECH_PRO_API_URL + `/chapters?pageSize=10&pageToken=${nextPageTok}`,
        data: null,
        headers: AXIOS_CONFIG(authToken),
      });

      return response.data;
    };
    getChapters()
      .then((result) => {
        result.chapters.forEach((el: any) => tempStorage.current.push(el));
        if (result.nextPageToken === "") {
          setListChaptersData(tempStorage.current);
          tempStorage.current = [];
          setIsLoading(false);
          return;
        }
        getListChapters(result.nextPageToken);
      })
      .catch((error) => {
        alert(error.message);
        console.debug(error);
        setIsLoading(false);
      })
      .finally(() => {
        // setIsLoading(false);
      });
  };

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      getListChapters(1);
    }
  }, []);

  return (
    <>
      <span>{`SpeechPro`}</span>
      <SpeechProView chapters={listChaptersData} />
    </>
  );
};
export default SpeechPro;
