import React from 'react';
import {View, Button} from 'react-native';

import styles from '../styles/clearModalStyles';

const ClearAllButton = props => {
  return (
    <View style={styles.button}>
      <Button
        color="red"
        style={styles.button}
        title="Clear"
        onPress={props.onPress}
      />
    </View>
  );
};

export default ClearAllButton;
