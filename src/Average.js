import React, { useState, useMemo } from 'react';

const getAverage = (numbers) => {
  console.log('평균값 계산중..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

//useMemo
// useMemo 를 사용하면 함수형컴포넌트 내부에서 발생하는 연산을 최적화 할수 있습니다.
//먼저 리스트에 숫자들을 추가하면 해당 숫자들의 평균을 나타내는 함수형 컴포넌트를 작성해보자
const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = (e) => {
    setNumber(e.target.value);
  };
  const onInsert = (e) => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  };
  //useMemo Hook 을 사용하면 이러한 작업을 최적화 할수 있다.
  //렌더링 하는 과정에서 특정 값이 바뀌었을때만 연산을 실행하고 만약에 원하는 값이 바뀐것이 아니면
  //이전에 연산 했던 결과를 다시 사용하는 방식이다.
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
