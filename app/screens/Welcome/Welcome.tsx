import React from 'react'
import { View, ImageBackground, Modal, WebView } from 'react-native'
import {split} from 'lodash'
import { MButton } from '../../components'
import { colors } from '../../assets/styles'

import AuthService from '../../services/AuthService'

export default class Welcome extends React.Component<any, any> {

  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false
    }
  }

  feedlyAuthHandler(page) {
    if (page && page.url && page.url.includes('?code=') && !page.url.includes('callback')) {
      console.log(page.url)
      this.handleUrl(page.url)
      this.setState({ modalVisible: false })
      this.props.navigation.navigate('SignedIn')
    }
  }

  handleUrl(url) {
    const queryParams = split(split(url, '?')[1], '&')
    const codeParam = split(queryParams[0], '=')[1]
    AuthService.token(codeParam)
    console.log(codeParam)
  }

  render() {
    // const navigation = this.props.navigation
    return (
      <ImageBackground style={{
        flex: 1,
        width: null,
        height: null,
        flexDirection: 'row',
        alignItems: 'flex-end'
      }} source={{ uri: 'https://i.pinimg.com/736x/3c/2b/73/3c2b730d9d7e3a9ce07c252ae902eefb--starry-night-sky-night-skies.jpg' }}>
        <View style={{ flex: 1, marginBottom: 50 }}>
          <Modal
            animationType='slide'
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => { alert('Modal has been closed.') }}
          >
            <WebView
              onNavigationStateChange={(page) => this.feedlyAuthHandler(page)}
              source={{ uri: 'https://cloud.feedly.com/v3/auth/auth?client_id=feedly&redirect_uri=https://cloud.feedly.com/feedly.html&response_type=code&migrate=false&scope=https://cloud.feedly.com/subscriptions' }}
              style={{ marginTop: 20 }}
            />
            <MButton title='CLOSE' backgroundColor={colors.googlePrimary}
              onPress={() => this.setState({ modalVisible: false })}
            />
          </Modal>
          <MButton title='CONTINUE WITH FEEDLY' backgroundColor={colors.googlePrimary}
            onPress={() => this.setState({ modalVisible: true })}
          />
        </View>
      </ImageBackground >
    )
  }

}