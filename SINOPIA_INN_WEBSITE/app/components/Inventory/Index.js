
import React from 'react'
import Rooms from '../../containers/Inventory/Rooms'
import Offers from '../../containers/Inventory/Offers'
import Amenities from '../../containers/Inventory/Amenities'
import PropTypes from 'prop-types'

const Panel = ({ availableRooms, availableOffers, availableAmenities }) => (

    <div className="">


        <Rooms availableRooms={availableRooms} />
        <Offers availableOffers={availableOffers} />
        <Amenities availableAmenities={availableAmenities} />

    </div>
)


Panel.propTypes = {
    availableRooms: PropTypes.array.isRequired,
    availableOffers: PropTypes.array.isRequired,
    availableAmenities: PropTypes.array.isRequired,
}


export default Panel;