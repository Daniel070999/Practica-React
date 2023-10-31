import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Login() {
    const [formData, setFormData] = useState({
        user: '',
        password: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            console.log(formData);
            cleanForm(event);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    function cleanForm() {
        setFormData({
            user: '',
            password: ''
        })
    }

    return (
        <>
            <Form onSubmit={handleSubmit} style={{ border: '1px solid rgba(0, 0, 0, 0.2)', padding: '20px', borderRadius: '20px' }}>
                <Col className="mb-3" style={{ marginInline: '10%' }}>
                    <Form.Group as={Row} controlId="validationCustom09">
                        <Form.Label>User</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="user"
                            placeholder="User"
                            value={formData.user}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group as={Row} controlId="validationCustom10">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Col>
                <Button type="submit">Submit</Button>
            </Form>
        </>
    )
}

export default Login;