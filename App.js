import React, {Component} from 'react';
import { Stack } from 'react-native';
import { comicsList } from "./src/components/sections/"
import { Router, Scene} from 'react-native-router-flux'

export default class App extends Component<Props> {

  render() {

    return (
        <Router>
              <Stack key={'root'}>
                    <Scene key={"comicsList"}
                           component={comicsList}
                           initial={true}/>
              </Stack>
          </Router>
    );
  }
}

