import './App.css';
import { Route } from "react-router-dom";
import Subtitle from '../Subtitle/Subtitle'
import Links from '../Links/Links'
import ToEat from '../ToEat/ToEat'
import ToDrink from '../ToDrink/ToDrink'
import ToDo from '../ToDo/ToDo'

function App() {
  // As a player, I want to see second title changes by to eat/to drink/to do pages
  let home = '...'
  let toEat = 'To Eat'
  let toDrink = 'To Drink'
  let toDo = 'To Do'
  return (
    <div className="container">
      <header>
        <h1>I.D.K.W.I.W</h1>
        <Route path="/to-eat" exact render={() => 
          <Subtitle cat={toEat} />
        } />
        <Route path="/to-drink" exact render={() => 
          <Subtitle cat={toDrink} />
        } />
        <Route path="/to-do" exact render={() => 
          <Subtitle cat={toDo} />
        } />
        <Route path="/" exact render={() => 
          <Subtitle cat={home} />
        } />
      </header>
      <main>
        {/* As a player, I want to see a home page with links for 'To Eat', 'To Drink', and 'To Do' */}
        <Route path="/to-eat" exact component={ToEat} />
        <Route path="/to-drink" exact component={ToDrink} />
        <Route path="/to-do" exact component={ToDo} />
        <Route path="/" exact component={Links} />
      </main>
    </div>
  );
}

export default App;

// MVP Goals

// Stretch Goals
// As a player, I would like to check food by category.
// As a player, I would like to check drinks by category.