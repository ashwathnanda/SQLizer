import MessagesDisplay from "./components/MessagesDisplay";
import CodeDisplay from "./components/CodeDisplay";

const App = () => {
  return (
    <div className="app">
      <MessagesDisplay/>
      <input/>
      <CodeDisplay/>
        <div className='button-container'>
            <div>
                <button id="get-query">
                    Generate!
                </button>
                <button id="clear-chat">
                    Clear
                </button>
            </div>
        </div>
    </div>
  );
}
export default App
