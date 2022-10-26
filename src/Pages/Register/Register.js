import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

const Register = () => {
    const handleRegister = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);

    }
    return (
        <div style={{ height: '100%' }}>
            <Card className='mx-auto mt-5' style={{ width: '50rem', height: '30rem' }}>
                <Card.Body>
                    <Card.Title><span className='text-warning' >Welcome!</span> Register a New Acount.</Card.Title>
                    <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="name" name='name' placeholder="Enter your full name!" />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name='password' placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        </Form.Group>
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