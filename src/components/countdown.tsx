import { useEffect, useState } from 'react';

function Countdown() {
  const [clock, setClock] = useState(``);
  const [remainingTime, setRemainingTime] = useState(``);
  const switchTwoDate = new Date('June 5, 2025');
  const _second = 1000;
  const _minute = _second * 60;
  const _hour = _minute * 60;
  const _day = _hour * 24;
  const formatUnit = (unit: number) => String(unit).padStart(2, '0');

  useEffect(() => {
    const interval = setInterval(() => {
      let date = new Date();
      let distance: number = switchTwoDate.getTime() - date.getTime();
      let days = formatUnit(Math.floor(distance / _day));
      let hours = formatUnit(Math.floor((distance % _day) / _hour));
      let minutes = formatUnit(Math.floor((distance % _hour) / _minute));
      let seconds = formatUnit(Math.floor((distance % _minute) / _second));
      console.log(days);
      let currentTime = {
        day: date.getDay(),
        hour: formatUnit(date.getHours()),
        minute: formatUnit(date.getMinutes()),
        second: formatUnit(date.getSeconds()),
      };

      setRemainingTime(
        `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds:`
      );
      setClock(
        `${currentTime.hour}:${currentTime.minute}.${currentTime.second}`
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className='container'>
        <p>Current Time: {clock}</p>
        <h1>Switch 2 Releases in:</h1>
        <p>{remainingTime}</p>
      </div>
    </>
  );
}

export default Countdown;
