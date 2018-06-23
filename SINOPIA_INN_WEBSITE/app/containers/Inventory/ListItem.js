import { connect } from 'react-redux'
import ListItem from '../../components/Inventory/ListItem'

const mapStateToProps = (state,ownProps) => ({

    item: ownProps.item,
    container:ownProps.container
  
})

export default connect(

    mapStateToProps


)(ListItem)