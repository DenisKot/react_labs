import './App.css';
import { useState } from 'react';

const initState = {name: 'Stepan', age: 25};

const App = () => {

  const [state, setState] = useState(initState);

  const renameUser = () => {
    const newUser = {name: 'Mykola', age: 30};
    setState(newUser);
  }

  const [isHidden, setIsHidden] = useState(true);

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={toggleHidden}>
          {isHidden ? "Open" : "Close"}
        </button>
        {isHidden ? <></> :
          <div>
            <p>Name: {state.name}, age: {state.age}</p>
            <button onClick={renameUser}>
              Click on me
            </button>
          </div>
        }
      </header>
    </div>
  );
}

export default App;
