"use client"
import { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Header from '../components/header';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Регистрация успешна!');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className='flex flex-col justify-center items-center'>
    <Header />
    <div className='flex flex-col justify-center items-center bg-[#F8FFFF] w-[300px] h-[300px] rounded-[20px] mt-[60px]'>
        <form className='flex flex-col justify-center items-center gap-[15px] ' onSubmit={handleSignup}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button className='vs:hidden ts:block ns:block w-[186.78px] h-[62.26px] bg-[#F05670] rounded-[15px] text-[#fff]' type="submit">Зарегистрироваться</button>
        </form>
    </div>
</div>
  );
};

export default Signup;
