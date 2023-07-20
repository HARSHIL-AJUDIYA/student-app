import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Studentlisting from "./component/Studentlisting";
import Addstudent from "./component/Addstudent";
import Updatestudent from "./component/Updatestudent";
import { Provider } from "react-redux";
import Store from "./Redux/Store";

function App() {
  return (
    <Provider store={Store}>
    <div>
      <BrowserRouter>
        <div className="menu-bar">
          <Link className="menu" to={"/"}> Home </Link>
          <Link className="menu" to={"/list"}> List </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/list" element={<Studentlisting></Studentlisting>}></Route>
          <Route path="/list/add" element={<Addstudent></Addstudent>}></Route>
          <Route path="/list/edit/:code" element={<Updatestudent></Updatestudent>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
