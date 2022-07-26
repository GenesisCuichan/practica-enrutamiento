import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Components/Home'
import Four from './Components/Four'
import Second from './Components/Second'
import First from './Components/First'
// import Red from './Components/Red'
import Draw from './Components/Draw'
function App() {
  return (
    <BrowserRouter>
      {/* PRIMER CAMBIO DE VERSION 6.3.0 */}
      {/* SEGUNDO CAMBIO SWITCH A ROUTES */}
      <Routes>
        
        {/* TERCER CAMBIO COMPONENT A ELEMNT */}
        <Route path={"/home"} element={<Home/>} >
          {/* SE DEFINIRA RUTAS HIJAS*/}
          <Route path={"first"} element={<First/>} />
          <Route path={"second"} element={<Second/>} />
        </Route>
        <Route exact path={"/:id"} element={<Four/>} />
        {/* <Route path={"/:word/:tc/:bc"} component={Red} /> */}
        <Route path={"/draw/:color/:alto/:ancho"} element={<Draw/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
