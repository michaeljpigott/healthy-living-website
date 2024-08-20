import Navigation from "./components/navbar";
import FooterComponent from "./components/footer";

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages";
import 'bootstrap'

function App() {
  return (
   <Router>
    <Navigation/>
<Routes>
<Route exact path="/" element={<Home />} />
</Routes>
<FooterComponent/>
   </Router>
  );
}

export default App;
