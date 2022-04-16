import React from 'react';
import moment from 'moment-timezone';
import 'moment/locale/ko';
const MomentExample = () => {
  const birthDayRef = React.useRef();
  const [day, setDay] = React.useState('');

  const handleBirthDayChange = (event) => {
    console.log(event.target.value);
    setDay(moment(event.target.value).format('dddd'));
  };

  const momentDate = moment();
  const newMomentDate = momentDate.add(1, 'week');
  const cloneNewMomentDate = newMomentDate.clone().add(1, 'week');

  return (
    <div>
      <h1>Moment</h1>
      <div>Immutable Check</div>
      <div>
        {momentDate.format()}
        <br />
        {newMomentDate.format()}
        <br />
        {cloneNewMomentDate.format()}
      </div>
      <br />
      <div>SummerTime (New-york)</div>
      <div>
        2018년 3월 19일 13에 하루더하기 :{' '}
        {moment
          .tz('2018-03-19 13:00:00', 'America/New_York')
          .add(1, 'day')
          .format()}
      </div>
      <div>
        2018년 3월 19일 13에 24시간 더하기:
        {moment
          .tz('2018-03-19 13:00:00', 'America/New_York')
          .add(24, 'hour')
          .format()}
      </div>
      <br />
      <div>Leep Year (korea)</div>
      <div>
        2017년 1월 1일 1년빼기 :{' '}
        {moment('2017-01-01 13:00:00').subtract(1, 'year').format()}
      </div>
      <div>
        2017년 1월 1일 365일빼기 :{' '}
        {moment('2017-01-01 13:00:00').subtract(365, 'day').format()}
      </div>
      <br />
      <div>한국어로 표기하기(07-17-2021를 2021년 7월 17일로 표기)</div>
      <div>{moment('07-17-2021').format('YYYY년 MM월 DD일')}</div>
      <br />
      <div>생일 요일 찾기</div>
      <input type="date" ref={birthDayRef} onChange={handleBirthDayChange} />
      <div>무슨 요일이었을가</div>
      <div>{day}</div>
      <br />
      <div>두 날짜 비교</div>
      <div>2021-07-17 03:00dhk 2021-07-18 02:00 는 몇시간 차이인가 </div>
      <div>
        {moment('2021-07-17 03:00').diff(moment('2021-07-18 02:00'), 'hour')}
        시간
      </div>
    </div>
  );
};

export default MomentExample;
