import React from 'react'
import PropTypes from 'prop-types'
import Day from './Day'



// function renderDays(bookedRooms, index, calDay,firstDay,lastDay,addCalDay) {

//     const days = [];
//    console.log('bookedRooms-'+bookedRooms.calDay);
//     for (var x = 0; x <= 6; x++) {

//         if (bookedRooms.index == 0 && x < bookedRooms.firstDay) {

//             days.push(<td key={'day-(' + index + ',' + x + ')'} ></td>);

//         }

//         else {

//             // $day = date("d", mktime(0, 0, 0, $month, $day, $period));

//             // $html.= '<td class="daydiv" data-id="'.$month.'">'.$day.'</td>';

//             // $day = $day + 1;

//             // $count = $count + 1;

//             days.push(<Day key={'day-(' + index + ',' + x + ')'} bookedRooms={bookedRooms} calDay={bookedRooms.calDay}/>);

           

//         }

//     }

//     return days;
// }

// //
// const Week = ({ bookedRooms,calDay,firstDay,lastDay,addCalDay }) => (


    
//     <tr className="">

//         {renderDays({ bookedRooms,calDay,firstDay,lastDay,addCalDay})}

//     </tr>

// )

// Week.propTypes = {
//     bookedRooms: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             fromdate: PropTypes.string.isRequired,
//             enddate: PropTypes.string.isRequired
//         }).isRequired
//     ).isRequired,
//     calDay : PropTypes.number.isRequired,
//     firstDay:PropTypes.number.isRequired,
//     lastDay:PropTypes.number.isRequired
// }

// export default Week;


class Week extends React.Component {
    constructor(props) {
        super(props);

    }
    //bookedRooms.addCalDay();

    componentDidMount() {

        
        //this.props.bookedRooms.addCalDay();

    }

  
    render() {

        let days =[],
        calDay = this.props.calDay,
        index = index++;

        console.log(this.props.calDay);

        for (var x = 0; x <= 6; x++) {

            if (this.props.bookedRooms.index == 0 && x < this.props.bookedRooms.firstDay) {
    
                days.push(<td key={'day-(' + index + ',' + x + ')'} ></td>);
    
            }
    
            else {
    
                // $day = date("d", mktime(0, 0, 0, $month, $day, $period));
    
                // $html.= '<td class="daydiv" data-id="'.$month.'">'.$day.'</td>';
    
                // $day = $day + 1;
    
                // $count = $count + 1;
                calDay = calDay++;
                
                days.push(<Day addCalDay={this.props.addCalDay} key={'day-(' + index + ',' + x + ')'} bookedRooms={this.props.bookedRooms} calDay={calDay}/>);
    
               
    
            }
    
        }

        return    <tr className="">

        {days}

    </tr>

    }

}

export default Week