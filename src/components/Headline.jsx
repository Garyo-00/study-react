export function Headline(props) {
  return (
    <div>
      <ol>
        <li>アイテムの数は{props.children}個です</li>
        <li>これは{props.page}ページです</li>
        <button onClick={props.handleReduce}>減らす</button>
      </ol>
    </div>
  );
}
