import './App.css';
import './Mastermind';
import Mastermind from './Mastermind';

function App() {
  // ADD PASSWORD FUNCTIONALITY TO BE COOL
  // const unlock = password => {
  //   if (password == 19) {
      
  //   }
  // }

  return (
    <div className="App">
      <header className="App-header">
        {/* <fieldset>
          <legend>Unlock the game</legend>
          <label for="What's 9 + 10">Password</label>
          <input type='password' />
        </fieldset> */}
      </header>
      <Mastermind />
    </div>
  );
}

export default App;
