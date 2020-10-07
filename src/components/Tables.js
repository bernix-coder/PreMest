import React from 'react'

function Tables() {
    return (
        <>
            <div className='container'>
                <h3> List of previous winners </h3>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Price won</th>
                        <th>Status</th>
                    </tr>

                    <tr>
                        <td>Bernix Adj</td>
                        <td>abbb@gmail.com</td>
                        <td>$ 34.00</td>
                        <td><span >Success</span></td>
                    </tr>

                    <tr>
                        <td>Esi Mantell</td>
                        <td>esima@gmail.com</td>
                        <td>$ 64.00</td>
                        <td><span >Success</span></td>
                    </tr>

                    <tr>
                        <td>Kifi Osei</td>
                        <td>koff@gmail.com</td>
                        <td>$ 4.00</td>
                        <td><span >Success</span></td>
                    </tr>
                </table>

            </div>
        </>
    )
}

export default Tables
