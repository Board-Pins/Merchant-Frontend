import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import clender from '../../../../assets/icons/clender.png'
const DatePickerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #F5F6FA;
  border-radius: 12px;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
`;

const DateButton = styled.div`
  padding: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.selected ? '#E5E5FF' : 'transparent')};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NavButton = styled.div`
  padding: 10px;
  border-radius: 50%;
  background-color: #E5E5FF;
  cursor: pointer;
  margin: 0 10px;
`;

const DateText = styled.div`
  font-size: ${(props) => (props.selected ? '14px' : '12px')};
  color: ${(props) => (props.selected ? '#5b5bff' : '#000')};
  font-weight: ${(props) => (props.selected ? '700' : '300')};
`;

const DateNumber = styled.div`
  font-size: ${(props) => (props.selected ? '14px' : '12px')};
  color: ${(props) => (props.selected ? '#5b5bff' : '#000')};
  font-weight: ${(props) => (props.selected ? '700' : '300')};
`;

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [range, setRange] = useState(7);

  const handleDateChange = (days) => {
    setSelectedDate(selectedDate.add(days, 'day'));
  };

  useEffect(() => {
    const updateRange = () => {
      if (window.innerWidth <= 768) {
        setRange(2);
      } else {
        setRange(7);
      }
    };

    window.addEventListener('resize', updateRange);
    updateRange();

    return () => window.removeEventListener('resize', updateRange);
  }, []);

  const renderDates = () => {
    const dates = [];
    for (let i = -range; i <= range; i++) {
      const date = selectedDate.add(i, 'day');
      dates.push(
        <DateButton
          key={i}
          selected={date.isSame(selectedDate, 'day')}
          onClick={() => setSelectedDate(date)}
        >
          <DateText selected={date.isSame(selectedDate, 'day')}>
            {date.format('dd')}
          </DateText>
          <DateNumber selected={date.isSame(selectedDate, 'day')}>
            {date.format('D')}
          </DateNumber>
        </DateButton>
      );
    }
    return dates;
  };

  return (
    <Fragment>
    <div className='  flex items-center '>
      <div className=' flex-grow'>
      
<h2 className=' text-primary font-[600] text-lg px-4'>February 2024</h2>      
      </div>
<div className=' flex items-center gap-2'>
<img src={clender} alt='clender' className=' w-[40px] p-2  shadow-custom rounded-xl'/>


  <button className='  bg-blue-500 text-white rounded-lg px-6 py-2'> Today</button>
</div>

    </div>

    <DatePickerContainer>
      <NavButton onClick={() => handleDateChange(-range)}><MdOutlineKeyboardArrowLeft color='#6161FF' /></NavButton>
      {renderDates()}
      <NavButton onClick={() => handleDateChange(range)}><MdOutlineKeyboardArrowRight color='#6161FF' /></NavButton>
    </DatePickerContainer>
    </Fragment>
  );

};

export default DatePicker;
