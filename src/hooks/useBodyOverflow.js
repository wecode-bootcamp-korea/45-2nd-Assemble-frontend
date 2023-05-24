import { useEffect } from "react";

const useBodyOverflow = overflowValue => {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = overflowValue;

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [overflowValue]);
};

export default useBodyOverflow;
