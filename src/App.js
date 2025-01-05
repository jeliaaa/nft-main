import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Main";
import BuyMain from "./buytrees/BuyMain";
import PaulowniaInfo from "./pages/PaulowniaInfo";
import Docs from "./pages/Docs";

function App() {
  useEffect(() => {
    // Force scroll to top on route change
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="wrapper">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/buymain" element={<BuyMain />} />
          <Route path="/paulownia_info" element={<PaulowniaInfo />} />
          <Route path="/documents" element={<Docs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
