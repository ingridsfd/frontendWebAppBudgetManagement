import React from 'react'
import Table from 'react-bootstrap/Table'

const History = () => {
  return (
            <div>
                <h1>Recent activity</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Date</th>
                        <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>10/12/2022</td>
                        <td>Netflix purchase</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
  )
}

export default History