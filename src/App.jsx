import React from 'react';
import NavBar from './components/NavBar';
import AddBook from './components/AddBook';
import BookList from './components/BookList';
import { useInputValue, useBooks } from './StateHooks';
import './App.css';
// import logo from './logo.svg';


const App = () => {
  const {
    inputValue, changeInput, clearInput, keyInput,
  } = useInputValue();
  const {
    books, addBook, checkBook, removeBook,
  } = useBooks();
  const clearInputsAndAddBook = () => {
    clearInput();
    addBook(inputValue);
  };

  return (
    <div>
      <NavBar />
      <AddBook
        inputValue={inputValue}
        onInputChange={changeInput}
        onButtonClick={clearInputsAndAddBook}
        onInputKeyPress={(event) => keyInput(event, clearInputsAndAddBook)}
      />
      <BookList
        items={books}
        onItemCheck={(idx) => checkBook(idx)}
        onItemRemove={(idx) => removeBook(idx)}
      />
    </div>
  );
};


export default App;
