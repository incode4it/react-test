import React from 'react';
import {AppContext} from "../../AppContext";


export class BookDetailsPage extends React.Component {
  static contextType = AppContext


  componentDidMount() {
    const { match: { params } } = this.props;
     this.setState({
       currentBook: this.context.appContext?.books.filter(book => book.id === +params.id)[0]
     })
  }

  render() {
    return(
      <div className="flex-row justify-center">
        <div>
          Details about book with title:  {this.state?.currentBook.name}
          <br/>
          Author: {this.state?.currentBook.author}
          <br/>
          Price: {this.state?.currentBook.price}
        </div>
      </div>
    );
  }

}
