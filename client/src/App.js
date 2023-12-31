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
import ProductDetail from "./pages/ProductDetail";
import Profile from "./pages/Profile";
import ProtectedRoute from "./pages/ProtectedRoute";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div>
          <Switch>
            <Route path="/" Component={Products} />
            <Route path="/product/:product_id" Component={ProductDetail} />
            <Route path="/signin" Component={Signin} />
            <Route path="/signup" Component={Signup} />
            <Route path="/profile" Component={Profile} />
            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
