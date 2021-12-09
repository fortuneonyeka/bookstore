import React from 'react';
import './styles/App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import NavBar from './components/NavBar';
import Books from './pages/books';
import Categories from './pages/categories';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
