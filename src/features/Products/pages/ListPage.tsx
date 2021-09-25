// libs
import { Box, Container, Grid } from '@material-ui/core';
import { unwrapResult } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// components
import Banner from '../components/Banner';
import UniqueSaleBook from '../components/UniqueSaleBook';
import FlashSaleBook from '../components/FlashSaleBook';
import SuperSaleBook from '../components/SuperSaleBook';
import UniqueSaleBookSkeleton from '../components/UniqueSaleBookSkeleton';
// others
import './style.scss';
import { getListProduct, getListFlashSaleBook } from '../productSlice';

const ListPage = () => {
  const dispatch = useDispatch();

  const [page] = useState(1);
  const [bookList, setBookList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [listFashSaleBook, setListFlashSaleBook] = useState([]);

  useEffect(() => {
    (async () => {
      const action: any = getListProduct(page);
      const resultAction = await dispatch(action);
      const product = unwrapResult(resultAction);

      const action2: any = getListFlashSaleBook(page);
      const resultAction2 = await dispatch(action2);
      const listFashSaleBook = unwrapResult(resultAction2);

      setBookList(product);
      setListFlashSaleBook(listFashSaleBook);
      setIsLoading(false);
    })();
  }, [dispatch, page]);

  return (
    <>
      <Banner />
      <Box className="unique-sale-book">
        <Container>
          <Grid container>{isLoading ? <UniqueSaleBookSkeleton /> : <UniqueSaleBook data={bookList} />}</Grid>
        </Container>
      </Box>
      <Box className="super-sale-book">
        <Container>
          <SuperSaleBook data={bookList} />
        </Container>
      </Box>
      <Box className="flash-sale-book">
        <Container>
          {isLoading ? (
            <UniqueSaleBookSkeleton />
          ) : (
            <FlashSaleBook listFashSaleBook={listFashSaleBook} data={bookList} />
          )}
        </Container>
      </Box>
    </>
  );
};

export default ListPage;
