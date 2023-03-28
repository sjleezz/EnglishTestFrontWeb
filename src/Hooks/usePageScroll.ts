import { useRef, useEffect } from "react";

// 로컬 변수 용도로 useRef를 사용하는 경우, MutableRefObject<T>를 사용해야 하므로
// 제네릭 타입과 같은 타입의 초기 값을 넣어주자.

// DOM을 직접 조작하기 위해 프로퍼티로 useRef 객체를 사용할 경우,
// RefObject<T>를 사용해야 하므로 초기 값으로 null을 넣어주자.

export const usePageScroll = ({
  ref,
  setCurrent,
}: {
  ref: React.RefObject<HTMLDivElement>;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const DIVIDER_HEIGHT = 5;

  useEffect(() => {
    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();
      // 스크롤 행동 구현
      const { deltaY } = e;
      const { scrollTop } = ref.current as HTMLElement; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight * 0.9; // 화면 세로길이, 100vh와 같습니다.

      if (deltaY > 0) {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          console.log("현재 1페이지, down");
          (ref.current as HTMLElement).scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setCurrent(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          console.log("현재 2페이지, down");
          (ref.current as HTMLElement).scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setCurrent(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          console.log("현재 3페이지, down");
          (ref.current as HTMLElement).scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
            left: 0,
            behavior: "smooth",
          });
          setCurrent(3);
        } else {
          console.log("현재 4페이지, down");
          (ref.current as HTMLElement).scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
            left: 0,
            behavior: "smooth",
          });
          setCurrent(3);
        }
      } else {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          console.log("현재 1페이지, up");
          (ref.current as HTMLElement).scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setCurrent(0);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          console.log("현재 2페이지, up");
          (ref.current as HTMLElement).scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setCurrent(0);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          console.log("현재 3페이지, up");
          (ref.current as HTMLElement).scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setCurrent(1);
        } else {
          console.log("현재 4페이지, up");
          (ref.current as HTMLElement).scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setCurrent(2);
        }
      }
    };

    const outerDivRefCurrent = ref?.current;
    outerDivRefCurrent?.addEventListener("wheel", wheelHandler);
    
    return () => {
      outerDivRefCurrent?.removeEventListener("wheel", wheelHandler);
    };
  }, []);
};


export default usePageScroll