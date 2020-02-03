import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  SectionList,
} from 'react-native';
import Colors from '@app/app.colors';
import {CarCard} from '../_components/CarCard';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from '../../../redux/actions/actions';
import * as configActions from '../../../redux/actions/settings-data.actions';

class AccountC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoader: false,
    };
  }

  componentDidMount() {
    this.props.requestAppConfig();
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

  updateStatus = async status => {
    await this.props.updateBookingStatus(status, 30);
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
                item.status === 20 && (
                  <CarCard
                    item={item}
                    onComplete={status => this.updateStatus(status)}
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
});

const mapDispatchToProps = dispatch => {
  const allactions = Object.assign({}, actions, configActions);
  const boundActionCreators = bindActionCreators(allactions, dispatch);
  const allActionProps = {...boundActionCreators, dispatch};
  return allActionProps;
};

// eslint-disable-next-line prettier/prettier
const Account = connect(mapStateToProps, mapDispatchToProps)(AccountC);

export {Account};

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
  Active: {
    backgroundColor: Colors.charcoalGrey,
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
});
