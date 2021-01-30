import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm'
import { LoginPageBody } from './LoginPage.style'

const LoginPage = () => {
    return (
        <LoginPageBody>
            <LoginForm />
        </LoginPageBody>
    )
}

export default LoginPage;