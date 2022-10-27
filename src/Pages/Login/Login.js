import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.config';

const auth = getAuth(app);
const Login = () => {
    const [success, setSuccess]= useState(false)
    const [error, SetError] = useState('');
    const handleLogin = event =>{
        event.preventDefault();
        setSuccess(false)
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user;
            setSuccess(true)
            console.log(user);
        })
        .catch(error=>{
            console.error('error',error);
            SetError(error.message)
        })
        console.log(email, password);

    }
    return (
        <div style={{ height: '100%' }}>
            <Card className='mx-auto mt-5' style={{ width: '50rem', height: '25rem' }}>
                <Card.Body>
                    <Card.Title>Please Login</Card.Title>
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox"> 
                            <Form.Text className="text-dark">
                                Didn't have any account?  <Link to={'/register'} >Register Now</Link>
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <p className='text-danger' >{error}</p>
                    {
                        success && <p>Login successfully</p>
                    }
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Login;