import { evaluate } from 'mathjs';
import './Calculator.css';

function Numpad({ expression, onChangeExpression, editingExp, setEditingExp }) {
  function buttonPressed(event) {
    const key = event.target.textContent;
    let newExpression = expression + key;
    onChangeExpression(newExpression);
    setEditingExp(true);
  }
  function onEqualPressed() {
    onChangeExpression(evaluate(expression));
    setEditingExp(false);
  }
  function onClearExpression() {
    onChangeExpression('');
  }
  function onDeletePressed() {
    onChangeExpression(expression.slice(0, -1));
    if (expression.length == 1) {
      setEditingExp(false);
    }
  }
  return (
    <div className="calculator">
      <div>
        <button className="num-btn" onClick={buttonPressed}>
          7
        </button>
        <button className="num-btn" onClick={buttonPressed}>
          4
        </button>
        <button className="num-btn" onClick={buttonPressed}>
          1
        </button>
        {!editingExp ? (
          <button className="ac-btn" onClick={onClearExpression}>
            AC
          </button>
        ) : (
          <button className="del-btn" onClick={onDeletePressed}>
            DEL
          </button>
        )}
      </div>
      <div>
        <button className="num-btn" onClick={buttonPressed}>
          8
        </button>
        <button className="num-btn" onClick={buttonPressed}>
          5
        </button>
        <button className="num-btn" onClick={buttonPressed}>
          2
        </button>
        <button className="num-btn" onClick={buttonPressed}>
          0
        </button>
      </div>
      <div>
        <button className="num-btn" onClick={buttonPressed}>
          9
        </button>
        <button className="num-btn" onClick={buttonPressed}>
          6
        </button>
        <button className="num-btn" onClick={buttonPressed}>
          3
        </button>
        <button className="eq-btn" onClick={onEqualPressed}>
          =
        </button>
      </div>
      <div>
        <button className="op-btn" onClick={buttonPressed}>
          /
        </button>
        <button className="op-btn" onClick={buttonPressed}>
          *
        </button>
        <button className="op-btn" onClick={buttonPressed}>
          -
        </button>
        <button className="op-btn" onClick={buttonPressed}>
          +
        </button>
      </div>
    </div>
  );
}

export default Numpad;
