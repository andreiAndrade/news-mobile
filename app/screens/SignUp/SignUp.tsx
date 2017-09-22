import React from 'react'
import { View, ScrollView } from 'react-native'
import { Card, FormLabel, FormInput, Avatar } from 'react-native-elements'
import { onSignIn } from '../../security'
import { colors } from '../../assets/styles'
import { MButton, MFormInput } from '../../components'

export default ({ navigation }) => (
  <View style={{ flex: 1 }}>
    <ScrollView contentContainerStyle={{paddingBottom: 20}}>
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
      <MFormInput placeholder='Email address...' containerStyle={{borderBottomColor: colors.primaryColor}} selectionColor={colors.primaryColor} />
      <FormLabel>Primeiro Nome</FormLabel>
      <FormInput placeholder='Primeiro Nome...' />
      <FormLabel>Último Sobrenome</FormLabel>
      <FormInput placeholder='Último Sobrenome...' />
      <FormLabel>Último Sobrenome</FormLabel>
      <FormInput placeholder='Último Sobrenome...' />

      <MButton
        buttonStyle={{ marginTop: 20 }}
        backgroundColor={colors.primaryColor}
        title='NEXT'
        onPress={() => {
          onSignIn().then(() => navigation.navigate('SignedIn'))
        }}
      />
    </Card>
    </ScrollView>
  </View>
)