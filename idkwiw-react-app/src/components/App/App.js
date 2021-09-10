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
        <Route path="/home" excat render={() => 
          <Subtitle cat={home} />
        } />
        <Route path="/to-eat" excat render={() => 
          <Subtitle cat={toEat} />
        } />
        <Route path="/to-drink" excat render={() => 
          <Subtitle cat={toDrink} />
        } />
        <Route path="/to-do" excat render={() => 
          <Subtitle cat={toDo} />
        } />
      </header>
      <main>
        <Route path="/home" excat component={Links} />
        {/* As a player, I want to see a home page with links for 'To Eat', 'To Drink', and 'To Do' */}
        <Route path="/to-eat" exact component={ToEat} />
        <Route path="/to-drink" exact component={ToDrink} />
        <Route path="/to-do" exact component={ToDo} />
      </main>
    </div>
  );
}

export default App;

// MVP Goals
// As a player, I want to see a placeholder image and food/drink names on to eat/to drink page
// As a player, I want to see a placeholder activity name on to do page
// As a player, I want to see a generate button and home button on to eat/to drink/to do pages
// As a player, I want to click on generate button and see a new to eat/to drink/to do suggestion
// As a player, I want to click on the home button and go back to the home page
// Stretch Goals
// As a player, I would like to check food by category.
// As a player, I would like to check drinks by category.