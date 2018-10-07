import React, {Component} from 'react';
import { Stack } from 'react-native';
import { comicsList, comicDetail } from "./src/components/sections/"
import { Router, Scene} from 'react-native-router-flux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import * as reducers from './src/data/redux'
import thunk from 'redux-thunk'
import * as api from './src/data/api_axios'

const reducer = combineReducers(reducers)
const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

export default class App extends Component {

    componentWillMount(){
        api.configureAxios()
    }
  render() {
      return (
          <Provider store={store}>
              <Router>
                  <Stack>
                      <Scene
                        key={'comicsList'}
                        initial={true}
                        component={comicsList}
                      />
                      <Scene
                          key={'comicsDetail'}
                          component={comicDetail}
                      />
                  </Stack>
              </Router>
          </Provider>


    );
  }
}

