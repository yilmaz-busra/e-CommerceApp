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
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" Component={Home} />
          <Route path="/signin" Component={Signin} />
          <Route path="/signup" Component={Signup} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}
export default App;
