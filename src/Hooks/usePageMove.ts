import { useRef, useEffect } from "react";

export const usePageMove = ({
  ref,
  pageRef,
  current,
  setCurrent
}: {
  ref: React.RefObject<HTMLDivElement>;
  pageRef: React.RefObject<HTMLDivElement>;
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const DIVIDER_HEIGHT = 5;

  useEffect(() => {
    console.log('[usePageMove] Click!')
    const clickHandler = (e : MouseEvent) => {
      e.preventDefault();

      const pageHeight = window.innerHeight * 0.9; // 화면 세로길이, 100vh와 같습니다.
      console.log("current :", current);
        if (current === 0) {
          (pageRef.current as HTMLElement).scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setCurrent(0)
        } else if (current === 1) {
          (pageRef.current as HTMLElement).scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setCurrent(1)
        } else if (current === 2) {
          (pageRef.current as HTMLElement).scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setCurrent(2)
        } else {
          (pageRef.current as HTMLElement).scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT * 3,
            left: 0,
            behavior: "smooth",
          });
          setCurrent(3)
        }
        
      
    };

    const outerDivRefCurrent = ref?.current;
    outerDivRefCurrent?.addEventListener("click", clickHandler);

    return () => {
      outerDivRefCurrent?.removeEventListener("click", clickHandler);
    };
  }, []);
};


export default usePageMove