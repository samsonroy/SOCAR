import React from 'react';
import {
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import {debounce} from 'lodash';

const ClickView = props => {
  const {style} = props;
  if (Platform.OS === 'android') {
    return (
      <TouchableNativeFeedback
        onPress={debounce(props.onPress, 1200, {
          leading: true,
          trailing: false,
        })}>
        <View style={style}>{props.children}</View>
      </TouchableNativeFeedback>
    );
  } else {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={debounce(props.onPress, 1200, {
          leading: true,
          trailing: false,
        })}>
        <View style={style}>{props.children}</View>
      </TouchableOpacity>
    );
  }
};

ClickView.propTypes = {
  onPress: PropTypes.func.isRequired,
};

ClickView.defaultProps = {};

export default ClickView;
