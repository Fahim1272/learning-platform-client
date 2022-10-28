import React, { useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {  GithubAuthProvider, GoogleAuthProvider} from "firebase/auth";
// import app from '../../firebase/firebase.config';
import  { AuthContext } from '../../contexts/AuthProvider/AuthProvider';



// const auth = getAuth(app);
const Login = () => {
    const { signInuser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const [success, setSuccess]= useState(false)
    const [error, SetError] = useState('');
    const handleLogin = event =>{
        event.preventDefault();
        setSuccess(false)
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInuser(email, password) 
        .then(result =>{
            const user = result.user;
            setSuccess(true)
            form.reset();
            console.log(user);
            navigate(from, {replace: true});
        })
        .catch(error=>{
            console.error('error',error);
            SetError(error.message)
        })
        console.log(email, password);

    }
    const {providerLogin} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()
    const HandleGoogleSignIn = ()=> {
        providerLogin(googleProvider)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }
    const HandleGithubSignIn = ()=> {
        providerLogin(githubProvider)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }
    return (
        <div className='' style={{ height: '100%' }}>
            <Card className='mx-auto mt-5'  style={{ width: '50rem', height: '30rem' }}>
                <Card.Body className='p-5'>
                    <Card.Title className='text-warning'>Please Login</Card.Title>
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
                        <Button variant="info" type="submit">
                            Login
                        </Button>
                    </Form>
                    <p className='text-danger' >{error}</p>
                    {
                        success && <p>Login successfully</p>
                    }
                    <Button onClick={HandleGoogleSignIn} variant="outline-dark">Google Sign In</Button>{' '}
                    <Button onClick={HandleGithubSignIn} variant="outline-dark">GitHub Sign In</Button>{' '}
                </Card.Body>
            </Card>
        </div>
    );
};

export default Login;