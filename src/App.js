import './App.css';
import NavBar from './views/components/NavBar';
import HomePage from './views/screens/HomePage';

function App() {
  return (
    <div className="frame">
      <div className='navbar'>
        <NavBar></NavBar>
      </div>
      <div className='content'>
        <HomePage></HomePage>
      </div>
      <div className='sidebar'></div>
    </div>
  );
}

export default App;
