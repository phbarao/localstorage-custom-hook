import type { FC } from 'react';
import useLocalStorage from './hooks/useLocalStorage';

const App: FC = () => {
  const [state, setState] = useLocalStorage('testls', 1000);

  return (
    <div className="App">
      <p>Value: {state}</p>
      <button onClick={() => setState(Math.floor(Math.random() * 10000))}>
        Change state!
      </button>
    </div>
  );
};

export default App;
