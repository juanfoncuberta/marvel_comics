import React, {Component} from 'react'
import { View, FlatList,Text,TouchableOpacity } from 'react-native'
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
     _onComicTapped(comic){
         this.props.onComicTapped(comic)
     }
    _showItem({ item }){
        const title = item ? item.title : null


        return <TouchableOpacity
                    style={{height: '100%', backgroundColor:'blue', paddingVertical: 20}}
                        onPress={()=> this._onComicTapped(item)}
                        activeOpacity={ 0.4}
                >
                    <Text style={{color:'white'}}>
                        {title}
                    </Text>
                </TouchableOpacity>
    }
    render(){
        return(
            <View style={styles.cellContainer}>
                <FlatList
                    renderItem={ val => this._showItem(val)}
                   data={this.props.list}
                    numColumns={2}
                    style={ {  paddingTop: 20}}
                    keyExtractor={(item,id)=> "cell"+id}
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

        },
        onComicTapped: (comic) => {
            dispatch(ComicsListActions.setItem(comic))
            Actions.comicsDetail({title: comic.title})
        }
    }
}

export default connect(mapStateProps,mapDispatchToProps)(comicsList)
