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

  bottomContainer: {
    padding: 10,
  },

  handle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },

  rightContainer: {
    alignSelf: 'flex-end',
  },

  description: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 10,
  },

  songRow: {
    flexDirection: 'row',
  },

  songName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '300',
  },
});

export default styles;
