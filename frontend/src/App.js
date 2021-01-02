import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Onboarding from "./pages/Onboarding/Onboarding";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login" render={(match) => <Onboarding />} />
          <Route exact path="/register" render={(match) => <Onboarding />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
