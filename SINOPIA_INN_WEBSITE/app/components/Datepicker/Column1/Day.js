import React from 'react'

class Day extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        calDay: 0
      }

    }
//bookedRooms.addCalDay();

componentDidMount() {
    

      //this.props.addCalDay();

    //   console.log("Day-"+this.state.calDay);

    //   this.setState({calDay:this.state.calDay + 5 });
    
  }

  componentWillReceiveProps(nextProps) {

    
    


}

render(){

 

    return <td className=""> {this.props.calDay} </td>

}

}

export default Day