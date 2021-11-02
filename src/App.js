import logo from './logo.svg';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Route exact path="/" component={Dashboard} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
