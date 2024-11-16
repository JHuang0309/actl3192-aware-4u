import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import PageStart from './pages/PageStart';
import PageInvest from './pages/PageInvest';
import PageDrawdown from './pages/PageDrawdown';
import PagePublications from './pages/PagePublications';

function App() {
  return (
    <>
      <BrowserRouter>
        <div></div>
        <Routes>
          <Route path="/" element={<PageStart />} />
          <Route path="/investment-option" element={<PageInvest />} />
          <Route path="/drawdown-payment" element={<PageDrawdown />} />
          <Route path="/publications" element={<PagePublications />} />
        </Routes>
      </BrowserRouter>    
    </>
  );
}

export default App;
