# React Style

- 시작하기 앞서 css의 문제점

  1. Global Namespace : 글로벌 변수를 지양해야하는 JS와 대치
  2. Dependencies : CSS 간의 의존 관리
  3. Dead Code Elimination : 안쓰는 css 인지 어려움
  4. Minification : 클래스 이름 최소화
  5. Sharing constants : JS코드와 값을 공유하고 싶음
  6. Non- deterministic Resolution : css 파일 로드 타이밍 이슈
  7. isolation : 격리

- style-component

  1. Automatic critical CSS : styled-components는 페이지에서 렌더링되는 구성 요소를 추적하고 완전히 자동으로 해당 스타일만 삽입합니다. 코드 분할과 함께 이는 사용자가 필요한 최소한의 코드를 로드함을 의미합니다.
  2. No class name bugs : styled-components는 스타일에 대한 고유한 클래스 이름을 생성합니다. 중복, 중복 또는 철자 오류에 대해 걱정할 필요가 없습니다.
  3. Easier deletion of CSS : 클래스 이름이 코드베이스의 어딘가에서 사용되는지 여부를 알기 어려울 수 있습니다. styled-components는 스타일의 모든 비트가 특정 구성 요소에 연결되어 있기 때문에 이를 분명히 합니다. 구성 요소가 사용되지 않고(도구가 감지할 수 있음) 삭제되면 해당 구성 요소의 모든 스타일도 함께 삭제됩니다.
  4. Simple dynamic styling : 수십 개의 클래스를 수동으로 관리하지 않고도 props 또는 전역 테마를 기반으로 구성 요소의 스타일을 적용하는 것이 간단하고 직관적입니다.
  5. Painless maintenance : 구성 요소에 영향을 주는 스타일을 찾기 위해 다른 파일을 검색할 필요가 없으므로 코드베이스가 아무리 크더라도 유지 관리는 케이크 조각입니다.
  6. Automatic vendor prefixing : CSS를 현재 표준으로 작성하고 나머지는 styled-components가 처리하도록 합니다.

  - css의 문제 styled component에서 해결 방법
    1. CSS의 문제점 해소
    2. 스타일을 style 태그로 분리
    3. styled.{element}
    4. 상속
  - styled components
    - & : 가상 엘리먼트 / 가상 선택자
    - Global Style : 전역 스타일
    - attrs : props addition
    - keyframes /ThemeProvider : Animation/Theme

- emotion/react

  1. /\*_ @jsxImportSource @emotion/react _/
  2. css props : like style props
  3. auto vendor-prefix/ nested selectors / media query
  4. SSR with zero configuration
  5. css props
     - Object Styles : css {{}}
     - String Styles : css{css `font-size : 12px`}
  6. Styled Components 와 유사한 +@ 기능 제공
     - Composing dynamic styles
     - as props
     - Nesting components

  - emotion
    - 기능 : Fallbacks, & , Global, keyframes
    - styled-components : 서로 점점 유사해짐
    - trend : emotion이 우세하다고 조금더 우세 하다고 나옴
    - 사이즈 / 속도 : emotions이 우세하다고 나옴

- Sass
  1. Variables : $abc: ###; / $abc
  2. nesting : a{b{c{}}}
  3. Modules: \_abc.scss / @use 'abc';abc.###
  4. Mixins: @micxin abc(#type:x){} /@include abc; @include abc(z)
  5. Extend.Inheritance : %abc{} / @extend %abc
  6. Operators : + - \* / %
  - syntax
    1. 전처리기 : Css 확장
    2. Sass / Scss :보다 css와 유사한 scss
    3. 사용 : variables / modules / mixin/ extend
  - Sass
    1. syntax : 언어처럼 자체 syntax가 있음
    2. interpolation : #{} 값을 주입 (마치 `${}`)
    3. values / functions : 프로그래밍 언어스러움
