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
  console.log("[ContentsView] contents :", contents);

  const currentNum = useSelector(
    (state: RootState) => state.contentsReducer.currentNum
  );

  return (
    <>
      {currentNum === index && (
        <div>
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

export default ContentsView;
