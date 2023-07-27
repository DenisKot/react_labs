import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Group from './components/Group';

const initGroup = {
  name: "Group 1",
  nestedGroups: []
};

// Sample model with nested groups
const initialModel = {
  id: 0,
  name: 'Main Group',
  nestedGroups: [
    {
      id: 1,
      name: 'Nested Group 1',
      nestedGroups: [],
    },
    {
      id: 2,
      name: 'Nested Group 2',
      nestedGroups: [],
    },
  ],
};

function App() {
  const [model] = useState(initialModel);

  const printModel = () => {
    console.log(model);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Nested Groups App</h1>
        <Group groupModel={model}  />
        <button onClick={printModel}>Print group object</button>
      </header>
    </div>
  );
}

export default App;
