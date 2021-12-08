import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadBooks } from '../redux/books/books';
import BookItem from '../components/BookItem';
import AddBookForm from '../components/AddBookForm';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const loadBooksAction = bindActionCreators(loadBooks, dispatch);

  useEffect(() => {
    loadBooksAction();
    return null;
  }, []);

  return (
    <>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <BookItem
              title={book.bookTitle}
              author={book.bookAuthor}
              bookId={book.id}
            />
          </li>
        ))}
      </ul>
      <AddBookForm />
    </>
  );
};

export default Books;
