import React, { Component } from 'react'
import { TouchableOpacity, Image } from 'react-native'
import styles from './styles'

export default  class comicsListCell extends  Component{

    static defaultProps = {
        comic: null,
        onComicPress: () => {}
    }

    render(){
        const { comic, onComicPress } from this.props

        return(
            <TouchableOpacity>
                {'Hola'}
            </TouchableOpacity>
        )

}