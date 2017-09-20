import React from 'react'
import { View, ImageBackground } from 'react-native'
import { Button } from 'react-native-elements'
// import { colors } from '../../assets/styles'

export default ({navigation}) => (
  <ImageBackground style={{
    flex: 1,
    width: null,
    height: null,
    flexDirection: 'row',
    alignItems: 'flex-end'
    }} source={{uri: 'https://i.pinimg.com/736x/3c/2b/73/3c2b730d9d7e3a9ce07c252ae902eefb--starry-night-sky-night-skies.jpg'}}>
    <View style={{flex: 1, marginBottom: 50}}>
      <Button raised title='Sign Up' style={{marginBottom: 20}} backgroundColor={'#88B04B'} onPress={() => navigation.navigate('SignUp')}/>
      <Button raised title='Sign In' backgroundColor={'#2d607c'} onPress={() => navigation.navigate('SignIn')}/>
    </View>
  </ImageBackground>
)