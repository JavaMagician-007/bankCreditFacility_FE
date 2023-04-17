import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import ApplyLoan from './components/ApplyLoan';
import MyLoans from './components/MyLoans';
import PayLoan from './components/PayLoan';

function App() {
  return (
    // <Router>
    //   <NavBar />
    //   <Routes>
    //     <Route exact path="/" component={ApplyLoan} />
    //     <Route path="/payloan" component={PayLoan} />
    //     <Route path="/myloans" component={MyLoans} />
    //   </Routes>
    // </Router>

<BrowserRouter>
<NavBar />
<Routes>
  <Route path="/" element={<ApplyLoan />} />
  <Route path="/payloan" element={<PayLoan />} />
  <Route path="/myloans" element={<MyLoans />} />
  
</Routes>
</BrowserRouter>
  );
};

export default App;
