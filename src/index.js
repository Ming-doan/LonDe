import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import './index.css';
import App from './pages/App';
import VideoListPage from './pages/VideoListPage';
import VideoPage from './pages/VideoPage';
import RegisterPage from './pages/RegisterPage';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<RegisterPage />}></Route>
        <Route path='/app' element={<App />}></Route>
        <Route path='/list' element={<VideoListPage />}></Route>
        <Route path='/video' element={<VideoPage />}></Route>

      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
