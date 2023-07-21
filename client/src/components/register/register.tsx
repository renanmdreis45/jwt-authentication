import React, { SyntheticEvent, useState } from 'react'
import Image from 'next/image';
import SignUp from '../../../public/assets/images/SignUp.png'

import {
     Container, LoginImage, LoginFields, HeaderLogin, 
     LoginButtons, DivSeparators, SeparatorLeft, SeparatorRight, 
     FormLogin, EmailField, PasswordField, PasswordFooter, FooterLogin
} from './styles';
import { Google, Facebook } from '../icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../../slices/usersApiSlice';
import { InitialState } from '../../slices/authSlice';

interface CadastroProps {
    handleShowLogin: () => void;
}

export default function Register({handleShowLogin}: CadastroProps) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassowrd, setConfirmPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [register, {isLoading}] = useRegisterMutation();

    const {userInfo} = useSelector((state: InitialState) => state.auth)

    return (
        <Container>
            <LoginImage>
                <Image src={SignUp} alt="Homem apontando para uma tela de login" fill/>
            </LoginImage>
            <LoginFields>
                    <HeaderLogin>
                        <h1>Get`s started</h1>
                        <h3>Already have an account? <a onClick={handleShowLogin}>Sign Up</a></h3>
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
                        <EmailField>
                            <label>
                                <span>Email address</span>
                                <input type="text" placeholder='Enter your email address' onChange={}/>
                            </label>
                        </EmailField>
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