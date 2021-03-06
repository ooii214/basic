import React, { useState, useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      //아무것도 해당되지 않을때 기존 상태를 반환
      return state;
  }
}

const Counter = () => {
  const [state, dispatch1] = useReducer(reducer, { value: 0 });
  //useReducer 의 첫번째 파라미터는 리듀서함수, 두번째 파라미터는 해당 리듀서의 기본값을 넣어준다
  //Hook 을 사용했을때 state 값과 dispatch함수를 받아오게 되는데,
  //여기서 state 는 현재 가르키고 있는 상태고 , dispatch 는 액션을 발생시키는 함수
  // dispatch(action) 와 같은 형태로, 함수안에 파라미터로 액션 값을 넣어주면 리듀서함수가 호출되는 구조
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b> 입니다.
      </p>
      <button onClick={() => dispatch1({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch1({ type: 'DECREMENT' })}>-1</button>
      // const [현재가르키고 있는 상태 , 액션을 발생시키는 함수] = useReducer
    </div>
  );
};

//useReducer 를 사용했을때 가장 큰 장점은 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼수있다는 점
export default Counter;
