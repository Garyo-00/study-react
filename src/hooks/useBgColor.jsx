import { useEffect } from "react";
import { useRouter } from "next/router";
import { useMemo } from "react";

export const useBgColor = () => {
  const router = useRouter();

  const bgColor = useMemo(() => {
    return router.pathname === "/" ? "lightblue" : "lightgreen";
  }, [router.pathname]);

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [bgColor]);
};
