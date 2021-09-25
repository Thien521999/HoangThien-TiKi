// libs
import { Box, Grid, Paper } from '@material-ui/core';
import React from 'react';
import Skeleton from '@mui/material/Skeleton';
// others
import './style.scss';

const UniqueSaleBookSkeleton = () => {
  return (
    <Box className="unique-sale-book-skeleton-wrapper">
      <Grid container>
        {Array.from(new Array(8)).map((x, index) => (
          <Grid item key={index} xs={6} sm={6} md={6} lg={3}>
            <Paper elevation={0} className="paper">
              <Skeleton animation="wave" className="img-skeleton" variant="rectangular" />
              <Skeleton />
              <Skeleton width="60%" />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default UniqueSaleBookSkeleton;
