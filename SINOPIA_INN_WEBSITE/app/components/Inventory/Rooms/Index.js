import React from 'react'
import ListItem from '../../../containers/Inventory/ListItem'
import PropTypes from 'prop-types'


function renderAvailableRooms(availableRooms) {

    const availableRoomsArray = availableRooms.availableRooms.map(room => {


        return <ListItem item={room} container="rooms"/>


    });

    return availableRoomsArray;

}

const Rooms = ({ availableRooms }) => (

    <div className="">
    <large>Rooms</large>
        {renderAvailableRooms({ availableRooms })}
    </div>

)

Rooms.propTypes = {

    availableRooms: PropTypes.array.isRequired,

}


export default Rooms;