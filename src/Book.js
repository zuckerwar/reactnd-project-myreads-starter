import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ListBook from './ListBook'

class Book extends Component {

  static PropTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  render() {
    const { book, books, changeShelf } = this.props
    const coverImg = book.imageLinks && book.imageLinks.thumbnail
    const title = book.title

    return (
          <li>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ backgroundImage: `url(${coverImg})`}}>
              </div>
              <ListBook
                book={ book }
                books={ books }
                changeShelf={ changeShelf } />
            </div>
            <div className="book-title">{ title }</div>
            {
              book.authors && book.authors.map((author, index) => (
                <div className="book-authors" key={index}>{author}</div>
            ))}
          </div>
        </li>
    )
  }

}
export default Book
