import React, { useRef } from 'react';

//로컬변수 사용하기
//컴포넌트 로컬변수를 사용해야 할때도 useRef 를 활용할 수 있다.
//여기서 로컬변수라함은, 렌더링이랑은 관계없이 바뀔수 있는 값을 의미합니다.

const RefSample = () => {
  const id = useRef(1);
  const setId = (n) => {
    id.current = n;
  };

  const printId = () => {
    console.log(id.current);
  };
  return (
    <div>
      refsample 주의 해야할점은 이렇게 넣은 ref 안의 값은 바뀌어도 컴포넌트가
      렌더링되지 않는 다는 점! 렌더링과 관련되지 않은 값을 관리할때만 이러한
      방식으로 코드를 작성한다.
    </div>
  );
};

export default RefSample;
