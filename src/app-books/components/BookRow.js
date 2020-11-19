import React from 'react';
import {Link} from "react-router-dom";
import {AppContext} from "../../AppContext";

export class BookRow extends React.Component {
  static contextType = AppContext;

  constructor(props) {
    super(props)
    this.state = {
      editMode: false,
      book: {}
    }
  }

  onEditClick = () => {
    this.setState(state => {
      return {editMode: true}
    })
  }

  onCancelClick = () => {
    this.setState({editMode: false})
  }

  onSaveClick = () => {
    this.setState({editMode: false})
    this.context.setAppContext(state => {
      const books = state.books;
      const index = state.books.findIndex(e => e.id === this.props.bookDetails.id);
      books[index] = {...books[index], ...this.state.book};
      return {books}
    });
  }

  onInputChange = e => {
    this.setState(state => ({book: {...state.book, [e.target.name]: e.target.value}}))
  }

  onDeleteClick = () => {
    const result = window.confirm("Are you sure you want to delete?");
    if (result) {
      this.context.setAppContext(state => {
        return {
          books: state.books.filter(b => b.id !== this.props.bookDetails.id)
        }
      })
    }
  }

  render() {
    if (!this.state.editMode) {
      return (
        <tr>
          <td>{this.props.bookDetails.name}</td>
          <td>{this.props.bookDetails.author}</td>
          <td>{this.props.bookDetails.price}</td>
          <td>
            <button onClick={this.onEditClick}>Edit</button>
            <Link to={`/books/${this.props.bookDetails.id}`} style={{marginLeft: "10px"}}>
              View
            </Link>
            <button onClick={this.onDeleteClick} style={{marginLeft: "10px"}}>Delete</button>
          </td>
        </tr>
      )
    } else {
      return (
        <tr>
          <td>
            <input name="name" className="full-width" onChange={this.onInputChange} type="text" defaultValue={this.props.bookDetails.name}/>
          </td>
          <td>
            <input name="author" className="full-width" onChange={this.onInputChange} type="text" defaultValue={this.props.bookDetails.author}/>
          </td>
          <td>
            <input name="price" className="full-width" onChange={this.onInputChange} type="text" defaultValue={this.props.bookDetails.price}/>
          </td>
          <td>
            <button onClick={this.onSaveClick}>Save</button>
            <button onClick={this.onCancelClick}>Cancel</button>
          </td>
        </tr>
      )
    }
  }
}
