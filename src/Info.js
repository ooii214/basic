import React, { useState, useEffect } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  //useEffect 는 리액트 컴포넌트가 렌더링 될때마다 특정작업을 수행하도록 설정 할수 있는 Hook 입니다.
  //클래스 형 컴포넌트의 componentDidMount 와 componentDidUpdate 를 합친형태로 보아도 무방

  useEffect(() => {
    console.log('마운트 될때만 실행됩니다');
  }, []);
  //1.마운트 될때만 실행하고 싶을때
  //만약 useEffect 에서 설정한 함수가 컴포넌트가 화면에 가장 처음 렌더링 될때만 실행되고 업데이트 할 경우
  //실행할 필요가 없는 경우엔 함수의 두번째 파라미터로 비어있는 배열을 넣어주면 된다
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };
  //2.특정값이 업데이트 될때만 실행하고 싶을때
  //useEffect 를 사용할때 특정값이 변경될때만 호출하게 하고 싶은 경우도 있다.
  //만약 클래스 컴포넌트라면 이렇게 작성한다
  //    componentDidUpdate(prevProps , prevState) {
  //     if(prevProps.value !== this.props.value) {
  //             doStart();
  //     }
  //    };
  //함수형 컴포넌트에서는 useEffect 의 두번째 파라미터로 전달되는 배열안에 검사하고 싶은 값을 넣어주면 된다.
  //배열안에는 useState 를 통해서 관리하고 있는 상태를 넣어줘도 되고, props 로 전달받은 값을 넣어줘도 된다.

  useEffect(() => {
    console.log(name);
  }, [name]);

  //뒷정리!!!
  //useEffect 는 기본적으로 렌더링이 되고 난 직후마다 실행되며, 두번째 파라미터배열에 무엇을 넣느냐에 따라 실행되는 조건이 달라진다.
  // 만약 컴포넌트가 언마운트 되기전이나, 업데이트 되기 직전에 어떤 작업을 수행하고 싶으면 useEffect 에서 뒷정리 함수를 반환해줘야한다
  useEffect(() => {
    console.log('effect!!!');
    console.log('이름', name);
    return () => {
      console.log('cleanup');
      console.log('클린업 이름', name);
    };
  });
  //렌더링이 될때 마다 뒷정리 함수가 계속 보여지고 있는 것을 확인할수있다.
  //그리고, 뒷정리 함수가 호출될때에는 업데이트 되기 직전의 값을 보여주고 있다.
  //(무슨 말인지 잘 모르겠음...2021.03.05) ====>만약에, 오직 언마운트 될때만 뒷정리 함수를 호출하고 싶으면 useEffect 함수의 두번째 파라미터에 비어있는 배열을 넣으면 됨
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름 :</b> {name}
        </div>
        <div>
          <b>닉네임 :</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
