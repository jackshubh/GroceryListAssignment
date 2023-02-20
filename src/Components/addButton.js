import React from 'react';
import {View, Button} from 'react-native';
import styles from '../styles/addModalStyles';

const AddButton = props => {
  return (
    <View style={styles.button}>
      <Button
        color="green"
        style={styles.button}
        title="ADD"
        onPress={props.onPress}
      />
    </View>
  );
};

export default AddButton;
