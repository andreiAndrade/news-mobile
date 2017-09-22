import React from 'react'
import { Card, FormLabel, FormInput } from 'react-native-elements'
import { onSignIn } from '../../security'
import { MButton, MFormInput, MContainer } from '../../components'

export default ({ navigation }) => (
  <MContainer scrollable>
    <Card title='Para finalizar precisamos que você nos informe uma senha.'>
      <FormLabel>Senha Enviado por E-mail</FormLabel>
      <MFormInput placeholder='Senha Enviado por E-mail...' />
      <FormLabel>Nova Senha</FormLabel>
      <FormInput placeholder='Nova Senha...' />
      <FormLabel>Confirmar Nova Senha</FormLabel>
      <FormInput placeholder='Confirmar Nova Senha...' />

      <MButton
        title='FINISH'
        onPress={() => {
          onSignIn().then(() => navigation.navigate('SignedIn'))
        }}
      />
    </Card>
    </MContainer>
)