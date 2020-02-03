import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Colors from '@app/app.colors';
class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>SETTINGS</Text>
      </View>
    );
  }
}

export {Settings};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  text: {
    color: '#3490dc',
    fontSize: 20,
    fontWeight: '600',
  },
});
