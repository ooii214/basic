import React, { useState } from 'react';

//useState
//useState 는 가장 기본적인 훅으로, 함수형 컴포넌트에서 가변적인 상태를 지니고 있을 수 있게 해준다.
//만약에 함수형 컴포넌트에서 상태를 관리해야 되는 일이 발생하면  Hook를 사용하면 된다.
const Counter = () => {
  const [value, setValue] = useState(0);
  //첫번째 원소는 상태값 , 두번째 원소는 상태를 설정하는 함수
  //이 함수에 파라미터를 넣어서 호출하게 되면 전달받은 파라미터로 값이 바뀌게 되고 컴포넌트는 정상적으로 리렌더링하게 된다.
  const array = ['dog', 'cat', 'sheep'];
  //배열 비구조화 할당문법이다
  const [like, love] = array; //이렇게 하면  array안에 있는 dog , cat 이 나온다!
  console.log('책책책', like, love);
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b> 입니다.
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  );
};

export default Counter;
