import React from 'react'
import PropTypes from 'prop-types'
import Textfield from './Textfield'
import Row from '../../../containers/DatePicker/Row'

// function renderWeeks({ bookedRooms,firstDay,lastDay,calDay,addCalDay}) {


//   const date = new Date(),
//   tableRows = [];

//   for (var x = 0; x < 6; x++) {
   
//   tableRows.push(<Row key={'week-' + x} bookedRooms={bookedRooms} index={x} calDay={calDay} firstDay={firstDay} lastDay={lastDay} addCalDay={addCalDay} />);

//   }

//   return tableRows;

// };

// const Column1 = ({ bookedRooms,firstDay,lastDay,calDay,addCalDay }) => (


//   <div className="mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--4-col-phone">
//     <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
//       <thead>
//         <tr>
//           <th colSpan="2" className="mdl-data-table__cell--non-numeric"><p> Previous </p> </th>
//           <th colSpan="3">Quantity</th>
//           <th colSpan="2"><p> Previous </p> </th>
//         </tr>
//       </thead>
//       <tbody>
//         {renderWeeks({ bookedRooms,firstDay,lastDay,calDay,addCalDay })}
//       </tbody>
//     </table>
//   </div >

// )

// Column1.propTypes = {
//   bookedRooms: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       fromdate: PropTypes.string.isRequired,
//       enddate: PropTypes.string.isRequired
//     }).isRequired
//   ).isRequired,
//   firstDay:PropTypes.number.isRequired,
//   lastDay:PropTypes.number.isRequired
// }

// export default Column1;

class Column1 extends React.Component {
  constructor(props) {
      super(props);

  }
  //bookedRooms.addCalDay();

  componentDidMount() {

      
      //this.props.bookedRooms.addCalDay();

  }


  render() {

    console.log(this.props.calDay);
  let tableRows = [];

  for (var x = 0; x < 6; x++) {
   
  tableRows.push(<Row key={'week-' + x} bookedRooms={this.props.bookedRooms} index={x} calDay={this.props.calDay} firstDay={this.props.firstDay} lastDay={this.props.lastDay} addCalDay={this.props.addCalDay} />);

  }



      return   <div className="mdl-cell mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--4-col-phone">
      <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
        <thead>
          <tr>
            <th colSpan="2" className="mdl-data-table__cell--non-numeric"><p> Previous </p> </th>
            <th colSpan="3">Quantity</th>
            <th colSpan="2"><p> Previous </p> </th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    </div >
  

  }

}

export default Column1
