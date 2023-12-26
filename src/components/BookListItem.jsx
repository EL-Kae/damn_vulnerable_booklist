import React from 'react';
import {
  ListItem,
  IconButton,
  ListItemText,
  ListItemSecondaryAction,
  Paper,
} from '@material-ui/core';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

const BookListItem = ({ text, onButtonClick }) => (
  <Paper
    id="list-item-paper"
    style={{
      marginTop: 16,
      marginBottom: 16,
      marginLeft: 320,
      marginRight: 320,
      padding: 16,
    }}
  >
    <ListItem>
      <ListItemText primary={<div dangerouslySetInnerHTML={{ __html: text }} />} />
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete Book" onClick={onButtonClick}>
          <DeleteOutlinedIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  </Paper>
);
export default BookListItem;
