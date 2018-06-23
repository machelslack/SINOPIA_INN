import { connect } from 'react-redux'
import Rooms from '../../components/Inventory/Rooms'

function getRooms (state){

   

return state.get("availableRooms")


}

const mapStateToProps = state => ({

    availableRooms:getRooms(state) //state.get('availableRooms'),
  
})

export default connect(

    mapStateToProps


)(Rooms)