import { useState } from 'react';

export default function SignUpState() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('아직 에러없음');

  const onChangeEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onClickSignup = () => {
    console.log(email);
    console.log(password);
    // 1. 검증
    if (email.includes('@') === false) {
      alert('이메일이 올바르지 않다');
    } else {
      alert('ㅊㅋ');
    }
  };

  return (
    <div>
      이메일 : <input type="text" onChange={onChangeEmail} />
      비밀번호 : <input type="password" onChange={onChangePassword} />
      <button onClick={onClickSignup}>회원가입</button>
    </div>
  );
}
