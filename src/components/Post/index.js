import React, {useState} from 'react';

import {TouchableWithoutFeedback, Text, View} from 'react-native';
import Video from 'react-native-video';
import styles from './styles';

const Post = () => {
  const [paused, setPaused] = useState(false);

  const onPlayPausePress = () => {
    setPaused(!paused);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <Video
          source={{
            uri: '/Users/Jason/Downloads/Pure.mov',
          }}
          style={styles.video}
          resizeMode={'cover'}
          repeat={true}
          paused={paused}
          muted={true}
        />
      </TouchableWithoutFeedback>

      <View style={styles.uiContainer}>
        <View style={styles.rightContainer}>
          <Text style={styles.sideuiText}>Component agagwegdg </Text>
        </View>

        <Text style={styles.uiText}>Component agagwegdg </Text>
      </View>
    </View>
  );
};
export default Post;
