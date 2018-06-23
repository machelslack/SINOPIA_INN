import { connect } from 'react-redux'
import Week from '../../components/Datepicker/Column1/Week'
// const mapStateToProps = (state, ownProps) => ({

//     bookedRooms: 'ownProps.bookedRooms',
//     index: ownProps.index,
//     date: 'ownProps.date'
// })

const mapStateToProps = (state, ownProps) => ({
    bookedRooms:ownProps.bookedRooms,
    index:ownProps.index,
    calDay:ownProps.calDay,
    firstDay:ownProps.firstDay,
    lastDay:ownProps.lastDay,
    addCalDay:ownProps.addCalDay
})


export default connect(

    mapStateToProps,

)(Week)