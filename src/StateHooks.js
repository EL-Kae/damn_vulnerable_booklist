import { useState } from 'react';

export const useInputValue = (initialValue = '') => {
  const [inputValue, setInputValue] = useState(initialValue);

  return {
    inputValue,
    changeInput: (event) => setInputValue(event.target.value),
    clearInput: () => setInputValue(''),
    keyInput: (event, callback) => {
      if (event.which === 13 || event.keyCode === 13) {
        callback(inputValue);
        return true;
      }
      return false;
    },
  };
};

export const useBooks = (initialValue = []) => {
  const [books, setBooks] = useState(initialValue);

  return {
    books,
    addBook: (text) => {
      if (text !== '') {
        setBooks(
          books.concat({
            text,
            checked: false,
          }),
        );
      }
    },
    checkBook: (idx) => {
      setBooks(
        books.map((book, index) => {
          if (idx === index) {
            book.checked = !book.checked;
          }

          return book;
        }),
      );
    },
    removeBook: (idx) => {
      setBooks(books.filter((book, index) => idx !== index));
    },
  };
};
