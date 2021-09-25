// libs
import { Box, Grid } from '@material-ui/core';
import { Paper } from '@mui/material';
import React from 'react';
// components
import Book from '../Book';
// others
import './style.scss';

interface UniqueSaleBookProps {
  data: any;
}

const UniqueSaleBook: React.FC<UniqueSaleBookProps> = ({ data }) => {
  return (
    <Box>
      <Grid container>
        {data.map((book: any) => (
          <Grid item key={book.id} xs={6} sm={6} md={4} lg={3}>
            <Paper elevation={0} className="paper">
              <Book book={book} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default UniqueSaleBook;
