import React from 'react'
import PropTypes from 'prop-types'
import Column1 from './Column1'
import Column2 from './Column2'
import Column3 from './Column3'
import Column4 from './Column4'


// class Grid extends React.Component {


//     constructor(props) {


//         super(props);


//     }


//     componentDidMount() {

//         const context = this;

//         console.log(context.props);

//     }

//     render() {
//         return <div className="mdl-grid"></div>
//     };

// }

// const Grid = ({ bookedRooms,firstDay,lastDay,calDay, addCalDay}) => (
//     <div className="mdl-grid">

//         <Column1 bookedRooms ={bookedRooms} firstDay={firstDay} lastDay={lastDay} calDay={calDay} addCalDay={addCalDay}/>
//         <Column2 bookedRooms ={bookedRooms} firstDay={firstDay} lastDay={lastDay} />
//         <Column3 />
//         <Column4 />

//     </div>
// )

// Grid.propTypes = {
//     bookedRooms: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             fromdate: PropTypes.string.isRequired,
//             enddate: PropTypes.string.isRequired
//         }).isRequired
//     ).isRequired,
//     firstDay:PropTypes.number.isRequired,
//     lastDay:PropTypes.number.isRequired,


// }

// export default Grid;


class Grid extends React.Component {
    constructor(props) {
        super(props);

    }
    //bookedRooms.addCalDay();

    componentDidMount() {

        
        //this.props.bookedRooms.addCalDay();

    }

  
    render() {

        return <div className="mdl-grid">
            <p>{this.props.calDay}</p>
            <Column1 bookedRooms={this.props.bookedRooms} firstDay={this.props.firstDay} lastDay={this.props.lastDay} calDay={this.props.calDay} addCalDay={this.props.addCalDay} />
            <Column2 bookedRooms={this.props.bookedRooms} firstDay={this.props.firstDay} lastDay={this.props.lastDay} />
            <Column3 />
            <Column4 />
        </div>

    }

}

export default Grid