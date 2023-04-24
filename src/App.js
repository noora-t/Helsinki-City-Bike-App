import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Journeys } from './components/Journeys';
import { Stations } from './components/Stations';
// import { StationDetails } from '';

function App() {
  return (
    <Router>
      <header>
        <Header />
      </header>
      <Switch>
        <Route exact path="/">
          <Journeys />
        </Route>
        <Route path="/stations">
          <Stations />
        </Route>
        {/* <Route path="">
          <StationDetails />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
