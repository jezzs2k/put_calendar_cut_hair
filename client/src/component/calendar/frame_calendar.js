import React from 'react';

import { Card, Button, Checkbox } from 'antd';

import './frame_calendar.css';

const Frame_Calendar = () => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <Card
      size='small'
      title='Name Customer'
      extra={<Button danger>Delete</Button>}
      style={{ width: 300 }}>
      <div className='content_calendar'>
        <div className='left'>
          <p>
            Bắt đầu: <span className='blue'>{'4:30'}</span> phút
          </p>
          <p>
            Cắt trong: <span className='blue'>{'30'}</span> phút
          </p>
          <p>
            Cắt cho <span className='focus'>trẻ em</span>.
          </p>
        </div>
        <div className='right'>
          <Checkbox onChange={onChange}>Hoàn thành</Checkbox>
        </div>
      </div>
    </Card>
  );
};

export default Frame_Calendar;
