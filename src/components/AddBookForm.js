import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createBook } from '../redux/books/books';

function AddBookForm() {
  const dispatch = useDispatch();
  const createBookAction = bindActionCreators(createBook, dispatch);
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const updateBookTitle = (e) => setBookTitle(e.target.value);
  const updateBookAuthor = (e) => setBookAuthor(e.target.value);
  const addNewBook = (e) => {
    e.preventDefault();
    if (bookTitle && bookAuthor) {
      createBookAction({
        bookTitle,
        bookAuthor,
      });
      setBookTitle('');
      setBookAuthor('');
    }
  };
  return (
    <form onSubmit={addNewBook}>
      <input type="text" name="bookTitle" placeholder="Add book title..." onChange={updateBookTitle} value={bookTitle} />
      <input type="text" name="bookAuthor" placeholder="Add a book author..." onChange={updateBookAuthor} value={bookAuthor} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddBookForm;
