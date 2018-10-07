import View from './view'
import { connect } from 'react-redux'

const mapStateToProps = ( state ) => {
    console.log("STATE OF ", state)
    return {
        comic: state.comicsList.item
    }
}
const mapDispatchToProps = ( dispatch, props ) => {
    return {

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(View)