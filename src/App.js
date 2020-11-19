import React, {  } from 'react';
import {BooksPage} from "./app-books/containers/BooksPage";
import {
  Switch,
  Route,
} from "react-router-dom";
import {HomePage} from "./app-home/containers/HomePage";
import {HeaderNavigation} from "./common/components/HeaderNavigation";
import {BookDetailsPage} from "./app-books/containers/BookDetailsPage";
import {AppContextProvider} from "./AppContext";

class App extends React.Component {

  render() {
    return (
      <AppContextProvider>
        <main>
          <div className="flex-row justify-center" style={{margin: "20px"}}>
            <HeaderNavigation/>
          </div>
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/books" exact component={BooksPage}/>
            <Route path="/books/:id" component={BookDetailsPage}/>
          </Switch>
        </main>
      </AppContextProvider>
    );
  }
}
export default App;


