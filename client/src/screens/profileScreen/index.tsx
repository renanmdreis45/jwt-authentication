import { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';
import { useUpdateUserMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';


export const ProfileScreen = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const dispatch = useDispatch();


    useEffect(() => {

    })

    return (
        <FormContainer>
            <h1> Update Profile </h1>
        </FormContainer>
    )
}