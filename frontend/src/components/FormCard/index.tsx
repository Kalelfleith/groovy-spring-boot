import { Form, Button } from 'react-bootstrap';
import './styles.css';

function FormCard() {
    return (
        <div className="form-container">
            <Form>
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
                    <Form.Control type="birthDate" placeholder="Enter birthDate" id="birthDate"/>
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