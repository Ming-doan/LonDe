import './App.css';
import NavBar from './views/components/NavBar';
import HomePage from './views/screens/HomePage';
import DiscoverPage from './views/screens/DiscoverPage';
import UserPage from './views/screens/UserPage';
import VoucherPage from './views/screens/VoucherPage';
import { useEffect, useState } from 'react';

let pages = [
  <HomePage></HomePage>,
  <DiscoverPage></DiscoverPage>,
  <UserPage></UserPage>,
  <VoucherPage></VoucherPage>
]

function App() {

  const [pageIndex, setPage] = useState(0)

  function handleSetState(index) {
    setPage(index)
  }

  return (
    <div className="frame">
      <div className='navbar'>
        <NavBar navigator={handleSetState} index={pageIndex}></NavBar>
      </div>
      <div className='content'>
        {pages[pageIndex]}
      </div>
      <div className='sidebar'></div>
    </div>
  );
}

export default App;
