import React, { useReducer } from 'react';
import useInputs from './custom/useInputs';

function reducer(state, action) {
  console.log('액션!!', action.name);
  return {
    ...state,
    [action.name]: action.value,
  };
}
//useReducer 에서의 액션은 그 어떤값이 되어도 됨 그래서 이번에 우리는 이벤트 객체가 지니고 있는 e.target 값 자체를 액션값으로 사용했다
const Infos = () => {
  //   const [state, dispatch] = useReducer(reducer, {
  //     name: '',
  //     nickname: '',
  //   });
  const [state, onChange] = useInputs({
    name: '',
    nickname: '',
  });
  const { name, nickname } = state;
  //   const onChange = (e) => {
  //     dispatch(e.target);
  //   };
  return (
    <div>
      <div>
        <input name='name' value={name} onChange={onChange} />
        <input name='nickname' value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름 :</b>
          {name}
        </div>
        <div>
          <b>닉네임 :</b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default Infos;
