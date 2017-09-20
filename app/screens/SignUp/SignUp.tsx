import React from 'react'
import { View, ScrollView } from 'react-native'
import { Card, Button, FormLabel, FormInput, Avatar } from 'react-native-elements'
import { onSignIn } from '../../security'

export default ({ navigation }) => (
  <View style={{ flex: 1 }}>
    <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
      <Card title='Fale-nos um pouco sobre você.'>
        <Avatar
          xlarge
          rounded
          source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
          onPress={() => console.log('Works!')}
          activeOpacity={0.7}
        />
        <FormLabel>Email</FormLabel>
        <FormInput placeholder='Email address...' />
        <FormLabel>Password</FormLabel>
        <FormInput secureTextEntry placeholder='Password...' />
        <FormLabel>Confirm Password</FormLabel>
        <FormInput secureTextEntry placeholder='Confirm Password...' />

        <Button
          buttonStyle={{ marginTop: 20 }}
          backgroundColor='#03A9F4'
          title='SIGN UP'
          onPress={() => {
            onSignIn().then(() => navigation.navigate('SignedIn'))
          }}
        />
        <Button
          buttonStyle={{ marginTop: 20 }}
          backgroundColor='transparent'
          textStyle={{ color: '#bcbec1' }}
          title='Sign In'
          onPress={() => navigation.navigate('SignIn')}
        />
      </Card>
    </ScrollView>
  </View>
)