import { v4 as uuidv4 } from 'uuid';

const API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/9f1pNtgROxpW2MVhyhFA/books/';

// Actions
const LOAD = 'bookstore/books/LOAD';

// Reducer
export default function reducer(state = {}, action) {
  switch (action.type) {
    case LOAD:
      return action.state;
    default:
      return state;
  }
}

// Action Creators
export const loadBooks = () => async (dispatch) => {
  const response = await fetch(API);
  const state = await response.json();
  dispatch({ type: LOAD, state });
};

export const createBook = (book) => async (dispatch) => {
  await fetch(API, {
    method: 'POST',
    body: new URLSearchParams({
      item_id: uuidv4(),
      title: book.title,
      category: book.category,
    }),
  });
  const response = await fetch(API);
  const state = await response.json();
  dispatch({ type: LOAD, state });
};

export const removeBook = (bookId) => async (dispatch) => {
  await fetch(`${API}${bookId}`, {
    method: 'DELETE',
  });
  const response = await fetch(API);
  const state = await response.json();
  dispatch({ type: LOAD, state });
};
