import './Screen.css';

function Screen({ expression }) {
  return (
    <div className="screen">
      <h2>{expression || '\u00A0'}</h2>
    </div>
  );
}

export default Screen;
