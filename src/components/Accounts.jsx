import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import data from '../mock-data.json'
import { nanoid } from 'nanoid';

const Accounts = () => {
    //variables
    const [contacts, setContacts] = useState(data);
    const [addFormData, setAddFormData] = useState({
        id: '',
        accountName: '',
        accountNumber: '',
        balance: '',
        cardType:''
    })
    const navigate = useNavigate();
    //eventHandlers
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
            id: nanoid(),
            accountName: addFormData.accountName,
            accountNumber: addFormData.accountNumber,
            balance: addFormData.balance
        }

        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
    }

    const redirect = () => {
        navigate('/home')
    }
return (
    <div>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name of account</th>
                    <th>Account ID</th>
                    <th>Balance</th>
                    <th>Card type</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map((contacts) => (
                <tr>
                    <td>{contacts.id}</td>    
                    <td>{contacts.accountName}</td>
                    <td>{contacts.accountNumber}</td>
                    <td>{contacts.balance}</td>
                    <td>{contacts.cardType}</td>
                </tr>
                ))}
            </tbody>
        </Table>
        <h2>Add a different money account:</h2>
        <form onSubmit={handleAddFormSubmit}>
            <input
                type='text'
                name='accountName'
                required="required"
                placeholder='Enter account name...'
                onChange={handleAddFormChange}
            />
            <input
                type='text'
                name='accountNumber'
                required="required"
                placeholder='Enter account number...'
                onChange={handleAddFormChange}
            />
            <input
                type='text'
                name='balance'
                required="required"
                placeholder='Enter balance...'
                onChange={handleAddFormChange}
            />
            <button type="submit">Add</button>
        </form>
        <button onClick={redirect}>back</button>
    </div>
)
}

export default Accounts