import React from 'react'
import { Card, Avatar } from 'react-native-elements'
import { onSignOut } from '../../security'
import { MContainer, MButton } from '../../components'
import { colors } from '../../assets/styles'

export default ({ navigation }) => (
  <MContainer scrollable>
    <Card title='Chun Lee'>
      <Avatar
        xlarge
        rounded
        source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
        onPress={() => console.log('Works!')}
        activeOpacity={0.7}
        containerStyle={{ alignSelf: 'center' }}
      />
      <MButton
        backgroundColor={colors.secondary}
        title='ACCOUNT DETAILS'
        onPress={() => onSignOut().then(() => navigation.navigate('SignedOut'))}
      />
      <MButton
        backgroundColor={colors.primaryHighlight}
        title='SIGN OUT'
        onPress={() => onSignOut().then(() => navigation.navigate('SignedOut'))}
      />
    </Card>
  </MContainer>
)