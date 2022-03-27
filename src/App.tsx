import "./App.css";
import Dashboard from "./dashboard";
import { test } from "./utils";

function App() {
  test();
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
