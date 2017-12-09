import React, { Component } from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';

class SignUpForm extends Component {
  state = { phone: '' };

  render() {
    return (
      <View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Phone Number</FormLabel>
          <FormInput />
        </View>
        <Button title="Submit" />
      </View>
    );
  }
}

export default SignUpForm;
