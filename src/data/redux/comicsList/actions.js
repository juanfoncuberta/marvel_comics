import * as types from './types'
import * as api from '../../api_axios'


function setFeching(value){
    return {
        type: types.COMICSLIST_SET_FETCHING,
        value
    }
}

 export function setList(value){
    return {
        type: types.COMICSLIST_UPDATE_LIST,
        value
    }
}

function setItem(value){
    return {
        type: types.COMICSLIST_SET_ITEM,
        value
    }
}


export function fetchComicsList(){
    return(dispatch, getState ) => {
        dispatch(setFeching(true))
        api
          .fetchComicsList()
            .then(
                res => {
                    console.log("res ",res.data.data.results)
               dispatch(setFeching(false))
                dispatch(setList(res.data.data.results))
            }).catch(
                err =>
                    console.log("Error fetching comicsList: ",err)
        )

    }
}
