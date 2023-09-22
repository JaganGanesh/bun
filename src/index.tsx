import React, {useState} from 'react';
import {createRoot} from 'react-dom';

const root = createRoot(document.getElementById('root'));

const App = () => {
  const [count, setCount] = useState(0);
  return(
    <div>
      <h3>React.useState</h3>
      <h4>Count: {count}</h4>
      <button onClick={() => {setCount(count + 1)}}>Increment</button> &nbsp;
      <button onClick={() => {setCount(count - 1)}}>Decrement</button>
    </div>
  );
}

root.render(<App />);