import "./styles.css";

interface AppProps {
  headerText: string;
  extraText?: string;
}

export default function App({
  headerText,
  extraText = "some extra text"
}: AppProps) {
  return (
    <div className="App">
      <h1>{headerText}</h1>
      {extraText && <p>{extraText} </p>}
    </div>
  );
}
