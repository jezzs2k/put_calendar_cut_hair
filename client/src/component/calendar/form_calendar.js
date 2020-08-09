import React from 'react';
import moment from 'moment';

import { Switch, TimePicker, Select, Button } from 'antd';

import './form_calendar.css';

const format = 'HH:mm';
const { Option } = Select;

const Form_Calendar = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className='form_calendar'>
      <p>Đặt lịch cắt tóc:</p>
      <TimePicker defaultValue={moment('00:00', format)} format={format} />,
      <Select defaultValue='0' style={{ width: 180 }} onChange={handleChange}>
        <Option value='0'>Combo 3 bước</Option>
        <Option value='1'>Combo 5 bước</Option>
        <Option value='2'>Combo 7 bước</Option>
      </Select>
      <Switch
        checkedChildren='Trẻ Em'
        unCheckedChildren='Người Lớn'
        defaultChecked
      />
      <Button type='primary'>Đặt Lịch</Button>
    </div>
  );
};

export default Form_Calendar;
