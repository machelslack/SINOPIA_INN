import { connect } from 'react-redux'
import Grid from '../../components/Datepicker'
import {addCalDay} from '../../actions'
import returnMonth from './script'


function getFirstDay(state) {

    return new Date(state.get('currentYear'), state.get('currentMonth'), 1).getDay();

}

function getLastDay(state) {

    return new Date(state.get('currentYear'), state.get('currentMonth') + 1, 0).getDate();

}

function getcalDay(state) {

    let months = returnMonth(state.get('currentYear'),state.get('currentMonth')) //state.get('calDay');

    console.log(JSON.stringify(months)[0]);
    console.log(JSON.stringify(months)[1]);
    console.log(JSON.stringify(months)[2]);
    console.log(JSON.stringify(months)[3]);
    console.log(JSON.stringify(months)[4]);

    return months

}

const mapStateToProps = state => ({
    bookedRooms: state.get('bookedRooms'),
    //currentMonth: state.get('currentMonth'),
    //currentYear: state.get('currentYear'),
    firstDay: getFirstDay(state),
    lastDay: getLastDay(state),
    calDay:getcalDay(state),
   
})

const mapDispatchToProps = dispatch => ({
    
    addCalDay: () => dispatch(addCalDay())

  })

const DatePicker = connect(

    mapStateToProps,
    mapDispatchToProps

)(Grid)

export default DatePicker;