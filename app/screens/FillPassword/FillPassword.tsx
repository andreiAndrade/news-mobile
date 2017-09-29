import React from 'react'
import { Card } from 'react-native-elements'
import t from 'tcomb-form-native'
import { onSignIn } from '../../security'
import { MButton, MContainer, MForm } from '../../components'

const fillPasswordForm = t.struct({
  passwordSendedByEmail: t.String,
  newPassword: t.String,
  confirmNewPassword: t.String
})

export default ({ navigation }) => {
  return (
    <MContainer scrollable>
      <Card title='Para finalizar precisamos que você nos informe uma senha.'>
        <MForm
          type={fillPasswordForm}
        />

        <MButton
          title='FINISH'
          onPress={() => {
            onSignIn().then(() => navigation.navigate('SignedIn'))
          }}
        />
      </Card>
    </MContainer>
  )
}