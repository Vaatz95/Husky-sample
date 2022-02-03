import React from 'react';
import { View, Text } from 'react-native';
import COLORS from '../../../common/constants/COLORS';
import FONT_SIZE from '../../../common/constants/FONT_SIZE';

const OneOnOneScreen = () => {
  return (
    <View>
      <Text>OneOnOneScreen</Text>
    </View>
  );
};

export default OneOnOneScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: FONT_SIZE.X_LARGE,
    color: COLORS.DEEP_RED,
    fontFamily: 'nosifer-regular',
  },
});
