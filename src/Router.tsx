import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from 'Routes/About';
import Auth from 'Routes/Auth';
import Header from 'Components/Header';
import Home from 'Routes/Home';
import List from 'Routes/List';
import Sub from 'Routes/Sub';
import Footer from 'Components/Footer';
import Top from 'Components/Top';
import ErrorPage from 'Components/ErrorPage';

function AppRouter() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Switch>
        <Route exact path="/works/:typeId/:itemId">
          <Sub />
        </Route>
        <Route exact path="/works/:typeId">
          <List />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/auth">
          <Auth />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path={'*'}>
          <ErrorPage />
        </Route>
      </Switch>
      <Top />
      <Footer />
    </Router>
  );
}

export default AppRouter;
