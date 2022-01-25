import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios, { AxiosRequestConfig } from 'axios';
import { Form, Button } from 'react-bootstrap';
import { BASE_URL } from 'utils/requests';
import { validateEmail } from 'utils/validate';
import './styles.css';

function FormCard() {

    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const email = (event.target as any).email.value;
        const name = (event.target as any).name.value;
        const date = (event.target as any).birthDate.value;
        const cpf = (event.target as any).cpfCnpj.value;

        if (!validateEmail(email)) {
            return;
        }

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: '/scores',
            data: {
                email: email,
                name: name,
                birthDate: date,
                cpfCnpj: cpf
            }
        }

    }


    return (
        <div className="form-container">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="name" placeholder="Enter name" id="name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" id="email"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Data de Nascimento</Form.Label>
                    <Form.Control type="date" placeholder="Enter birthDate" id="birthDate"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>CPF</Form.Label>
                    <Form.Control type="cpf" placeholder="Enter cpf" id="cpfCnpj"/>
                </Form.Group>

                <div className='button-container'>
                    <Button className='btn' variant="primary" type="submit">
                        Submit
                    </Button>
                    <Button className='btn' variant="primary" type="reset">
                        Limpar
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default FormCard;