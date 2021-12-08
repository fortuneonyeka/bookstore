import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { removeBook } from '../redux/books/books';

function BookItem({ title, author, bookId }) {
  const dispatch = useDispatch();
  const removeBookAction = bindActionCreators(removeBook, dispatch);
  return (
    <>
      <span>
        {title}
        {' Ant Hills Of The Savanah'}
        {author}
        Chnue Achebe
      </span>
      <button type="button" onClick={() => removeBookAction(bookId)}>
        Remove Book
      </button>
    </>
  );
}

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  bookId: PropTypes.number.isRequired,
};

export default BookItem;
