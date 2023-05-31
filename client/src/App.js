import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Journeys } from './components/Journeys';
import { Stations } from './components/Stations';
import { StationDetails } from './components/StationDetails';

function App() {
  return (
    <Router>
        <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/journeys">
            <Journeys />
          </Route>
          <Route exact path="/stations">
            <Stations />
          </Route>
          <Route path="/stations/:name">
            <StationDetails />
        </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
