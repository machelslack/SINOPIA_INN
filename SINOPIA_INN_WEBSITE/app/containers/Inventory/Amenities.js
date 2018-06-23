import { connect } from 'react-redux'
import Amenities from '../../components/Inventory/Amenities'

const mapStateToProps = state => ({

    availableAmenities: state.get('availableAmenities')
  
})

export default connect(

    mapStateToProps


)(Amenities)