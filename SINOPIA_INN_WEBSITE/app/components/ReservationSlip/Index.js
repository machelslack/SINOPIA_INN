
import React from 'react'
import Rooms from './Rooms'
import Row from './Row'
import Confirmation from './Confirmation'

const Table = () => (

    <table className="mdl-data-table mdl-js-data-table">
        <thead>
            <tr>
                <th className="mdl-data-table__cell--non-numeric">Name</th>
                <th className="mdl-data-table__cell--non-numeric">Nickname</th>
                <th>Age</th>
                <th className="mdl-data-table__cell--non-numeric">Living?</th>
            </tr>
        </thead>
        <tbody>

            <Rooms />
            <Row />
            <Confirmation />


        </tbody>
    </table>

)
export default Table;