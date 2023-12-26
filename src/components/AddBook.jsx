import React from 'react';
import {
  Button, Grid, Paper, TextField,
} from '@material-ui/core';

const AddBook = ({
  inputValue, onInputChange, onButtonClick, onInputKeyPress,
}) => (
  <Paper
    id="add-book-paper"
    style={{
      marginTop: 16,
      marginBottom: 16,
      marginLeft: 300,
      marginRight: 300,
      padding: 16,
    }}
  >
    <Grid id="add-book-grid" container>
      <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
        <TextField
          placeholder="Add a new book here"
          value={inputValue}
          onChange={onInputChange}
          onKeyPress={onInputKeyPress}
          fullWidth
        />
      </Grid>
      <Grid xs={2} md={1} item>
        <Button
          fullWidth
          color="secondary"
          variant="outlined"
          onClick={onButtonClick}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  </Paper>
);

export default AddBook;
