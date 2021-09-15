import './App.css';
import { Route } from 'react-router-dom';
import Subtitle from '../Subtitle/Subtitle';
import Links from '../Links/Links';
import ToEat from '../ToEat/ToEat';
import ToDrink from '../ToDrink/ToDrink';
import ToDo from '../ToDo/ToDo';

function App() {
  // As a player, I want to see second title changes by to eat/to drink/to do pages
  let home = '...';
  let toEat = 'To Eat';
  let toDrink = 'To Drink';
  let toDo = 'To Do';

  return (
    <div className='container'>
      <header>
        <h1>I.D.K.W.I.W</h1>
        {/* 
        On home page the subtitle shows 'I don't know what I want...
        On to eat/to drink/to do page it shows 'I don't know what I want to eat/to drink/to do' */}
        <Route path='/to-eat' render={() => 
          <Subtitle cat={toEat} />
        } />
        <Route path='/to-drink' render={() => 
          <Subtitle cat={toDrink} />
        } />
        <Route path='/to-do' exact render={() => 
          <Subtitle cat={toDo} />
        } />
        <Route path='/' exact render={() => 
          <Subtitle cat={home} />
        } />
      </header>
      <main>
        {/* Setting route to each pages */}
        <Route path='/to-eat' component={ToEat} />
        <Route path='/to-drink' component={ToDrink} />
        <Route path='/to-do' exact component={ToDo} />
        <Route path='/' exact component={Links} />
      </main>
    </div>
  );
}

export default App;