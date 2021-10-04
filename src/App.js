import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import AllCourses from "./components/AllCourses/AllCourses";
import Team from "./components/Team/Team";
import Contact from "./Contact/Contact";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoteFound from "./components/NotFound/NoteFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  // Use React Route
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/allcourses">
            <AllCourses />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NoteFound></NoteFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
