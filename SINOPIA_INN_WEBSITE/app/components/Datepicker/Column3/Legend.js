import React from 'react'
import PropTypes from 'prop-types'

function renderLegend( rooms ) {

    const listItems = rooms.rooms.map( (room, index) => {


        return <li className="mdl-list__item" key={"Legend_Room-" + index}>
            <span className="mdl-list__item-primary-content">
                <i className="material-icons mdl-list__item-icon">lens</i>
                {room.name}
            </span>
        </li>
    });

    return listItems;
}

const Legend = ({ rooms }) => (

    <ul className="demo-list-icon mdl-list">


        {renderLegend({ rooms })}

    </ul>

)

Legend.propTypes = {
    rooms: PropTypes.array.isRequired,

}

export default Legend;