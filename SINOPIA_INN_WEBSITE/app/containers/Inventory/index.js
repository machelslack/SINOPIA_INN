import { connect } from 'react-redux'
import Panel from '../../components/Inventory'

const mapStateToProps = state => ({

    availableRooms: state.get('availableRooms'),
    availableOffers : state.get('availableOffers'),
    availableAmenities: state.get('availableAmenities')
  
})

export default connect(

    mapStateToProps


)(Panel)