import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Headline(props) {
  console.log(props.title);
  return (
    <div>
      <ol>
        <li>
          {props.title} <code>pages/{props.page}.js</code>.
        </li>
        <li>Go</li>
      </ol>
    </div>
  );
}
