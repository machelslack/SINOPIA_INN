import React from 'react'
import ListItem from '../../../containers/Inventory/ListItem'
import PropTypes from 'prop-types'


function renderAvailableAmenitites(availableAmenities) {

  
    const availableAmenititesArray = availableAmenities.availableAmenities.map(amenity  => {


        return <ListItem item={amenity} container="amenities" />


    });

    return availableAmenititesArray;

}

const Amenities = ({availableAmenities}) => (

<div className="">
<large>Amenities</large>
{renderAvailableAmenitites({availableAmenities})}
</div>

)

Amenities.propTypes = {

    availableAmenities: PropTypes.array.isRequired,
}


export default Amenities;