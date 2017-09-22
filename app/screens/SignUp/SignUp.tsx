import React from 'react'
import { Card, FormLabel, Avatar } from 'react-native-elements'
import { onSignIn } from '../../security'
import { MButton, MFormInput, MContainer } from '../../components'

export default ({ navigation }) => (
  <MContainer scrollable>
    <Card title='Seja muito bem vindo a melhor fonte de informação.'>
      <Avatar
        xlarge
        rounded
        source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
        onPress={() => console.log('Works!')}
        activeOpacity={0.7}
        containerStyle={{ alignSelf: 'center' }}
      />
      <FormLabel>Email</FormLabel>
      <MFormInput placeholder='Email address...' />
      <FormLabel>Primeiro Nome</FormLabel>
      <MFormInput placeholder='Primeiro Nome...' />
      <FormLabel>Último Sobrenome</FormLabel>
      <MFormInput placeholder='Último Sobrenome...' />
      <FormLabel>Data de Nascimento</FormLabel>
      <MFormInput placeholder='Data de Nascimento...' />

      <MButton
        title='SIGN UP'
        onPress={() => {
          onSignIn().then(() => navigation.navigate('FillPassword'))
        }}
      />
    </Card>
  </MContainer>
)