import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyC5bI0cyT893iGl6mCQbhW2YQpmCpUgCrI',
      authDomain: 'shivvy-one-time-password.firebaseapp.com',
      databaseURL: 'https://shivvy-one-time-password.firebaseio.com',
      projectId: 'shivvy-one-time-password',
      storageBucket: 'shivvy-one-time-password.appspot.com',
      messagingSenderId: '86605473880'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
