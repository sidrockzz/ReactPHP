import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Insert from "./Components/Insert";
import Edit from "./Components/Edit";
import View from "./Components/View";
import './App.css';
import { BrowserRouter as Router , Switch, Link, Route} from "react-router-dom";

function App() {
  return (
      <Router>
        <div className={"container"}>
          <nav className={"navbar navbar-expand-lg navbar-light bg-light"}>
              <Link to={"/"} className={"navbar-brand"}>React CRUD</Link>
              <div className={"collapse navbar-collapse"} id={"navbarSupportedContent"}>
                 <ul className={"navbar-nav mr-auto"}>
                     <li className={"nav-item"}>
                         <Link to={"/"} className={"nav-link"}>Home</Link>
                     </li>
                     <li className={"nav-item"}>
                         <Link to={"/insert"} className={"nav-link"}>Insert</Link>
                     </li>
                     <li className={"nav-item"}>
                         <Link to={"/view"} className={"nav-link"}>View</Link>
                     </li>
                 </ul>
              </div>
          </nav>
            <Switch>
                <Route exact path={"/insert"} component={Insert}/>
                <Route exact path={"/edit/:id"} component={Edit}/>
                <Route path={"/view"} component={View}/>
            </Switch>
        </div>
      </Router>
  );
}

export default App;
