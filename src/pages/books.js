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
        {Object.keys(books).map((id) => (
          <li key={books.id}>
            <BookItem
              title={books[id][0].title}
              category={books[id][0].category}
              bookId={id}
            />
          </li>
        ))}
      </ul>
      <AddBookForm />
    </>
  );
};

export default Books;
