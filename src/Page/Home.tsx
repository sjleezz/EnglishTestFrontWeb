import { MenuList } from "../index.d";
import { useState, useRef, useEffect } from "react";
import styles from "../theme/Home.module.css";
import cn from "classnames";
import assess1 from "../assets/images/assess1.jpg";
import assess2 from "../assets/images/assess2.jpg";
import Dots from "../Component/Dots";

const DIVIDER_HEIGHT = 5;

export const Home = ({
  setNext,
}: {
  setNext: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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

  //   useEffect(()=> {
  //     console.log('scrollIndex :', scrollIndex)
  //     switch(scrollIndex) {
  //         case 1:
  //             window.location.href = '/#Pronouciation'
  //             break;
  //         case 2:
  //             window.location.href = '/#Speaking'
  //             break;
  //         case 3:
  //             window.location.href = '/#Information'
  //             break;
  //         default:
  //             window.location.href = ''
  //             break;
  //     }
  //   }, [scrollIndex])

  return (
    <div ref={outerDivRef} className={cn(styles.outer)}>
      <div className={cn(styles.inner, styles.bgYellow)}
      onClick={() => {
        setNext(true)
      }}
      >
        <span>
          {/* <img className={styles.img} src={assess1}></img> */}
          Speech Pro
        </span>
      </div>
      <div className={cn(styles.divider)}></div>
      <div className={cn(styles.inner, styles.bgBlue)}
      onClick={() => {
        setNext(true)
      }}
      >
        <span>
          {/* <img className={styles.img} src={assess2}></img> */}
          Voca Pro
        </span>
      </div>
      <div className={cn(styles.divider)}></div>
      <div className={cn(styles.inner, styles.bgPink)}
      onClick={() => {
        setNext(true)
      }}

      >Grammar Pro</div>
      <Dots scrollIndex={scrollIndex} />
    </div>
  );
};

export default Home;
