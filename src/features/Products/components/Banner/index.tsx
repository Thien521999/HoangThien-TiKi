// libs
import React, { useEffect, useRef, useState } from 'react';
// api
import bannerApi from '../../../../api/bannerApi';
// images
import banner from '../../../../images/banner-small.png';
// others
import './style.scss';

const Banner = () => {
  const [listBanner, setListBanner] = useState<any[]>([]);

  const [index, setIndex] = useState(0);
  const currentIndex = useRef(0);

  useEffect(() => {
    (async () => {
      try {
        const data: any = await bannerApi.getAll();

        setListBanner(data?.data?.row1);
      } catch (error) {
        console.log('Failed to fetch banner list:', error);
      }
    })();
  }, []);

  useEffect(() => {
    const loop = setInterval(() => {
      const index = currentIndex.current + 1;
      if (index >= 0 && index < listBanner.length) {
        setIndex(index);

        currentIndex.current = index;
      } else {
        setIndex(0);
        currentIndex.current = 0;
      }
    }, 6000);

    return () => clearInterval(loop);
  }, [listBanner.length]);

  return (
    <div className="banner-wrapper">
      <div className="banner-image">
        <img className="banner_big" src={listBanner[index]?.image_url} alt={listBanner[index]?.title} />
        <img className="banner_small" src={banner} alt="big" />
      </div>
    </div>
  );
};

export default Banner;
