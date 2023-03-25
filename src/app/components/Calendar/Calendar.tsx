import { useState } from 'react';
import Modal from '../Modal';
import TaskForm from '../TaskForm';
import './Calendar.scss';

const Calendar = () => {
  const now = new Date();
  const [currentMonth, setCurrentMonth] = useState(now.getMonth());
  const [currentYear, setCurrentYear] = useState(now.getFullYear());
  const [showPopup, setShowPopup] = useState(false);

  const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const renderCalendar = () => {
    const calendar = [];

    // Fill empty days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendar.push(<div className="calendar__day calendar__day--empty"></div>);
    }

    // Fill in days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      calendar.push(
        <div className="calendar__day day">
          <button className={'day__btn'} type={'button'} onClick={handleShowPopup} title={'add task'}>
            +
          </button>
          {i}
        </div>
      );
    }

    return calendar;
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handlePrevYear = () => {
    setCurrentYear(currentYear - 1);
  };

  const handleNextYear = () => {
    setCurrentYear(currentYear + 1);
  };

  return (
    <>
      <div className="calendar">
        <div className="calendar__header">
          <button onClick={handlePrevYear} type={'button'}>
            {'<<'}
          </button>
          <button onClick={handlePrevMonth} type={'button'}>
            {'<'}
          </button>
          <div className="calendar__month">{months[currentMonth]}</div>
          <div className="calendar__year">{currentYear}</div>
          <button onClick={handleNextMonth} type={'button'}>
            {'>'}
          </button>
          <button onClick={handleNextYear} type={'button'}>
            {'>>'}
          </button>
        </div>
        <div className="calendar__weekdays">
          <div className="calendar__weekday">Пн</div>
          <div className="calendar__weekday">Вт</div>
          <div className="calendar__weekday">Ср</div>
          <div className="calendar__weekday">Чт</div>
          <div className="calendar__weekday">Пт</div>
          <div className="calendar__weekday">Сб</div>
          <div className="calendar__weekday">Вс</div>
        </div>
        <div className="calendar__days">{renderCalendar()}</div>
      </div>
      {showPopup && (
        <Modal setShowPopup={setShowPopup}>
          <TaskForm />
        </Modal>
      )}
    </>
  );
};

export default Calendar;
