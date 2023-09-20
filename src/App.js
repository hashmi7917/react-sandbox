import { useEffect, useState } from "react";

export default function App() {
  const [advice, setadvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvise() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setadvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(function () {
    getAdvise();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvise}>Get advice</button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return (
    <p>
      You Have Read <strong>{props.count}</strong> piece of advice
    </p>
  );
}
