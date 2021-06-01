import React, {useState} from 'react';

import {TouchableWithoutFeedback, Text, View} from 'react-native';
import Video from 'react-native-video';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

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
          <Text style={styles.sideuiText}>Side Component</Text>
        </View>

        <View style={styles.bottomContainer}>
          <Text style={styles.handle}>@jccathey</Text>
          <Text style={styles.description}>hgiemgisnbigha pianopiano</Text>

          <View style={styles.songRow}>
            <Entypo name={'beamed-note'} size={24} color="white" />
            <Text style={styles.songName}>pianopiano</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Post;
