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
import Page404 from './pages/Page404';

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
          <Route path="/not-found" element={<Page404 />} />
        </Routes>
      </BrowserRouter>    
    </>
  );
}

export default App;
