import axios from 'axios'
import { MARVEL_PUBLIC_API_KEY ,MARVEL_PRIVATE_KEY,TIME_STAMP } from 'react-native-dotenv'
import md5 from "react-native-md5";

//const AUTH = `?apikey=${MARVEL_PUBLIC_API_KEY}&hash=${HASH}&ts=${TIME_STAMP}`
const REFERER = 'wwww.juanfoncuberta.es'
const CONTENT_TYPE= 'application/json'
const BASE_URL = "https://gateway.marvel.com/v1/public"
var HASH = null

export function configureAxios(){
    console.log("CONFIGURING")


   // console.log(TIME_STAMP)
    axios.defaults.baseURL = BASE_URL
    axios.defaults.headers.post['Content-Type'] = CONTENT_TYPE
    axios.defaults.headers.common['Referer'] = REFERER

}

export function fetchComicsList(){
    setHash()
    const url = `/comics?apikey=${MARVEL_PUBLIC_API_KEY}&hash=${HASH}&ts=${TIME_STAMP}`
    console.log("URL:",url)
     return axios.get(url)
}


function setHash(){

    HASH = md5.hex_md5(TIME_STAMP+MARVEL_PRIVATE_KEY+MARVEL_PUBLIC_API_KEY)

}

