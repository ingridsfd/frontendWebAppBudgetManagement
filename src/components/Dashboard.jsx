import React from 'react'
import Table from 'react-bootstrap/Table'

const Dashboard = () => {
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Account ID</th>
                        <th>Add income</th>
                        <th>Spent</th>
                        <th>Balance</th>
                        <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>sdhs7373</td>
                        <td>+$15</td>
                        <td>-$5 USD</td>
                        <td>$10 USD</td>
                        <td>Netflix purchase</td>
                        <td>
                            <button class="btn btn-primary badge-pill float-right">Add</button>
                            <button class="btn btn-primary badge-pill float-right">Edit</button>
                            <button class="btn btn-danger badge-pill float-right">Delete</button>
                        </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
}
export default Dashboard