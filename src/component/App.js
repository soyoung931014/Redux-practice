import React from "react";
import {HashRouter as Router, Routes, Route} from "react-router-dom"
//HashRouter은 History location을 지원하지 않고, BrowserRouter은 지원한다.
import Home from '../routes/Home'
import Detail from '../routes/Detail'


function App() {
  return (
   <><>app</>
    <Router>
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/:id' element={<Detail/>}></Route>
    </Routes>
    </Router>
 </>
  );
}

export default App;
