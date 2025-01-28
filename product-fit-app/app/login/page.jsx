"use client"
import { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Header from '../components/header';
import Link from 'next/link';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert('Авторизация успешна!');
        } catch (error) {
            alert(error.message);
        }
    };

    return (

        <div className='flex flex-col justify-center items-center'>
            <Header />
            <div className='flex flex-col justify-center items-center bg-[#F8FFFF] w-[300px] h-[300px] rounded-[20px] mt-[60px]'>
                <form className='flex flex-col justify-center items-center gap-[15px]' onSubmit={handleSignup}>
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
                    <button className='vs:hidden ts:block ns:block w-[186.78px] h-[62.26px] bg-[#F05670] rounded-[15px] text-[#fff]' type="submit">Авторизоваться</button>
                    <Link href='pages'>Нет аккаунта? Зарегестрируйтесь</Link>
                </form>
            </div>
        </div>
    );
};

export default Signin;
