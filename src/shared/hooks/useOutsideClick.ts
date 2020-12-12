import { useEffect } from "react";

export const useOutsideClick = (
  ref: React.MutableRefObject<HTMLDivElement | undefined>,
  callback: () => void
) => {
  // @ts-ignore
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export default useOutsideClick;
