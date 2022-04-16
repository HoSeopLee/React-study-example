import React from 'react';
import { add, differenceInHours, format, sub } from 'date-fns';
import { ko } from 'date-fns/locale';
import { format as tzFormat } from 'date-fns-tz';
import { toDate } from 'date-fns-tz/esm';

const DateFnsExample = () => {
  const birthDayRef = React.useRef();
  const [day, setDay] = React.useState('');

  const handleBirthDayChange = (event) => {
    console.log(event.target.value);
    setDay(format(new Date(event.target.value), 'EEEE', { locale: ko }));
  };

  const dateFnsDate = new Date();
  const newDateFnsDate = add(dateFnsDate, { days: 1 });
  const cloneNewDateFns = add(newDateFnsDate, { weeks: 1 });

  return (
    <div>
      <h1>date-fns</h1>
      <div>Immutable Check</div>
      <div>
        {format(dateFnsDate, 'yyyy-MM-dd')}
        <br />
        {format(newDateFnsDate, 'yyyy-MM-dd')}
        <br />
        {format(cloneNewDateFns, 'yyyy-MM-dd')}
      </div>
      <br />
      <div>SummerTime (New-york)</div>
      <div>
        2018년 3월 19일 13에 하루더하기 :
        {tzFormat(
          add(toDate(new Date('2018-03-19 13:00:00'), { days: 1 })),
          'yyyy-MM-dd HH:mm:ssXXX',
          {
            timeZone: 'America/New_York',
          }
        )}
      </div>
      <div>
        2018년 3월 19일 13에 24시간 더하기:
        {tzFormat(
          add(new Date('2018-03-19 13:00:00'), { hours: 24 }),
          'yyyy-MM-dd HH:mm:ssXXX',
          {
            timeZone: 'America/New_York',
          }
        )}
      </div>
      <br />
      <div>Leep Year (korea)</div>
      <div>
        2017년 1월 1일 1년빼기 :{' '}
        {format(
          sub(new Date('2017-01-01 13:00:00'), { years: 1 }),
          'yyyy-MM-dd'
        )}
      </div>
      <div>
        2017년 1월 1일 365일빼기 :{' '}
        {format(
          sub(new Date('2017-01-01 13:00:00'), { days: 365 }),
          'yyyy-MM-dd'
        )}{' '}
      </div>
      <br />
      <div>한국어로 표기하기(07-17-2021를 2021년 7월 17일로 표기)</div>
      <div>{format(new Date('07-17-2021'), 'yyyy년 MM월 dd일')}</div>
      <br />
      <div>생일 요일 찾기</div>
      <input type="date" ref={birthDayRef} onChange={handleBirthDayChange} />
      <div>무슨 요일이었을가</div>
      <div>{day}</div>
      <br />
      <div>두 날짜 비교</div>
      <div>2021-07-17 03:00dhk 2021-07-18 02:00 는 몇시간 차이인가 </div>
      <div>
        {differenceInHours(
          new Date('2021-07-17 03:00'),
          new Date('2021-07-18 02:00')
        )}
        시간
      </div>
    </div>
  );
};

export default DateFnsExample;
