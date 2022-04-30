# msw (데이터 모킹 라이브러리)

- mock : handler / brower 만 있어도 동작
- public : npx msw init <PUBLIC_PATH>
- 기타 커스텀 : query / patching / error

# redux(상태 관리 라이브러리)

- One way data flow

  - multiple components issue
  - Lifting state up
  - Extract shared state from the component tree

- Immutable

  - Object / array
  - ...spread

- Terminology

  - action {type,payload}
  - reducer (state , action) => newState
  - store (state lives) created by passing reduce
  - dispatch only way to update state (pass in an action object)
  - selectors extract specific pieces of information from a store state

- Initial setup

  - store created by using reducer function
  - store calls root reducer once save initial state
  - Ui first rendered

- Updates

  - Something happend / dispatch action
  - store run reducer with prev state & current action save new state
  - notifies all parts store has been updated / Each Ui check update
  - need to changed Ui re-render

- 전역 상태 관리 : vs 지역 상태 관리
- 단방향 데이터 흐름 : flux
