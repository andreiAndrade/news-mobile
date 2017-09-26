import React from 'react'
import { Card, Avatar } from 'react-native-elements'
import t from 'tcomb-form-native'
import autobind from 'autobind-decorator'

import { MButton, MContainer, MForm } from '../../components'
import { Email, Age } from '../../utils/FormInputTypes'

export default class SignUp extends React.Component<any, any> {

  signUpForm: any
  _refSignUpForm: any

  constructor(props) {
    super(props)

    this.signUpForm = t.struct({
      email: Email,
      firstName: t.String,
      lastName: t.String,
      age: Age
    })
  }

  @autobind
  onPress() {
    const value = this._refSignUpForm.getValue() // use that ref to get the form value
    console.log('value: ', value)
  }

  render() {
    // const Form = t.form.Form

    return (
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
          <MForm
            ref={form => this._refSignUpForm = form}
            type={this.signUpForm}
          />
          <MButton
            title='SIGN UP'
            onPress={this.onPress}
          />
        </Card>
      </MContainer>

    )
  }
}