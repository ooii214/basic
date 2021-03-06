import React, { useState, useMemo, useCallback } from 'react';

const getAverage = (numbers) => {
  console.log('평균값 계산중..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};
//useCallback 의 첫번째 파라미터에는 우리가 생성해주고 싶은 함수를 넣어주고,
//두번째 파라미터에는 배열을 넣어주면 되는데 이 배열에는 어떤 값이 바뀌었을때 함수를 새로 생성해줘야하는지 명시

//만약에 onChange 처럼 비어있는 배열을 넣게 되면 컴포넌트가 렌더링 될때 단 한번만 함수가 생성되며,
//onInsert 처럼 배열안에 number 와 list 를 넣게되면 인풋내용이 바뀌거나 새로운 항목이 추가될때 마다 함수가 생성됨

//함수내부에서 기존의 상태값을 의존해야 할때는 꼭 두번째 파라미터안에 포함을 시켜주어야핣니다.
//예를 들어서 onChange 의 경우엔 기존의 값을 조회하는 일은 없고 바로 설정만 하기 때문에 배열이 비어 있어도 상관이 없지만
//onInsert 는 기존의 number 와 list 를 조회해서 nextList 를 생성하기 때문에 배열안에 number 와 list 를 꼭 넣어줘야한다.
const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  //useCallback 은 결국 useMemo 에서 함수를 반환하는 상황에서 더 편하게 사용할 수 있는 Hook 입니다.
  //1.숫자, 문자열, 객체 처럼 일반 값을 재사용하기 위해서는 useMemo를 ,
  //2.그리고 함수를 재사용하기 위해서는 useCallback 를 사용하기
  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); //컴포넌트가 처음 렌더링 될때만 함수 생성
  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber('');
    },
    [number, list]
  ); //number 혹은 list 가 바뀌었을때만 함수 생성

  const avg = useMemo(() => getAverage(list), [list]);
  //useCallback 은 useMemo 와 상당히 비슷한 함수
  //주로 렌더링 성능을 최적화해야하는 상황에서 사용하는데
  //이 Hook 을 사용하면 이벤트 핸들러 함수를 필요할 때만 생성가능
  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값 :</b> {avg}
      </div>
    </div>
  );
};

export default Average;
