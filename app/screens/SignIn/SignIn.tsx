import React from 'react'
import { Card, Button, FormLabel, FormInput } from 'react-native-elements'
import { onSignIn } from '../../security'
import { MContainer } from '../../components'

export default ({ navigation }) => (
  <MContainer>
    <Card>
      <FormLabel>Email</FormLabel>
      <FormInput placeholder='Email address...' />
      <FormLabel>Password</FormLabel>
      <FormInput secureTextEntry placeholder='Password...' />

      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor='#03A9F4'
        title='SIGN IN'
        onPress={() => {
          onSignIn().then(() => navigation.navigate('SignedIn'))
        }}
      />
    </Card>
  </MContainer>
)