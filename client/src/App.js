import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Journeys } from './components/Journeys';
import { Stations } from './components/Stations';
import { StationDetails } from './components/StationDetails';
import { CsvDownloader } from './components/CsvDownloader';

function App() {
  return (
    <Router>
      <header>
        <Header />
      </header>
      <main>
      <Route path="/">
          <StationDetails />
      </Route>
      </main>
      <Switch>
        <Route exact path="/">
          <Journeys />
        </Route>
        <Route path="/stations">
          <Stations />
        </Route>
        <Route path="/downloader">
          <CsvDownloader />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
