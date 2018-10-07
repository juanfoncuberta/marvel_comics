import React, {Component} from 'react';
import { Stack,TouchableOpacity,Text } from 'react-native';
import { comicsList, comicDetail, comicForm } from "./src/components/sections/"
import { Router, Scene} from 'react-native-router-flux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import * as reducers from './src/data/redux'
import thunk from 'redux-thunk'
import * as api from './src/data/api_axios'
import { Actions } from 'react-native-router-flux'

const reducer = combineReducers(reducers)
const store = createStore(
    reducer,
    applyMiddleware(thunk)
)
const RighButton = props => (
    <TouchableOpacity
        style={{padding: 10}}
        onPress={() => Actions.comicForm() }>
        <Text style={{color: 'black', fontWeight: 'bold'}}>{'Opinion'}</Text>
    </TouchableOpacity>
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
                          renderRightButton={RighButton}
                      />
                      <Scene
                          key={'comicForm'}
                          component={comicForm}
                      />
                  </Stack>
              </Router>
          </Provider>


    );
  }
}

