import { useEffect } from "react";

export const usePageBlockScroll = ({
  ref,
  current
}: {
  ref: React.RefObject<HTMLDivElement>;
  current: number
}) => {

  useEffect(() => {
    const wheelHandler = (e: WheelEvent) => {
      if(current !== 3)
       // stop scrolling.
       e.preventDefault();
       e.stopPropagation();
       return false;
    };
    const divRefCurrent = ref?.current;
      divRefCurrent?.addEventListener("wheel", wheelHandler);

      return () => {
        divRefCurrent?.removeEventListener("wheel", wheelHandler);
      };
  });
};

export default usePageBlockScroll;
