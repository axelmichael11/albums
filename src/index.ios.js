import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native'

import Header from './components/header'
import AlbumList from './components/AlbumList'

export default App = () => (
    <View>
      <Header headerText={'Albums'}/>
      <AlbumList />
    </View>
)


AppRegistry.registerComponent('albums', () => App)
