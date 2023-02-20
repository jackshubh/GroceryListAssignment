import React from 'react';
import {View, Button, Text, Modal} from 'react-native';

// import styles
import styles from '../styles/clearModalStyles';

const ClearAllModal = props => {
  return (
    //  Modal component to display the confirmation dialog
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.container}>
        {/* Container for the dialog text */}
        <View style={styles.infoContainer}>
          <View style={styles.textContainer}>
            {/* Headline text for the confirmation dialog */}
            <Text style={styles.headline}>Are you sure?</Text>
          </View>
          <View style={styles.textContainer}>
            {/*  Description text for the confirmation dialog  */}
            <Text>This will delete all items from the list.</Text>
            <Text>Are you sure that you want to do this?</Text>
          </View>
        </View>
        {/* Container for the confirmation buttons */}
        <View style={styles.buttonContainer}>
          {/* Cancel button to close the dialog */}
          <View style={styles.button}>
            <Button
              color="grey"
              style={styles.button}
              title="CANCEL"
              onPress={props.onClose}
            />
          </View>
          {/* Delete button to clear the list */}
          <View style={styles.button}>
            <Button
              color="red"
              style={styles.button}
              title="DELETE"
              onPress={props.onClearItems}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ClearAllModal;
