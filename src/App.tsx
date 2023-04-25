import MessagesDisplay from "./components/MessagesDisplay";
import CodeDisplay from "./components/CodeDisplay";

const App = () => {
  return (
    <div className="App">
      <MessagesDisplay/>
      <input/>
      <CodeDisplay/>
      <div>
        <button id="get-query">
          Generate!
        </button>
        <button id="clear-chat">
          Clear
        </button>
      </div>
    </div>
  );
}
export default App
