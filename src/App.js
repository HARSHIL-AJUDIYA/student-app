import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Userlisting from "./component/Userlisting";
import Adduser from "./component/Adduser";
import Updateuser from "./component/Updateuser";
import { Provider } from "react-redux";
import Store from "./Redux/Store";

function App() {
  return (
    <Provider store={Store}>
    <div>
      <BrowserRouter>
        <div>
          <Link to={"/"}> Home </Link>
          <Link to={"/user"}> User </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/user" element={<Userlisting></Userlisting>}></Route>
          <Route path="/user/add" element={<Adduser></Adduser>}></Route>
          <Route path="/user/edit/:code" element={<Updateuser></Updateuser>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
