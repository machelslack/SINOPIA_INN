import React from 'react'
import PropTypes from 'prop-types'

function renderListItem( listitems,container ) {

    const listItems = listitems.listitems.map( (listitem, index) => {


        return <li className="mdl-list__item" key={ container +'-'+ index}>
            <span className="mdl-list__item-primary-content">
                <i className="material-icons mdl-list__item-icon">lens</i>
                {listitem.name}
            </span>
        </li>
    });

    return listItems;
}

const Legend = ({ listitems , container}) => (

    <ul className="demo-list-icon mdl-list">


        {renderListItem({ listitems, container })}

    </ul>

)

Legend.propTypes = {
    rooms: PropTypes.array.isRequired,
    container:PropTypes.string.isRequired
    

}

export default Legend;