import React from 'react'
import { FormInput } from 'react-native-elements'
import { colors } from '../assets/styles'

interface State {
    color: string
}

export default class MFormInput extends React.Component<FormInput.propTypes, State> {
    constructor() {
        super()
        this.state = {color: undefined}
    }

    onFocus = () => {
        this.setState({
            color: colors.primary
        })
    }

    onBlur = () => {
        this.setState({
            color: undefined
        })
    }

    render() {
        console.log(this)
        return (
            <FormInput
                {...this.props}
                containerStyle={this.state.color ? {borderBottomColor: this.state.color} : {}}
                selectionColor={this.state.color || 'lightgray'}
                inputStyle={this.state.color ? {color: this.state.color} : {}}
                onFocus={() => this.onFocus()}
                onBlur={() => this.onBlur()}
            />
        )
    }
}