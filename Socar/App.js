import React, {Component} from 'react';
import getStore from './src/config/store.config';
import {Provider, connect} from 'react-redux';
import {routes} from './src/app/app.navigator';
import NavigatorService from './src/helpers/navigator';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

// const transitionConfig = () => {
//   return {
//     transitionSpec: {
//       duration: 350,
//       timing: Animated.timing,
//       useNativeDriver: true,
//     },
//   };
// };

const AppNavigator = createStackNavigator(routes);
const AppContainer = createAppContainer(AppNavigator);

const store = getStore();

// export let navigatorRef;

class Main extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount = () => {};

  componentWillUnmount = () => {};

  render() {
    return (
      <AppContainer
        // onNavigationStateChange={handleNavigationChange}
        // uriPrefix="/app"
        ref={navigatorRef => {
          this.navigator = navigatorRef;
          NavigatorService.setContainer(navigatorRef);
        }}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch,
});

const mapStateToProps = state => ({
  mainState: state,
});

const AppWithNavigationState = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);

export default function App() {
  return (
    <Provider store={store}>
      <AppWithNavigationState />
    </Provider>
  );
}
