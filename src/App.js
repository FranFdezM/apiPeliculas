import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Blog from './views/blog';
import ListadoPeliculas from './views/ListadoPeliculas';


function App() {

  return (

  <BrowserRouter>
    <Switch>
      
      <Route path="/blog">
        <Blog />
      </Route>

      <Route path="/">
        <ListadoPeliculas />
      </Route>

    </Switch>
  </BrowserRouter>
  );      
}

export default App; 

