import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Colors from '@app/app.colors';
import {NavigationActions, StackActions} from 'react-navigation';
import {Strings} from '@assets';

class Splash extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.moveToLogin();
  }

  moveToLogin() {
    setTimeout(() => {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'Home'})],
      });
      this.props.navigation.dispatch(resetAction);
    }, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{Strings.SOCAR}</Text>
      </View>
    );
  }
}

export {Splash};

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
    fontSize: 30,
    fontWeight: '600',
  },
});
