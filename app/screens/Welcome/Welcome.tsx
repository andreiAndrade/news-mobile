import React from 'react'
import { View, ImageBackground } from 'react-native'
import { MButton } from '../../components'
import { colors } from '../../assets/styles'

export default ({ navigation }) => (
  <ImageBackground style={{
    flex: 1,
    width: null,
    height: null,
    flexDirection: 'row',
    alignItems: 'flex-end'
  }} source={{ uri: 'https://i.pinimg.com/736x/3c/2b/73/3c2b730d9d7e3a9ce07c252ae902eefb--starry-night-sky-night-skies.jpg' }}>
    <View style={{ flex: 1, marginBottom: 50 }}>
      <MButton title='SIGN UP' onPress={() => navigation.navigate('SignUp')}/>
      <MButton title='CONTINUE FACEBOOK' backgroundColor={colors.facebookPrimaryColor} />
      <MButton title='CONTINUE WITH GOOGLE' backgroundColor={colors.googlePrimaryColor} />
      <MButton title='SIGN IN' textStyle={{ color: colors.darkColor }} backgroundColor={colors.lightColor}
        onPress={() => navigation.navigate('SignIn')}
      />
    </View>
  </ImageBackground>
)