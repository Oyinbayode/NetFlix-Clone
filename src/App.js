import * as ROUTES from "./constants/routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}></Route>
    </Router>
  );
}

export default App;
