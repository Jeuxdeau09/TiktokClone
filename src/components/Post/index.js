import React, {useState} from 'react';

import {TouchableWithoutFeedback, View} from 'react-native';
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
        />
      </TouchableWithoutFeedback>
    </View>
  );
};
export default Post;
