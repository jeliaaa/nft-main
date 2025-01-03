import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Main from './Main';
import BuyMain from './buytrees/BuyMain';
import PaulowniaInfo from './pages/PaulowniaInfo';

function App() {
  useEffect(() => {
    // Force scroll to top on route change
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/buymain" element={<BuyMain />} />
        <Route path="/paulownia_info" element={<PaulowniaInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
