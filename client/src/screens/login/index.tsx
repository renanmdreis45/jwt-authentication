import React, {useState, useEffect, SyntheticEvent} from 'react'
import Image from 'next/image';
import SignUp from '../../../public/assets/images/SignUp.png'
import {
     Container, LoginImage, LoginFields, HeaderLogin, 
     LoginButtons, DivSeparators, SeparatorLeft, SeparatorRight, 
     FormLogin, EmailField, PasswordField, PasswordFooter, FooterLogin
} from './styles';
import { Google, Facebook } from '../../components/icons';
import Router from 'next/router';
import Register from '../register/register';
import { useLoginMutation } from '../../slices/usersApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCredentials } from '../../slices/authSlice';
import { toast } from 'react-toastify';
import { InitialState } from '../../slices/authSlice';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [login, {isLoading}] = useLoginMutation();

    const { userInfo } = useSelector((state: InitialState) => state.auth);

    useEffect(() => {
        if(userInfo) {
            navigate('/');
        }
    }, [navigate, userInfo]);

    const submitHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        try {
            const res = await login({email, password}).unwrap();

            dispatch(setCredentials({...res}));
            navigate('/');
        } catch (err: any) {
            toast.error(err?.data?.message || err.error);
        }
    }
 
    return (
        <Container>
            <LoginImage>
                <Image src={SignUp} alt="Homem apontando para uma tela de login" fill/>
            </LoginImage>
            <LoginFields>
                    <HeaderLogin>
                        <h1>Let`s Start</h1>
                        <h3>Didn`t have an account? <a>Sign Up</a></h3>
                        <LoginButtons>
                            <button className="btn-google">
                                <Image src={Google} alt="Logo Google" width={20} height={20} />
                                <span>Log in with Google</span>
                            </button>
                            <button className='btn-facebook'>
                                <Image src={Facebook} alt="Logo Facebook" width={20} height={20} />
                                <span>Log in with Facebook</span>
                            </button>
                        </LoginButtons>
                    </HeaderLogin>
                    <DivSeparators>
                        <SeparatorLeft/>
                        <span>OR</span>
                        <SeparatorRight/>
                    </DivSeparators>
                    <FormLogin onSubmit={}>
                        <p>{}</p>
                        <EmailField>
                            <label>
                                <span>Email address</span>
                                <input type="text" placeholder='Enter your email address' onChange={}/>
                            </label>
                        </EmailField>
                        <p>{}</p>
                        <PasswordField>
                            <label>
                                <span>Password</span>
                                <input type="text" placeholder='Enter your password' onChange={}/>
                            </label>
                            <PasswordFooter>
                                <div className='savePassword'>
                                    <input type="checkbox"/>
                                    <span>Save password</span>
                                </div>
                                <span className='forgotPassword'>Forgot password?</span>
                            </PasswordFooter>
                        </PasswordField>
                        <FooterLogin>
                            <button type='submit'> Log in</button>
                        </FooterLogin>
                    </FormLogin>

            </LoginFields>
        </Container>        
    )   
}