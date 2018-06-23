import React from 'react'
import ListItem from '../../../containers/Inventory/ListItem'
import PropTypes from 'prop-types'


function renderAvailableOffers(availableOffers) {

    const availableOffersArray = availableOffers.availableOffers.map(room => {


        return <ListItem item={room} container="offers"/>


    });

    return availableOffersArray;

}


const Offers = ({ availableOffers }) => (

    <div className="">
     <large>Offers</large>
        {renderAvailableOffers({ availableOffers })}
    </div>

)

Offers.propTypes = {

    availableOffers: PropTypes.array.isRequired,
}


export default Offers;