import React, { useState } from "react";
import { Empty, Skeleton } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../../../Redux/Reducer/rootReducer";

export const ContentsView = ({
  contents,
  index,
}: {
  contents: any;
  index: number;
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  console.log("[ContentsView] contents :", contents);

  const currentNum = useSelector(
    (state: RootState) => state.contentsReducer.currentNum
  );

  return (
    <>
      {currentNum === index && (
        <>
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
        </>
      )}
    </>
  );
};

export default ContentsView;
