import './App.css';
import Table from './components/DataTable';
import "./App.css"

function App() {
  return (
    <div className="App">
      <div className='logo'>
        <img src='/ChefkartLogo.png'/>
        <span className='title'>ChefKart</span>
      </div>
      <Table />
    </div>
  );
}

export default App;
