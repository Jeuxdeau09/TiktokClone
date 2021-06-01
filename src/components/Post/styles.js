import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height - 48,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  uiContainer: {
    height: '100%',
    justifyContent: 'flex-end',
  },

  uiText: {
    fontSize: 20,
    color: 'white',
  },

  sideuiText: {
    fontSize: 20,
    color: 'white',
  },

  rightContainer: {
    alignSelf: 'flex-end',
  },
});

export default styles;
