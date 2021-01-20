import React, {Component} from 'react'

class Table extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Doka</td>
                        <td>Mayana</td>
                    </tr>
                <tr>
                    <td>Amore</td>
                    <td>Garba</td>
                </tr>
                <tr>
                    <td>Salihu</td>
                    <td>Farouk</td>
                </tr>
                <tr>
                    <td>Idriss</td>
                    <td>Gonda</td>
                </tr>
                </tbody>
      </table>
        )
    }
}
export default Table