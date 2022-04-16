# React-Library 날짜 라이브러리

1. moment js

- 타임존 : moment/timezone
- Format/비교 : 원하는 스타일로 표기 가능
- 오래됨 : Mutable / Tree shking X / 업데이트 X

2. Day js

- 타임존 : plugin/timezone plugin/utc
- Format/비교 : 원하는 스타일로 표기 가능
- 가벼움 : Tree shking X

3. date-fns

- 타임존 : date-fns-tz
- Format/비교 : 원하는 스타일로 표기 가능
- 포괄적임 : immutable / Tree shaking까지
- 함수형 import : 가능 ex) addWeeks
