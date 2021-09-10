import './App.css';
// import { Route } from "react-router-dom";
import Subtitle from '../Subtitle/Subtitle'
import Links from '../Links/Links'

function App() {
  return (
    <div className="container">
      <header>
        <h1>I.D.K.W.I.W</h1>
        <Subtitle />
      </header>
      <main>
        <Links />
        {/* <Route path="/to-eat" exact component={ToEat} />
        <Route path="/to-drink" exact component={ToDrink} />
        <Route path="/to-do" exact component={ToDo} /> */}
      </main>
    </div>
  );
}

export default App;
