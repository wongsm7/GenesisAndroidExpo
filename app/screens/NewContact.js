import React, { Component } from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import colors from '../config/colors';
import { TextInput } from '../components/TextInput';
import { PrimaryButton } from '../components/Buttons';

const fields = [
  { placeholder: 'Name', stateKey: 'firstName', iconName: "person-outline" },
  { placeholder: 'Email', stateKey: 'email', keyboardType: 'email-address', iconName: "md-mail-outline" },
  { placeholder: 'Mobile Phone', stateKey: 'mobilePhone', keyboardType: 'numeric', iconName: "md-call" },
  { placeholder: 'Home Phone', stateKey: 'homePhone', keyboardType: 'numeric', iconName: "md-call-outline" },
  { placeholder: 'City', stateKey: 'city', iconName: "md-home-outline" },
];

class NewContact extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onInputChange = (text, stateKey) => {
    const mod = {};
    mod[stateKey] = text;
    this.setState(mod);
  }

  handleSubmit = (index, override = false) => {
    if (index === fields.length - 1 || override) {
      alert('Submit');
    } else {
      const nextField = fields[index + 1];
      this[nextField.stateKey].focus();
    }
  };

  render() {
    return (
      <KeyboardAwareScrollView style={{ backgroundColor: colors.background }}>
        {
          fields.map((field, index) => (
            <TextInput
              key={field.stateKey}
              onChange={(text) => this.onInputChange(text, field.stateKey)}
              returnKeyType={index === fields.length - 1 ? 'done' : 'next'}
              onSubmitEditing={() => this.handleSubmit(index)}
              ref={(input) => this[field.stateKey] = input}
              {...field}
            />
          ))
        }
        <View style={{ marginTop: 20 }}>
          <PrimaryButton
            label="Save"
            onPress={() => this.handleSubmit(0, true)}
          />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default NewContact;
