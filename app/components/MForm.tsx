import React from 'react'
import t from 'tcomb-form-native'
// import { colors } from '../assets/styles'

export default class MForm extends React.Component<any, any> {

    _refForm: any

    constructor(props) {
        super(props)
    }

    getValue = () => {
        return this._refForm.getValue()
    }

    render() {
        const Form = t.form.Form

        return (
            <Form ref={form => this._refForm = form} {...this.props} />
        )
    }
}