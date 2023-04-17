import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './homePage';
import NavBar from './navBar';
import Footer from './footer';
import { BrowserRouter, Route } from 'react-router-dom';
import './style.css';
import { Provider } from 'react-redux';
import store from './store';
import { Switch } from 'react-native/types';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          <NavBar
            brandName="MHVillage"
            contactButton="Contact"
            searchButton="Search"
          />
          <Switch>
            <Route path="/contactPage">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
