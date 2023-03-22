import { MenuList } from "../index.d";
import { useState, useRef, useEffect } from "react";
import styles from "../theme/Home.module.css";
import cn from "classnames";
import assess1 from "../assets/images/assess1.jpg";
import assess2 from "../assets/images/assess2.jpg";
import Dots from "../Component/Dots";
import styled from "styled-components";
import video1 from "../assets/videos/video1.mp4";
import video2 from "../assets/videos/video2.mp4";
import video3 from "../assets/videos/video3.mp4";

const DIVIDER_HEIGHT = 5;

const VideoComponent = styled.video`
  // position: fixed;
  // width: 90%;
  height: 100vh;
  // color: black;
`;

export const Intro = () => {
  const [scrollIndex, setScrollIndex] = useState(1);
  const outerDivRef = useRef<HTMLDivElement>(null);

  // 로컬 변수 용도로 useRef를 사용하는 경우, MutableRefObject<T>를 사용해야 하므로
  // 제네릭 타입과 같은 타입의 초깃값을 넣어주자.

  // DOM을 직접 조작하기 위해 프로퍼티로 useRef 객체를 사용할 경우,
  // RefObject<T>를 사용해야 하므로 초깃값으로 null을 넣어주자.

  useEffect(() => {
    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();
      // 스크롤 행동 구현
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current as HTMLElement; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, down");
          (outerDivRef.current as HTMLElement).scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, down");
          (outerDivRef.current as HTMLElement).scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        } else {
          // 현재 3페이지
          console.log("현재 3페이지, down");
          (outerDivRef.current as HTMLElement).scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          console.log("현재 1페이지, up");
          (outerDivRef.current as HTMLElement).scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, up");
          (outerDivRef.current as HTMLElement).scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else {
          // 현재 3페이지
          console.log("현재 3페이지, up");
          (outerDivRef.current as HTMLElement).scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        }
      }
    };
    const outerDivRefCurrent = outerDivRef?.current;
    outerDivRefCurrent?.addEventListener("wheel", wheelHandler);

    return () => {
      outerDivRefCurrent?.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  return (
    <div ref={outerDivRef} className={cn(styles.outer)}>
      <div
        className={cn(styles.inner, styles.tab1)}
        onClick={() => {
          window.location.href = "/Home";
        }}
      >
        <div className={cn(styles.name)}>Speech Pro</div>
        <VideoComponent muted={true} autoPlay={true} loop>
          <source src={video1} type="video/mp4" />
          <strong>Your browser does not support the video tag.</strong>
        </VideoComponent>
      </div>
      <div className={cn(styles.divider)}></div>
      <div
        className={cn(styles.inner, styles.tab2)}
        onClick={() => {
          window.location.href = "/Home";
        }}
      >
        <div className={cn(styles.name)}>Voca Pro</div>
        <VideoComponent muted={true} autoPlay={true} loop>
          <source src={video2} type="video/mp4" />
          <strong>Your browser does not support the video tag.</strong>
        </VideoComponent>
      </div>
      <div className={cn(styles.divider)}></div>
      <div
        className={cn(styles.inner, styles.tab3)}
        onClick={() => {
          window.location.href = "/Home";
        }}
      >
        <div className={cn(styles.name)}>Grammar Pro</div>
        <VideoComponent muted={true} autoPlay={true} loop>
          <source src={video3} type="video/mp4" />
          <strong>Your browser does not support the video tag.</strong>
        </VideoComponent>
      </div>
      <Dots scrollIndex={scrollIndex} />
    </div>
  );
};

export default Intro;
