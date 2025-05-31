import { useState } from 'react';
import styles from './countdownCreator.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function CountdownCreator() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  return (
    <>
      <div className={styles.container}>
        <h1>Create Countdown</h1>
        <span>
          <p>End Time</p>
          <DatePicker
            showIcon
            selected={selectedDate}
            onChange={(date) => {
              setSelectedDate(date);
            }}
          />
          hello
        </span>
      </div>
    </>
  );
}

export default CountdownCreator;
