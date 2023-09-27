import "./App.css";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import Products from "./pages/Auth/Products";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" Component={Products} />
          <Route path="/signin" Component={Signin} />
          <Route path="/signup" Component={Signup} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
