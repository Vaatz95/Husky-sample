import React from 'react';
import { View, Text } from 'react-native';

const PreviousResultScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>PreviousResultScreen</Text>
    </View>
  );
};

export default PreviousResultScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: FONT_SIZE.X_LARGE,
    color: COLORS.DEEP_RED,
    fontFamily: "nosifer-regular",
  }
});
