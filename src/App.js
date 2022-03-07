import * as ROUTES from "./constants/routes";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import { Home, Browse, Signin, Signup } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={ROUTES.BROWSE} element={<Browse />} />
        <Route exact path={ROUTES.SIGN_IN} element={<Signin />} />
        <Route exact path={ROUTES.SIGN_UP} element={<Signup />} />
        <Route exact path={ROUTES.HOME} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
