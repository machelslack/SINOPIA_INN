import { connect } from 'react-redux'
import Offers from '../../components/Inventory/Offers'

const mapStateToProps = state => ({

    availableOffers : state.get('availableOffers'),
  
})


export default connect(

    mapStateToProps


)(Offers)