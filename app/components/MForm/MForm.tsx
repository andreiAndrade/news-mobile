import React from 'react'
import t from 'tcomb-form-native'
import { Textbox } from './templates'

const Form = t.form.Form
const templates = {
    ...Form.templates,
    textbox: Textbox
}

export default class MForm extends React.Component<any, any> {

    _refForm: any

    constructor(props) {
        super(props)
    }

    getValue = () => {
        return this._refForm.getValue()
    }

    render() {
        return (
            <Form ref={form => this._refForm = form} {...this.props} templates={templates} />
        )
    }
}