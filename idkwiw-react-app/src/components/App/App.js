import './App.css';
import { Route } from "react-router-dom";
import Subtitle from '../Subtitle/Subtitle'
import Links from '../Links/Links'
import ToEat from '../ToEat/ToEat'
import ToDrink from '../ToDrink/ToDrink'
import ToDo from '../ToDo/ToDo'

function App() {
  let home = '...'
  let todo = 'To Do'
  return (
    <div className="container">
      <header>
        <h1>I.D.K.W.I.W</h1>
        <Route path="/" excat render={() => 
          <Subtitle cat={home} />
        } />
        <Route path="/ToDo" excat render={() => 
          <Subtitle cat={todo} />
        } />
      </header>
      <main>
        <Route path="/" excat component={Links} />
        <Route path="/to-eat" exact component={ToEat} />
        <Route path="/to-drink" exact component={ToDrink} />
        <Route path="/to-do" exact component={ToDo} />
      </main>
    </div>
  );
}

export default App;
