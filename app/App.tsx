import React from 'react'
import { AppRegistry } from 'react-native'
import { createRootNavigator } from './router'
import { isSignedIn } from './security'

class State {
    checkedSignIn: boolean
    signedIn: boolean
    constructor(signedIn, checkedSignIn) {
        this.checkedSignIn = checkedSignIn
        this.signedIn = signedIn
    }
}

export default class App extends React.Component {
    state: State
    constructor(props) {
        super(props)

        this.state = new State(false, false)
    }

    componentWillMount() {
        isSignedIn()
            .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
            .catch(() => alert('An error occurred'))
    }

    render() {
        const checkedSignIn = this.state.checkedSignIn
        const signedIn = this.state.signedIn

        // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
        if (!checkedSignIn) {
            return null
        }

        const Layout = createRootNavigator(signedIn)
        return <Layout />
    }
}

AppRegistry.registerComponent('News', () => App)