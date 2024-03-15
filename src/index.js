import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import Header from './Component/snippets/Header';
import Footer from './Component/snippets/Footer';
import Contact from './Component/Models/Contact';
import GithubProfile from './Component/GithubProfile';

// import T from 'i18n-react';

import store from "./store/index";

import 'bootstrap/dist/css/bootstrap.css';
import { createBrowserHistory } from 'history';
import PageNotFound from './Component/snippets/PageNotFound';

import Licious from './Component/company/Licious';
import Vyapar from './Component/company/Vyapar';

const history = createBrowserHistory();
// import * as serviceWorker from './serviceWorker';
//
// T.setTexts({
//     greeting: "Hello, World! My name is *{myName}*! \n {{howAreYou}}",
//     howAreYou:  "_How do you do?_"
// }, { MDFlavor: 0 });
// /* or if there is yaml/json loader */
// var dictionary = require('../texts/texts-en.yml');
// T.setTexts(dictionary);

ReactDOM.render(<Provider store={store}>
        <Router history={history}>
            <Header />
            <Route exact path="/" component={App} />
            <Route exact path="/contactus" component={Contact} />
            <Route exact path="/githubprofile" component={GithubProfile} />
            <Route exact path="/company/vyapar" component={Vyapar} />
            <Route exact path="/company/licious" component={Licious} />
            {/* 👇️ only match this when no other routes match */}
            <Route path="*" element={<PageNotFound />} />
            <Footer />
        </Router>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
