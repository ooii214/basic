import { useState, useEffect } from 'react';

export default function usePromise(promiseCreator, deps) {
  console.log('댑스!!!!', deps);
  const [resolved, setResolved] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // 함수형 컴포넌트에서 promise 를 쉽게 사용할수있는 Hook 을 만들어봅시다.
  const process = async () => {
    setLoading(true);
    try {
      const result = await promiseCreator();
      setResolved(result);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };
  //useState 와 useEffect 를 같이 사용한다.
  //이 함수는 프로미스를 생성하는  promiseCreator 와,
  //언제 프로미스를 새로 만들지에 대한 조건을 위한 deps배열을 파라미터로 받아온다.
  // deps 배열은 useEffect 의 두번째 파라미터로 전달되며, 기본값은 비어있는 배열이다.
  // 비어있는 배열을 전달하면 컴포넌트가 가장 처음 렌더링 될때만 실행된다.
  useEffect(() => {
    process();
  }, deps);
  return [loading, resolved, error];
}
// useEffect 를 사용할때 주의할점
//useEffect 에 파라미터로 전달해주는 함수에서 async 를 사용하면 안된다.
// useEffect(async() => {});

//useEffect 에서는 뒷정리 함수를 반환해야 하는데,
//async 를 사용하게 되면 함수가 아닌 프로미스를 반환하기 때문에 오류를 발생하게된다.
