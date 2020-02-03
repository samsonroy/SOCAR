import React from 'react';
import {StyleSheet, View} from 'react-native';
import ClickView from '@components/widgets/click-view';
import {scale} from '@helpers/scale';

export const Card = props => {
  const {style, onPress} = props;

  if (onPress) {
    return (
      <ClickView
        style={[styles.Container, style]}
        onPress={() => {
          onPress ? onPress() : null;
        }}>
        {props.children}
      </ClickView>
    );
  } else {
    return <View style={[styles.Container, style]}>{props.children}</View>;
  }
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'white',
    margin: scale(6),
    borderRadius: scale(6),
    //ios
    shadowOpacity: 0.1,
    shadowRadius: scale(6),
    shadowOffset: {
      height: 1,
      width: 0,
    },
    //android
    elevation: scale(2),
  },
});
