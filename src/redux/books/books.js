import { v4 as uuidv4 } from 'uuid';
import initialBookState from './initialbookstate';

// Actions
const LOAD = 'bookstore/books/LOAD';
const CREATE = 'bookstore/books/CREATE';
const UPDATE = 'bookstore/books/UPDATE';
const REMOVE = 'bookstore/books/REMOVE';

// Reducer
export default function reducer(state = initialBookState, action) {
  let newBook;
  switch (action.type) {
    case LOAD:
      return state;
    case CREATE:
      newBook = {
        ...action.book,
        id: uuidv4(),
      };
      return [...state, newBook];
    case UPDATE:
      return state.map((book) => {
        if (book.id === action.book.id) {
          return action.book;
        }
        return book;
      });
    case REMOVE:
      return state.filter((book) => book.id !== action.bookId);
    default:
      return state;
  }
}

// Action Creators
export function loadBooks() {
  return { type: LOAD };
}

export function createBook(book) {
  return { type: CREATE, book };
}

export function updateBook(book) {
  return { type: UPDATE, book };
}

export function removeBook(bookId) {
  return { type: REMOVE, bookId };
}
