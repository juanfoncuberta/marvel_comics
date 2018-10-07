import React, {Component} from 'react'
import { View, FlatList,Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import connect from "react-redux/es/connect/connect";
import * as ComicsListActions from '../../../data/redux/comicsList/actions'
import styles from './styles'


 class comicsList extends Component{

    constructor(props){
        super(props)
        //this.navToComicDetail = this.navToComicDetail.bind(this)
    }

    componentDidMount(){
      this.props.fetchComicsList()
    }

    _showItem(val){
        const title = val ? val.item.title : null

        console.log("comicList showitem:", title)

        return <View style={{height: '100%', backgroundColor:'blue', paddingVertical: 20}} >
            <Text style={{color:'white'}}>
                {title}
            </Text>
            </View>
    }
    render(){
        return(
            <View style={styles.cellContainer}>
                <FlatList
                    renderItem={ val => this._showItem(val)}
                   data={this.props.list}
                    numColumns={2}
                    style={ {  paddingTop: 20}}
                />
            </View>
        )
    }
}


const mapStateProps = ( state ) => {

    return {
        list: state.comicsList.list,
        isFetching: state.comicsList.isFetching
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        fetchComicsList: () => {
            dispatch(ComicsListActions.fetchComicsList())

        }
    }
}

export default connect(mapStateProps,mapDispatchToProps)(comicsList)
