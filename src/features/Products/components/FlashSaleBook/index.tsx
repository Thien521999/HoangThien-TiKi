// libs
import { Box, Tab } from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import React from 'react';
import image3 from '../../../../images/image3.png';
// components
import UniqueSaleBook from '../UniqueSaleBook';
import ChangeTab from '../../../../components/ChangeTab';
// others
import './style.scss';

interface FlashSaleBookProps {
  listFashSaleBook: any;
  data: any;
}

const FlashSaleBook: React.FC<FlashSaleBookProps> = ({ listFashSaleBook, data }) => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box style={{ position: 'relative' }}>
      <div className="flash-sale-book-wrapper">
        <img className="img-flash-sale" src={image3} alt="" />
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="10:00" value="1" />
              <Tab label="15:00" value="2" />
              <Tab label="18:00" value="3" />
              <Tab label="20:00" value="4" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <UniqueSaleBook data={data} />
          </TabPanel>
          <TabPanel value="2">
            <UniqueSaleBook data={data} />
          </TabPanel>
          <TabPanel value="3">
            <UniqueSaleBook data={data} />
          </TabPanel>
          <TabPanel value="4">
            <UniqueSaleBook data={data} />
          </TabPanel>
        </TabContext>
      </div>
      <ChangeTab />
    </Box>
  );
};

export default FlashSaleBook;
