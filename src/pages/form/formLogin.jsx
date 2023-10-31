import React from 'react';
import { Card, Tab, Tabs } from 'react-bootstrap';
import '../styles.css';
import Register from './components/register';
import Login from './components/login';

function FormLogin() {

    return (
        <>
            <h1>Form</h1>
            <Card className='card-form'>
                <Card.Title style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>
                    <h3>Formulario</h3>
                </Card.Title>
                <Card.Body>
                    <Tabs defaultActiveKey="login" className="mb-3" fill>
                        <Tab eventKey="login" title="Login">
                            <Login />
                        </Tab>
                        <Tab eventKey="register" title="Register" >
                            <Register />
                        </Tab>
                    </Tabs>
                </Card.Body>
            </Card>
        </>
    );
}

export default FormLogin;
