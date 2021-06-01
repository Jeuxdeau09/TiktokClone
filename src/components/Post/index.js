import React from 'react';

import {View} from 'react-native';
import Video from 'react-native-video';
import styles from './styles';

const Post = () => {
  return (
    <View style={styles.container}>
      <Video
        source={{
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        style={styles.video}
        resizeMode={'cover'}
        onError={e => console.log(e)}
      />
    </View>
  );
};
export default Post;
