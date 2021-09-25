// libs
import { Box, Dialog, DialogContent, DialogTitle, IconButton, makeStyles } from '@material-ui/core';
import Close from '@mui/icons-material/Close';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
// constant
import { THUMBNAIL_PLACEHOLDER } from '../../../../constants';
// images
import tiki from '../../../../images/tiki.png';
import n from '../../../../images/n.png';
import o from '../../../../images/o.png';
import w from '../../../../images/w.png';
// until
import { formatPrice } from '../../utils';
import { addToCart } from '../../../Cart/cartSlice';
// components
import AddToCartForm from '../AddToCartForm';
// others
import './style.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.grey[500],
    zIndex: 1,
  },
  btnAddToCart: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
  },
}));

export interface bookData {
  thumbnail_url: string;
  name: string;
  rating_average: number;
  price: number;
  original_price: number;
  discount_rate: number;
  badges_new: any[];
  id: number;
  quantity?: number;
}

export interface BookProps {
  book: bookData;
}

const Book: React.FC<BookProps> = ({ book }) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const thumbnailUrl = book.thumbnail_url ? book.thumbnail_url : THUMBNAIL_PLACEHOLDER;

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddToCartSubmit = (values: any) => {
    const action = addToCart({
      ...book,
      quantity: values?.quantity,
    });
    dispatch(action);
    setOpen(false);
    history.push('/cart');
  };

  return (
    <>
      <Box padding={1} className="book-wrapper" onClick={handleClick}>
        <img className="img-book" src={thumbnailUrl} alt={book?.name} width="100%" />
        <div className="information-book">
          <div className="text-tiki-now">
            <img className="tiki" src={tiki} alt="" />
            <img className="now" src={n} alt="" />
            <img className="now" src={o} alt="" />
            <img className="now" src={w} alt="" />
          </div>

          <div className="name-book">{book?.name}</div>

          <div className="start">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              // size="14"
              color="#fdd836"
              height="14"
              width="14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
            </svg>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              // size="14"
              color="#fdd836"
              height="14"
              width="14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
            </svg>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              // size="14"
              color="#fdd836"
              height="14"
              width="14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
            </svg>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              // size="14"
              color="#fdd836"
              height="14"
              width="14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
            </svg>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              // size="14"
              color="#fdd836"
              height="14"
              width="14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
            </svg>
            <span className="rating_average">({book?.rating_average})</span>
          </div>

          <div className="info-price">
            <span className="price">{formatPrice(book?.price)}</span>
            <span className="discount">{`- ${book?.discount_rate}%`}</span>
          </div>
          <div className="original_price">{book?.original_price > 0 ? `${book?.original_price}%` : ''}</div>
        </div>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        // disableBackdropClick
        disableEscapeKeyDown
        aria-labelledby="form-dialog-title"
      >
        <IconButton className={classes.closeButton} onClick={handleClose}>
          <Close />
        </IconButton>
        <DialogTitle>Add to cart</DialogTitle>
        <DialogContent className={classes.btnAddToCart}>
          <AddToCartForm onSubmit={handleAddToCartSubmit} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Book;
