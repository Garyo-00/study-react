export function Headline(props) {
  return (
    <div>
      <ol>
        <li>{props.children}</li>
        <li>Go</li>
      </ol>
    </div>
  );
}
