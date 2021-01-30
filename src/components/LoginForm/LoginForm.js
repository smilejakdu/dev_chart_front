import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useInput.js';
// import { loginRequestAction } from '../reducers/user';

// const ButtonWrapper = styled.div`
//   margin-top: 10px;
// `;

// const FormWrapper = styled(form)`
//   padding: 10px;
// `;

const LoginForm = () => {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmitForm = useCallback(() => {
    console.log(email, password);
    // dispatch(loginRequestAction({ email, password }));
  }, [email, password]);

  return (
    <form onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-email">이메일</label>
        <br />
        <input name="user-email" type="email" value={email} onChange={onChangeEmail} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <div>
        <div>login</div>
      </div>
    </form>
  );
};

export default LoginForm;
