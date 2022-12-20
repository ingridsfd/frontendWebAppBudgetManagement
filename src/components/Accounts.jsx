import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {Table, Button, Modal, ModalBody, ModalHeader, ModalFooter, FormGroup } from 'reactstrap'
import data from '../mock-data.json'

const Accounts = () => {
    //variables data general
    const [contacts, setContacts] = useState(data);
    const [addFormData, setAddFormData] = useState({
        id: '',
        accountName: '',
        accountNumber: '',
        balance: '',
        cardType: ''
    });
    //var modal
    const [show, setShow] = useState(false);
    //var redirect
    const navigate = useNavigate();
    //eventHandlers general
    const handleAddFormChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;
        setAddFormData(newFormData);
    }
    const handleAddFormSubmit = (event) => {
        event.preventDefault();
        const newContact = {
            id: addFormData.id.length + 1,
            accountName: addFormData.accountName,
            accountNumber: addFormData.accountNumber,
            balance: addFormData.balance //here we define the creatable maybe?
        }
        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
    }
    //eventHandler of redirection button
    const redirect = () => {
        navigate('/home')
    }
return (
    <div>
        <Button onClick={() => setShow(true)} color="success">Insert new account</Button>
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name of account</th>
                    <th>Account ID</th>
                    <th>Balance</th>
                    <th>Card type</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map((contacts) => (
                <tr key={contacts.id}>
                    <td>{contacts.id}</td>    
                    <td>{contacts.accountName}</td>
                    <td>{contacts.accountNumber}</td>
                    <td>{contacts.balance}</td>
                    <td>{contacts.cardType}</td>
                    <td><Button color="primary">Editar</Button>{"  "}
                    <Button color="danger">Eliminar</Button></td>
                </tr>
                ))}
            </tbody>
        </Table>
        <Modal show={show} setShow={setShow} onSubmit={handleAddFormSubmit}>
            <ModalHeader>
                <div>
                    <h3>Add a new account</h3>
                </div>
            </ModalHeader>
            <ModalBody>
                <FormGroup>
                    <h3>
                        Id:
                    </h3>
                    <input
                        className="form-control"
                        readOnly
                        type="text" 
                        value={handleAddFormChange}
                    />
                </FormGroup>
                <FormGroup>
                    <h3>
                        Name of account:
                    </h3>
                    <input
                        className="form-control"
                        name="accountName"
                        type="text"
                        value={handleAddFormChange}
                    />
                </FormGroup>
                <FormGroup>
                    <h3>
                        Account ID:
                    </h3>
                    <input
                        className="form-control"
                        name="accountNumber"
                        type="text"
                        value={handleAddFormChange}
                    />
                </FormGroup>
                <FormGroup>
                    <h3>
                        Balance:
                    </h3>
                    <input
                        className="form-control"
                        name="balance"
                        type="text"
                        value={handleAddFormChange}
                    />
                </FormGroup>
                <FormGroup>
                    <h3>
                        Card Type:
                    </h3>
                    <input
                        className="form-control"
                        name="cardType"
                        type="text"
                        value={handleAddFormChange}
                    />
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button color="primary">Add</Button>
                <Button onClick={() => setShow(false)}color="danger">Cancel</Button>
            </ModalFooter>
        </Modal>
        <button onClick={redirect}>back</button>
    </div>
)
}

export default Accounts