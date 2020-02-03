import React, {Component} from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Colors from '@app/app.colors';
import {CarCard} from '../_components/CarCard';

import * as actions from '../../../redux/actions/actions';
import * as configActions from '../../../redux/actions/settings-data.actions';

class HomeC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carList: [],
      showLoader: false,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.configStatus === 'inProgress' ||
      nextProps.updateStatus === 'inProgress'
    ) {
      return {showLoader: true};
    } else if (nextProps.configStatus === 'Success') {
      return {showLoader: false, carList: nextProps.configObject.data};
    }
    return null;
  }

  componentDidMount = () => {
    this.props.requestAppConfig();
  };

  updateStatus = async status => {
    await this.props.updateBookingStatus(status, 20);
    this.props.requestAppConfig();
  };

  render() {
    const {showLoader, carList} = this.state;
    if (showLoader) {
      return (
        <View style={styles.containerActivity}>
          <ActivityIndicator size="large" color={Colors.StTropaz} />
        </View>
      );
    } else {
      return (
        <SafeAreaView style={styles.safeAreaView}>
          {this.props.configObject && (
            <FlatList
              extraData={this.state}
              data={carList}
              renderItem={({item, index}) =>
                item.status === 10 && (
                  <CarCard
                    item={item}
                    onClick={status => this.updateStatus(status)}
                    index={index}
                  />
                )
              }
              keyExtractor={item => item.id}
            />
          )}
        </SafeAreaView>
      );
    }
  }
}

const mapStateToProps = state => ({
  configObject: state.settingsData.userObject,
  configStatus: state.settingsData.configStatus,
  updateStatus: state.settingsData.updateStatus,
});

const mapDispatchToProps = dispatch => {
  const allactions = Object.assign({}, actions, configActions);
  const boundActionCreators = bindActionCreators(allactions, dispatch);
  const allActionProps = {...boundActionCreators, dispatch};
  return allActionProps;
};

// eslint-disable-next-line prettier/prettier
const Home = connect(mapStateToProps, mapDispatchToProps)(HomeC);

export {Home};

const styles = StyleSheet.create({
  safeAreaView: {
    paddingBottom: 0,
  },
  containerActivity: {
    flex: 1,
    backgroundColor: Colors.Alabaster,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
