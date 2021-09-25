// libs
import { Box, makeStyles, Typography } from '@material-ui/core';
import { fontWeight } from '@mui/system';
import React from 'react';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from '../../../../constants';
import { formatPrice } from '../../utils';
// others
import './style.scss';

interface productData {
  thumbnail_url: string;
  name: string;
  rating_average: number;
  price: number;
  original_price: number;
  discount_rate: number;
}

interface ProductProps {
  product: productData;
}

const ProductSuperSale: React.FC<ProductProps> = ({ product }) => {
  const thumbnailUrl = product.thumbnail_url ? product.thumbnail_url : THUMBNAIL_PLACEHOLDER;

  return (
    <Box className="product-super-sale-wrapper">
      <Box padding={1}>
        <img src={thumbnailUrl} alt="" width="100%" />
      </Box>
      <div className="info">
        <Typography variant="body2" className="name">
          {product?.name}
        </Typography>

        <Box component="div" style={{ margin: '4px 0' }}>
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
          <span className="rating_average">({product?.rating_average})</span>
        </Box>

        <Typography variant="body2">
          <Box component="span" className="price" mr={1}>
            {formatPrice(product?.price)}
          </Box>
          <Box component="span" className="discount">{`- ${product?.discount_rate}%`}</Box>
        </Typography>
        <Typography variant="body2">
          <del className="original_price">{product?.original_price > 0 ? `${product?.original_price}%` : ''}</del>
        </Typography>
      </div>
    </Box>
  );
};

export default ProductSuperSale;
