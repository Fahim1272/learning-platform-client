import React, { useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import app from '../../firebase/firebase.config';
import { getAuth, sendEmailVerification } from "firebase/auth";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const auth = getAuth(app);
const Register = () => {
    const { createUser, updateUserProfile, } = useContext(AuthContext)
    const [error, SetError] = useState('');
    const [success, setSuccess] = useState(false)
    const handleRegister = event => {
        setSuccess(false)
        event.preventDefault();
        const form = event.target;
        const photoURL = form.photoURL.value;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        // new added code
        createUser(email, password)
            // createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(true);
                form.reset();
                verifayEmail();
                handleUserProfile(name, photoURL)
            })
            .catch(error => {
                console.error('error', error);
                SetError(error.message)
            })
    }
    const handleUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }
    const verifayEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then((
                alert('Please Check your email')
            ))
    }
    return (
        <div style={{ height: '100%' }}>
            <Card className='mx-auto mt-5' style={{ width: '50rem', height: '35rem' }}>
                <Card.Body className='p-5'>
                    <Card.Title><span className='text-warning' >Welcome!</span> Register a New Acount.</Card.Title>
                    <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="name" name='name' placeholder="Enter your full name!" />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control type="text" name='photoURL' placeholder="Photo URL" />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" required />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        </Form.Group>
                        <Form.Text className="text-dark">
                            Already have an any account?  <Link to={'/login'} >Login Now</Link>
                        </Form.Text>
                        <p className='text-danger' >{error}</p>
                        {success && <p className='text-info' > User Created Successfully</p>}
                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Register;