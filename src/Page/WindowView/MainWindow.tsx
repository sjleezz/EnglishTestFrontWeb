import React, { useState, useRef, useEffect } from "react";
import styles from "../../theme/WindowView.module.css";
import cn from "classnames";
import { useSelector, useDispatch } from "react-redux";
import Contents from "./Contents";
import { RootState } from "../../Redux/Reducer/rootReducer";
import { universalFetchData } from "../../Service/FetchData";
import { setContents } from "../../Redux/Actions/actionsForContents";

export const MainWindow: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const mounted = useRef<boolean>(false);
  const tempStorage = useRef<any>([]);

  //state
  const contentsState = useSelector(
    (state: RootState) => state.contentsReducer
  );

  // Dispatcher
  const dispatch = useDispatch();

  // Get Contents
  const getListContents = (nextPageTok: number) => {
    setLoading(true);
    const getChapters = async () => {
      const response = await universalFetchData({
        method: "get",
        url: `/api/contents?pageSize=10&pageToken=${nextPageTok}`,
        data: null,
        headers: {
          Accept: "application/json, text/plain, */*",
        },
      });

      return response.data;
    };
    getChapters()
      .then((result) => {
        console.log("[getListChapters] result :", result);
        const data = result.data;
        data.contents.forEach((el: any) => tempStorage.current.push(el));
        const nextPageTok = data.nextPageToken;
        if (nextPageTok != "") {
          getListContents(nextPageTok);
        } else {
          dispatch(setContents({ contents: tempStorage.current }));
          tempStorage.current = [];
          setLoading(false);
          return;
        }
      })
      .catch((error) => {
        alert(error.message);
        console.debug(error);
        setLoading(false);
      })
      .finally(() => {
        // setIsLoading(false);
      });
  };

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      if (!contentsState.contents.contents.length) {
        getListContents(1);
      }
    }
  }, []);

  return (
    <div className={cn(styles.window)}>
      <Contents />
    </div>
  );
};

export default MainWindow;
