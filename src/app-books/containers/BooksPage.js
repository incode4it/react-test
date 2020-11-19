import React from 'react';
import {BookRow} from "../components/BookRow";
import {AppContext} from "../../AppContext";
export class BooksPage extends React.Component {

  static contextType = AppContext

  render() {
    return (
      <div className="flex-row justify-center">
        <table style={{width: '900px'}}>
          <thead>
          <tr>
            <th>Name</th>
            <th>Author</th>
            <th>Price</th>
            <th  />
          </tr>
          </thead>
          <tbody>
          {this.context?.appContext?.books.map((book, index) =>
            <BookRow key={index} bookDetails={book}/>
          )}
          </tbody>
        </table>
      </div>
    )
  }

}
