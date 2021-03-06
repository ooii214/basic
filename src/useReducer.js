import React from 'react';

const useReducer = () => {
  //useReducer 는 useState 보다 컴포넌트에서 더 다양한 상황에 따라 다양한 상태를 다른값으로
  //업데이트해주고 싶을때 사용하는 Hook 입니다
  //1.리듀서는 현재 상태돠, 업데이트를 위해 필요한 정보를 담은 액션 값을 전달 받아 새로운 상태를 반황하는 함수
  //리듀서함수에서 새로운 상태를 만들때는 꼭 불변성을 지켜주어야함
  function reducer(state, action) {
    // return {...}; //불변성을 지키면서 업데이트한 새로운 상태를 반환함
  }
  //보통액션을 아래와 같은 형식으로 이루어져있다.
  // {
  //     type :'INCREMENT',
  //다른 값들이 필요하다면, 추가적으로 들어간다
  // }
  //redux 에서는 액션 객체에는 어떤 액셩인지 알려주는 type 필드가 꼭 있어야하지만,
  // useReducer에서 사용하는 액션 객체는 꼭 type 를 지니고 있을 필요가 없다.
  //심지어, 객체가 아니라 문자열이나, 숫자여도 상관이 없다
  return <div></div>;
};

export default useReducer;
