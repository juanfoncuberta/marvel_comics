import React, { Component } from 'react'
import { View, Text } from 'react-native'
import ComicsListActions from "../../../data/redux/comicsList/actions";
import {Actions} from "react-native-router-flux";
import connect from "react-redux/es/connect/connect";

export default class extends Component{
    render(){
        const { comic } = this.props
        const title = comic && comic.title ? comic.title : ''
        return(
            <View style={{ flex: 1, backgroundColor: 'black', alignItems: 'center',  justifyContent: 'center' }}>
                <Text style={{color: 'white' }}>{title}</Text>
            </View>
        )
    }
}