import React from 'react';
import ErrorBoundry from "../error-boundry";
import {Provider} from "react-redux";
import {BooksServiceProvider} from "../../service-context/book-service-context";
import { getBook } from "../../services/book-services";
import store from "../../store";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import StoreHeader from "../store-header";
import {HomePage, CartPage} from "../pages";

const service = getBook;

const App = () => {
    return (
        <Provider store={store}>
            <ErrorBoundry>
                <BooksServiceProvider value={service}>
                    <BrowserRouter>
                        <StoreHeader/>
                        <Switch>
                            <Route path='/' exact component={HomePage}/>
                            <Route path='/cart' component={CartPage}/>
                        </Switch>
                    </BrowserRouter>
                </BooksServiceProvider>
            </ErrorBoundry>
        </Provider>
    );
};

export default App;