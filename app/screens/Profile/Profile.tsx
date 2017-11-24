import React from 'react'
import { Card, Avatar } from 'react-native-elements'
import { onSignOut } from '../../security'
import { MContainer, MButton } from '../../components'
import { colors } from '../../assets/styles'
import { Provider } from 'mobx-react'
import user from '../../models/User'

export default class Profile extends React.Component<any, any> {
  render() {
    const getPhoto = () => {
      console.log(user)
      console.log(user.picture)
      return user.picture
    }
    return (
      <Provider mainStore={user} >
        <MContainer scrollable>
          <Card title='Chun Lee'>
            <Avatar
              xlarge
              rounded
              source={{ uri: getPhoto() }}
              onPress={() => console.log('Works!')}
              activeOpacity={0.7}
              containerStyle={{ alignSelf: 'center' }}
            />
            <MButton
              backgroundColor={colors.secondary}
              title='ACCOUNT DETAILS'
              onPress={() => onSignOut().then(() => this.props.navigation.navigate('SignedOut'))}
            />
            <MButton
              backgroundColor={colors.primaryHighlight}
              title='SIGN OUT'
              onPress={() => onSignOut().then(() => this.props.navigation.navigate('SignedOut'))}
            />
          </Card>
        </MContainer>
      </Provider>
    )
  }
}
