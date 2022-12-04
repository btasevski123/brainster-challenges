import "./App.css";
import "./Components/Header/Header.css";
import { Header } from "./Components/Header/Header";
import { Title } from "./Components/Header/HeaderComponents/Title";
import { Main } from "./Components/Main/Main";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Header />
        <Title />
        <Main />
      </div>
    </div>
  );
}

export default App;
