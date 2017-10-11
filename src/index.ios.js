import React, { Component } from 'react';
import { AppRegistry } from 'react-native'

import Header from './components/header'

export default App = () => (
      <Header headerText={'Albums'}/>
)


AppRegistry.registerComponent('albums', () => App)
