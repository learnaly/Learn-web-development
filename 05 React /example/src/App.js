import { useState } from 'react';

import './App.css';

function App() {
  const [text, setText] = useState();

  return (
    <div>
      <input
        onChange={event => {
          setText(event.target.value);
        }}
      />

      <h1>{text}</h1>
      <h2>{text}</h2>
      <h3>{text}</h3>
    </div>
  );
}

export default App;
