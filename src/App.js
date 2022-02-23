import react, { useState } from "react";
import Login from "./component/Login";
import Homepage from "./component/Homepage";
import Navbar from "./component/Navbar";
import Register from "./component/Register";
import Home2 from "./component/Home2"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {

  const [user, setLoginuser] = useState({})


  return (
    <>
      <Router>



        <div className="App">
          <Switch>
            <Route exact path="/">
              <Navbar />
              <Homepage />


            </Route>
            <Route exact path="/Login" >
              <Login />
            </Route>
            <Route exact path="/Register" >
              < Register />
            </Route>
            <Route exact path="/Home2">
              < Home2 />
            </Route>



          </Switch>
        </div>

      </Router>

    </>
  );
}

export default App;
