import "./App.css";
import { People } from "./component/people";

function App() {
  return (
    <div className="App">
      <People name="Tiffany" age="13" />
      <People name="Neo" age="11" />
      <People name="Jed" age="5" />
      <People name="Fluffy" age="around 42" />
    </div>
  );
}

export default App;
