import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './Pages/JS/About.js';
import Events from './Pages/JS/Events';
import Documents from './Pages/JS/Documents.js';
import DesktopNavbar from './Components/JS/DesktopNavbar.js';
import Footer from './Components/JS/Footer.js';
import Contact from './Pages/JS/Contact.js';
import MobileNavbar from './Components/JS/MobileNavbar';

function App() {
  return (
    <Router>
      
      <div className="App">
        <DesktopNavbar/>
        <MobileNavbar />
          <div className="content">
            <Switch>
              <Route exact path='/'>
                <About />
              </Route>

              <Route exact path='/Events'>
                <Events/>
              </Route>

              <Route exact path='/Documents'>
                <Documents/>
              </Route>

              <Route exact path='/Contact'>
                <Contact/>
              </Route>
            </Switch>
          </div>
        <Footer/>
      </div>
      
    </Router>
  );
}

export default App;
