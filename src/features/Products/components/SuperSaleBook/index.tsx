// libs
import { Paper } from '@material-ui/core';
import React from 'react';
import Slider from 'react-slick';
// components
import Book from '../Book';
// others
import './style.scss';

interface SuperSaleBookProps {
  data: any;
}

const SuperSaleBook: React.FC<SuperSaleBookProps> = ({ data }) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="super-sale-book-wrapper">
      <h2 className="title-super-sale-book">Siêu sale mở bán ngày 13/4</h2>
      <Slider {...settings}>
        {data.map((book: any) => (
          <Paper elevation={0} className="paper" key={book?.id}>
            <Book book={book} />
          </Paper>
        ))}
      </Slider>
    </div>
  );
};

export default SuperSaleBook;
