import React, { useState } from "react";
import { Empty, Skeleton } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../../../Redux/Reducer/rootReducer";

const contentStyle: React.CSSProperties = {
  margin: 0,
  //   width: '100px',
  //   height: "100%",
  color: "#fff",
  //   lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

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
