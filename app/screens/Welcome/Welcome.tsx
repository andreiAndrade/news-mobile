import React from 'react'
import { View, ImageBackground } from 'react-native'
import { Button } from 'react-native-elements'

export default () => (
  <ImageBackground style={{
    flex: 1,
    width: null,
    height: null,
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
    }} source={{uri: 'https://i.pinimg.com/736x/3c/2b/73/3c2b730d9d7e3a9ce07c252ae902eefb--starry-night-sky-night-skies.jpg'}}>
    <View style={{}}>
      <Button raised large title='Sign Up' style={{marginBottom: 20}} />
      <Button raised large title='Sign In' />
    </View>
  </ImageBackground>
)