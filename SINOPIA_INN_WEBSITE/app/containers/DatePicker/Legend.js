import { connect } from 'react-redux'
import Legend from '../../components/Datepicker/Column3/Legend'


function getValue (state) {

console.log(state.getState());

return state.rooms;


}


const mapStateToProps = (state) => ({
    rooms:state.get('rooms'),
})

export default connect(

    mapStateToProps,

)(Legend)