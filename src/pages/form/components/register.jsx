import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        user: '',
        email: '',
        dateBorn: '',
        genre: '',
        password: '',
        confirmPass: ''
    });
    const [errorPass, setErrorPass] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else if (formData.password !== formData.confirmPass) {
            setErrorPass('La clave no es la misma');
        } else {
            console.log(formData);
            cleanForm(event);
        }
    };

    const handleInputChange = (event) => {
        setErrorPass(null)
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    function cleanForm() {
        setFormData({
            name: '',
            lastName: '',
            user: '',
            email: '',
            dateBorn: '',
            genre: '',
            password: '',
            confirmPass: ''
        })
    }

    return (
        <>
            <Form onSubmit={handleSubmit} style={{ border: '1px solid rgba(0, 0, 0, 0.2)', padding: '20px', borderRadius: '20px' }}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom04">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="lastName"
                            placeholder="Last name"
                            value={formData.lastName}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02">
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
                    <Form.Group as={Col} md="6" controlId="validationCustom05">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        <Form.Control.Feedback type='invalid'>Correo no válido</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Date born</Form.Label>
                        <Form.Control
                            required
                            type="date"
                            name="dateBorn"
                            placeholder="Date born"
                            value={formData.dateBorn}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom06">
                        <Form.Label>Genre</Form.Label>
                        <Form.Select
                            required
                            name="genre"
                            placeholder="Genre"
                            value={formData.genre}
                            onChange={handleInputChange}>
                            <option></option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <hr />
                <Row>
                    <Form.Group as={Col} md="6" controlId="validationCustom07">
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
                    <Form.Group as={Col} md="6" controlId="validationCustom08">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            name="confirmPass"
                            placeholder="Confirm Password"
                            value={formData.confirmPass}
                            onChange={handleInputChange}
                        />
                        <span style={{ fontSize: '14px', color: 'red' }}>{errorPass}</span>
                    </Form.Group>
                </Row>
                <Button type="submit" style={{ marginTop: '15px' }}>Submit</Button>
            </Form>
        </>
    )
}
export default Register;