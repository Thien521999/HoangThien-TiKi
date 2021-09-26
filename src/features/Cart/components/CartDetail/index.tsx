// libs
import React from 'react';
import { useDispatch } from 'react-redux';
import QuantityField from '../../../../components/form-controls/QuantityField';
import { formatPrice } from '../../../Products/utils';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// components
import { IInputAddToCartForm } from '../../../Products/components/AddToCartForm';
// others
import './style.scss';
import { BookProps } from '../../../Products/components/Book';
import { setQuantity } from '../../cartSlice';

const CartDetail: React.FC<BookProps> = ({ book }) => {
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    quantity: yup
      .number()
      .required('Nhập số lượng muốn mua!')
      .min(1, 'Số lượng ít nhất là 1!')
      .typeError('Vui lòng nhập đúng số lượng!'),
  });

  const form = useForm<IInputAddToCartForm>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      quantity: book?.quantity,
    },
    resolver: yupResolver(schema) as any,
  });

  const handleChangeQuantity = (newValue: any) => {
    console.log(newValue);
    const action = setQuantity({
      id: book?.id,
      quantity: newValue,
    });
    dispatch(action);
  };

  const handleRemoveBook = (book: any) => {
    console.log(book);

    // const idNeedToRemove = book?.id;
    // const action = removeFromCart(idNeedToRemove);
    // dispatch(action);
  };

  return (
    <>
      <div className="detail-cart-wrapper">
        <div className="info-book-cart">
          <img className="img-book" src={book?.thumbnail_url} alt="" />
          <div className="info">
            <div className="name-book">{book?.name}</div>
            <div className="price-book">
              <span className="price">{formatPrice(book?.price)}</span>
              <span className="original_price">{book?.original_price}</span>
            </div>
          </div>
          <div className="close-icon" onClick={handleRemoveBook}>
            <CloseIcon />
          </div>
        </div>
        <Box component="div" className="quantity">
          <img className="img-book" src={book?.thumbnail_url} alt="" />
          <form className="form-quantity">
            <QuantityField name="quantity" label="Quantity" form={form} onChange={handleChangeQuantity} />
          </form>
          <div className="close-icon">
            <CloseIcon />
          </div>
        </Box>
        <div className="border"></div>
      </div>
    </>
  );
};

export default CartDetail;
