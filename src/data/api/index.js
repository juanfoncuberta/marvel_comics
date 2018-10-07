import React, {Component} from 'react'
import marvelApi from 'marvel-comics-api'
import { MARVEL_PUBLIC_API_KEY } from 'react-native-dotenv'
import {applyMiddleware as dispatch } from 'redux'


import * as ComicsListActions from '../redux/comicsList/actions'

const BASE_URL = 'developer.marvel.com'



export function fetchComicsList(){

    return marvelApi('comics',{
        publicKey: MARVEL_PUBLIC_API_KEY,
        timeout: 10000,
        query:{
            limit:10
        },
        headers: {
            Referer: BASE_URL
        }
    },function (err,body){

        if(err){
            console.log("Error fetching comicsList: ",err)

        }else{
            dispatch(ComicsListActions.setList(body.data.results))

        //  ComicsListActions.callbackApi(body.data.results)


        }


    })
}



