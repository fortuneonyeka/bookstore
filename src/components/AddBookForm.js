import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createBook } from '../redux/books/books';

function AddBookForm() {
  const dispatch = useDispatch();
  const createBookAction = bindActionCreators(createBook, dispatch);

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const updateTitle = (e) => setTitle(e.target.value);
  const updateCategory = (e) => setCategory(e.target.value);

  const addNewBook = (e) => {
    e.preventDefault();
    if (title && category) {
      createBookAction({
        title,
        category,
      });
      setTitle('');
      setCategory('');
    }
  };

  return (
    <form onSubmit={addNewBook}>
      <input
        type="text"
        name="title"
        placeholder="Add a book title..."
        onChange={updateTitle}
        value={title}
      />
      <input
        type="text"
        name="category"
        placeholder="Add a book Category..."
        onChange={updateCategory}
        value={category}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddBookForm;
