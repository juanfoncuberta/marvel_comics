import React, {Component} from 'react'
import marvelApi from 'marvel-comics-api'
import { MARVEL_API_KEY } from 'react-native-dotenv'

export default class extends Component{
    componentWillMount(){
        marvelApi('comics',{
            publicKey: MARVEL_API_KEY,
            timeout: 4000,
            query:{
                limit:10
            },
            headers: {
                Referer: 'developer.marvel.com'
            }
        },function (err,body){

            if(err) throw err


        })


    }

}