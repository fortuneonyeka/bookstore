import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createBook } from '../redux/books/books';

function AddBookForm() {
  const dispatch = useDispatch();
  const createBookAction = bindActionCreators(createBook, dispatch);

  const [bookTitle, setBookTitle] = useState('');
  const [bookCategory, setBookCategory] = useState('');

  const updateTitle = (e) => setBookTitle(e.target.value);
  const updateBookCategory = (e) => setBookCategory(e.target.value);

  const addNewBook = (e) => {
    e.preventDefault();
    if (bookTitle && bookCategory) {
      createBookAction({
        bookTitle,
        bookCategory,
      });
      setBookTitle('');
      setBookCategory('');
    }
  };

  return (
    <form onSubmit={addNewBook}>
      <input
        type="text"
        name="bookTitle"
        placeholder="Add a book title..."
        onChange={updateTitle}
        value={bookTitle}
      />
      <input
        type="text"
        name="bookCategory"
        placeholder="Add a book Category..."
        onChange={updateBookCategory}
        value={bookCategory}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddBookForm;
