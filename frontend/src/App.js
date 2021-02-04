import { BrowserRouter as Router, Route } from "react-router-dom";
import Bookings from "./components/Bookings";
import Header from "./components/Header";
import NewExeat from "./components/NewExeat";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Route path="/" component={Bookings} exact />
        <Route path="/newexeat" component={NewExeat} />
      </Router>
    </>
  );
}

export default App;
