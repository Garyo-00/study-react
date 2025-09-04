import "@/styles/globals.css";
import { useCounter } from "../hooks/useCounter.jsx";
import { useInputArray } from "../hooks/useInputArray.jsx";
import { useBgColor } from "../hooks/useBgColor.jsx";

const App = ({ Component, pageProps }) => {
  const counter = useCounter();
  const inputArray = useInputArray();
  useBgColor();

  return <Component {...pageProps} {...counter} {...inputArray} />;
};

export default App;
