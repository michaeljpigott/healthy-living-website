import Navigation from "./components/navbar";
import FooterComponent from "./components/footer";
import { HelmetProvider } from "react-helmet-async";

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
    <HelmetProvider>
   <Router>
    <Navigation/>
<Routes>
<Route exact path="/" element={<Home />} />
<Route exact path="/about" element={<Home />} />
</Routes>
<FooterComponent/>
   </Router>
   </HelmetProvider>
  );
}

export default App;
