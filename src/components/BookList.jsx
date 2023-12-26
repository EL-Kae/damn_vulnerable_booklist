import React from 'react';
import { List } from '@material-ui/core';
import BookListItem from './BookListItem';

const BookList = ({ items, onItemCheck, onItemRemove }) => (
  <>
    {
      items.length > 0 && (
        <List style={{ overflow: 'scroll' }}>
          {items.map((book, idx) => (
            <BookListItem
              {...book}
              key={`BookItem.${idx}`}
              onButtonClick={() => onItemRemove(idx)}
              onCheckBoxToggle={() => onItemCheck(idx)}
            />
          ))}
        </List>
      )
    }
  </>
);

export default BookList;
