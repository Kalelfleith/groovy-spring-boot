import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { validateEmail } from 'utils/validate';
import './styles.css';

function FormCard() {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const email = (event.target as any).email.value;

        if (!validateEmail(email)) {
            return;
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