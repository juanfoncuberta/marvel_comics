import React, { Component } from 'react'
import { View, Text } from 'react-native'
import ComicsListActions from "../../../data/redux/comicsList/actions";
import {Actions} from "react-native-router-flux";
import connect from "react-redux/es/connect/connect";

class comicDetail extends Component{
    render(){
        return(
            <View style={{ flex: 1, backgroundColor: 'lime', alignItems: 'center',  justifyContent: 'center' }}>
                <Text style={{color: 'white' }}>Comic x</Text>
            </View>
        )
    }
}


const mapStateProps = ( state ) => {
    return {

    }
}

const mapDispatchToProps = ( dispatch, props ) => {
    return {
        fetchComicsList:() => {

        }
    }
}

export default connect(mapStateProps,mapDispatchToProps)(comicDetail)