import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput } from 'react-native'
import  styles  from './styles'


export default class extends Component{

    constructor(props){
        super(props)
        this.state = {
            opinion: ''
        }
        this.options = {
            title: 'Select and image',
            storageOptions:{
                skipBackup: true,
                path: 'images'
            }
        }

    }
    render(){
        return(
            <View style={styles.container}>
                <View style={{paddingHorizontal:20, paddingBottom: 20}}>
                    <View style={[this.props.containerStyle]}>
                        <Text style={[styles.label, this.props.labelStyle]}>{this.props.label}</Text>
                        <TextInput


                            style={[styles.textInput, this.props.inputStyle]}
                            placeholder={this.props.placeholder}
                            placeholder={this.props.placeholder}

                        />
                    </View>
                </View>
                <View style={{ paddinghorizontal:20, paddingBottom:40}}>
                    <TouchableOpacity
                        style={styles.buttonContainer}
                    >
                        <Text style={styles.buttonText}>{'Save'.toUpperCase()}</Text>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}