import React, { useState } from "react";
import { Empty, Skeleton } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Reducer/rootReducer";

export const ContentsView = ({
  contents,
  index,
}: {
  contents: any;
  index: number;
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const currentNum = useSelector(
    (state: RootState) => state.contentsReducer.currentNum
  );

  console.log("[ContentsView] contents :", contents);
  console.log("[ContentsView] index :", index);
  console.log("[ContentsView] currentNum :", currentNum);


  return (
    <>
      {currentNum === index && (
        <div>
          <div>
            {contents.type === "speech" && (
              <img src={contents.src} onLoad={() => setImageLoaded(true)} />
            )}
          </div>
          {!imageLoaded && (
            <>
              <Empty description={"Loading..."} />
            </>
          )}
          {contents.type === "voca" && (
            <>
              <div>{contents.src}</div>
              <div>{`Question Id : ${contents.id}`}</div>
            </>
          )}
          {contents.type === "grammar" && (
            <>
              <div>{contents.src}</div>
              <div>{`Question Id : ${contents.id}`}</div>
            </>
          )}
        </div>
      )}
    </>
  );
};
