import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Journeys } from '';
import { StationsList } from '';
import { StationDetails } from '';

function App() {
  return (
    <Router>
      <header>
        <Header />
        <h1>Helsinki City Bike App</h1>
      </header>
      {/* <Switch>
        <Route path="">
          <Journeys />
        </Route>
        <Route path="">
          <StationsList />
        </Route>
        <Route path="">
          <StationDetails />
        </Route>
      </Switch> */}
    </Router>
  );
}

export default App;
