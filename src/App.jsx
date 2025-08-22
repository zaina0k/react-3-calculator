import { useState } from 'react';
import './App.css';
import Numpad from './components/Numpad';
import Screen from './components/Screen';

function App() {
  const [inputExpression, setInputExpression] = useState('');
  const [editingExp, setExpressionStatus] = useState(false);
  return (
    <>
      <div>
        <Screen expression={inputExpression} />
        <Numpad
          onChangeExpression={setInputExpression}
          expression={inputExpression}
          editingExp={editingExp}
          setEditingExp={setExpressionStatus}
        />
      </div>
    </>
  );
}

export default App;
