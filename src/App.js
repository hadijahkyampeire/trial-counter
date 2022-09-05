
import './App.css';
import { Login } from './components/login';

const buttons = [{ name: 'Delete', onClick: () => alert('save') }, { name: 'Save', onClick: () => alert('save') }, { name: 'cancel', onClick: () => alert('cancle') }]
function App() {
  return (
    <div>
      <p>You clicked times</p>
      <button>
        Click me
      </button>
      <Login />
      {buttons.map(b => <button onClick={b.onClick}>{b.name}</button>)}
    </div>
  );
}

export default App;
